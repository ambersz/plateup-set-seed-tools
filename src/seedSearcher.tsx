import { render } from "preact";
import "./index.css";
import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
import { useEffect, useState } from "preact/hooks";
import { Unlock } from "./kitchenTypes";
import { UnlocksComboBox } from "./UnlockSelect";
import { DishType, UnlockGroup } from "./kitchenEnums";
import {
	GoalCardConfig,
	MessageFormat,
	ResultData,
	ResultFormat,
} from "./workers/seedSearchWorker";
import { usePersistentState } from "./hooks/usePersistentState";

const cakes = Unlocks.filter((u) => u.Name === "Cakes")[0];

const seedSearchWorkers: Worker[] = [];
const multithreading = 1;
for (let i = 0; i < multithreading; i++) {
	seedSearchWorkers.push(
		new Worker(new URL("./workers/seedSearchWorker.ts", import.meta.url), {
			type: "module",
		})
	);
}

function sendMessage(message: MessageFormat) {
	for (const worker of seedSearchWorkers) {
		worker.postMessage(message);
	}
}

const defaultCardsByDay: GoalCardConfig[] = [
	{
		include: true,
		cards: [
			RestaurantSettings.filter((a) => a.Name === "Turbo")[0],
		] as Unlock[],
	},
];
if (import.meta.env.DEV) defaultCardsByDay[0].cards.push(cakes);
const defaultGoodCards: GoalCardConfig = {
	include: true,
	cards: [
		"Ice Cream",
		"Instant Service",
		"All You Can Eat",
		"Victorian Standards",
		"Sedate Atmosphere",
		"Roast Potato",
		"Broccoli",
		"Bamboo",
		"Mashed Potato",
		"Chips",
		"Corn on the Cob",
		"Onion Rings",
	].flatMap((n) => Unlocks.filter((a) => a.Name === n)),
};
const defaultBadCustCards: GoalCardConfig = {
	include: false,
	cards: [
		"Apple Pie",
		"Cherry",
		"Pumpkin",
		"Leisurely",
		"Mandarin",
		"Bread",
		"Closing Time",
		"Picky",
		"Medium",
		"Advertising",
		"Cheese ",
		"Soup",
	].flatMap((n) => Unlocks.filter((a) => a.Name.includes(n))),
};
{
	let d = 1;
	for (; d <= 9; d++) {
		defaultCardsByDay[d] =
			d === 5
				? {
						include: true,
						cards: Unlocks.filter((a) => a.Name === "Affordable"),
				  }
				: defaultGoodCards;
	}
	for (; d <= 14; d++) {
		defaultCardsByDay[d] = defaultBadCustCards;
	}
}

