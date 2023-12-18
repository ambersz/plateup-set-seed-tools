import { render } from "preact";
import "./index.css";
import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
import { useEffect, useState } from "preact/hooks";
import { Appliance } from "./workers/db/appliances";
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

const seedSearchWorker = new Worker(
	new URL("./workers/seedSearchWorker.ts", import.meta.url),
	{ type: "module" }
);
const seedSearchWorker2 = new Worker(
	new URL("./workers/seedSearchWorker.ts", import.meta.url),
	{ type: "module" }
);
const seedSearchWorker3 = new Worker(
	new URL("./workers/seedSearchWorker.ts", import.meta.url),
	{ type: "module" }
);
function sendMessage(message: MessageFormat) {
	seedSearchWorker3.postMessage(message);
	seedSearchWorker2.postMessage(message);
	return seedSearchWorker.postMessage(message);
}

const defaultCardsByDay: GoalCardConfig[] = [
	{
		include: true,
		cards: [RestaurantSettings[0], cakes] as Unlock[],
	},
];

const SeedSearcher = () => {
	const [results, setResults] = usePersistentState<ResultData[]>(
		[],
		"SEED_SEARCHER_RESULTS"
	);
	const [searching, setSearching] = useState<boolean>(false);

	useEffect(() => {
		console.log("useEffect registering message done");
		const handleSearchResults = (m: { data: ResultFormat }) => {
			const e: { data: ResultFormat } = m;
			switch (e.data.type) {
				case "error":
					break;
				case "result":
					setResults((r) => {
						if (r.length >= 10) {
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
		seedSearchWorker.onmessage = handleSearchResults;
		seedSearchWorker2.onmessage = handleSearchResults;
		seedSearchWorker3.onmessage = handleSearchResults;
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
			sendMessage({
				type: "start",
				data: {
					mapSizes: [1],
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
				copy[day] = newSelection;
				return copy;
			});
		};
	};
	const [allowedTables, setAllowedTables] = usePersistentState(
		[1, 2, 3, 4],
		"SEED_SEARCHER_ALLOWED_TABLES"
	);
	const tables = [1, 2, 3, 4];
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

				{cardsByDay !== defaultCardsByDay && (
					<>
						<UnlocksComboBox
							onSelectionChange={handleCardSelectionChange(0)}
							showSelectionMode={false}
							label="Starting Cards"
							{...cardsByDay[0]}
							unlockGroupFilter={[UnlockGroup.Dish, UnlockGroup.Special]}
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
				)}
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