const SeedSearcher = () => {
	const [results, setResults] = usePersistentState<ResultData[]>(
		[],
		"SEED_SEARCHER_RESULTS"
	);
	const [searching, setSearching] = useState<boolean>(false);
	const [allowedTables, setAllowedTables] = usePersistentState(
		[1, 2, 3, 4],
		"SEED_SEARCHER_ALLOWED_TABLES"
	);
	const tables = [1, 2, 3, 4];
	useEffect(() => {
		console.log("useEffect registering message done");
		const handleSearchResults = (m: { data: ResultFormat }) => {
			const e: { data: ResultFormat } = m;
			switch (e.data.type) {
				case "error":
					break;
				case "result":
					setResults((r) => {
						if (r.length >= 30) {
							sendMessage({ type: "stop" });
							setSearching(false);
						}
						return [...r, e.data.data];
					});

					break;
				default:
					break;
			}
			console.log({ e });
		};
		for (const worker of seedSearchWorkers) {
			worker.onmessage = handleSearchResults;
		}
	}, []);
	const cardDays = [];
	for (let i = 1; i <= 14; i++) {
		cardDays.push(i);
	}
	const toggleSearch = () => {
		if (searching) {
			sendMessage({ type: "stop" });
			setSearching(false);
		} else {
			// sanity check inputs
			if (cardsByDay[0].cards.length < 2) {
				alert("No starting dish selected.");
				return;
			} else if (cardsByDay[0].cards.length > 2) {
				alert("Too many starting dishes selected");
				return;
			}
			const invalidDays = [];
			for (let d = 1; d < 15; d++) {
				if (
					!cardsByDay[d] ||
					(cardsByDay[d].include && cardsByDay[d].cards.length === 0)
				)
					invalidDays.push(d);
			}
			if (invalidDays.length) {
				if (invalidDays.length > 1)
					invalidDays[invalidDays.length - 1] =
						"and " + invalidDays[invalidDays.length - 1];
				alert(
					`Empty card configurations for day${
						invalidDays.length > 1 ? "s" : ""
					} ` +
						invalidDays.join(invalidDays.length > 2 ? ", " : " ") +
						". Add cards, or switch to exclude cards mode."
				);
				return;
			}
			sendMessage({
				type: "start",
				data: {
					mapSizes: allowedTables,
					goalCards: cardsByDay,
					goalAppliances: spawnGoals, // TODO: not supported yet
				},
			});
			setSearching(true);
		}
	};
	const [cardsByDay, setCardsByDay] = usePersistentState(
		defaultCardsByDay,
		"SEED_SEARCHER_CARDS_BY_DAY"
	);
	const handleCardSelectionChange = (day: number) => {
		return (newSelection: GoalCardConfig) => {
			setCardsByDay((orig) => {
				const copy = [...orig];
				if (day === 0 && newSelection.cards[0]?.Name !== "Turbo") {
					newSelection.cards.splice(0, 0, copy[day].cards[0]);
				}
				copy[day] = newSelection;
				return copy;
			});
		};
	};

	const handleToggleTable = (n: number) => {
		return () => {
			if (allowedTables.includes(n)) {
				setAllowedTables(allowedTables.filter((a) => a !== n));
			} else {
				setAllowedTables([...allowedTables, n]);
			}
		};
	};
	return (
		<div class="search-container">
			<div class="search-config">
				<div style="min-width:fit-content;">
					<label>Starting Tables: </label>
					{tables.map((n) => {
						const key = n + "-table";
						return (
							<>
								<label for={key}>{n}</label>
								<input
									id={key}
									type="checkbox"
									onChange={handleToggleTable(n)}
									checked={allowedTables.includes(n)}
								/>
							</>
						);
					})}
				</div>

				{
					// cardsByDay !== defaultCardsByDay &&
					<>
						<UnlocksComboBox
							onSelectionChange={handleCardSelectionChange(0)}
							showSelectionMode={false}
							label="Starting Cards"
							{...cardsByDay[0]}
							unlockGroupFilter={[UnlockGroup.Dish]}
							dishTypeFilter={[DishType.Null, DishType.Base]}
						/>
						{cardDays.map((day) => (
							<UnlocksComboBox
								onSelectionChange={handleCardSelectionChange(day)}
								label={"After Day " + day}
								{...(cardsByDay[day] ?? {})}
								unlockGroupFilter={
									day === 5
										? [UnlockGroup.PrimaryTheme]
										: [UnlockGroup.Generic, UnlockGroup.Dish]
								}
							/>
						))}
					</>
				}
			</div>
			<div class="search-results">
				<button onClick={toggleSearch}>
					{searching ? "Stop" : "Start"} Search
				</button>
				<div class="results">
					{results.length ? (
						<button onClick={() => setResults([])}>
							Clear Previous Results
						</button>
					) : (
						""
					)}
					{results.map((r) => {
						return (
							<div>
								{r.seed}: <div>{r.cards.join(", ")}</div>
								{r.blueprints.map((bp) => bp.Name).join(", ")}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
render(
	<SeedSearcher />,
	// <SeedSearcher defaultSeed={"t4tmhm8r"} />,
	document.getElementById("app")!
);

const spawnGoals = import.meta.env.DEV
	? [
			"Rolling Pin",
			"Portioner",
			"Freezer",
			"Tray Stand",
			"Bar Table",
			"Grabber - Rotating",
	  ]
	: [];
