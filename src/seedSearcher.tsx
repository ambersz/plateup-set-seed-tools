import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
import { useEffect, useState } from "preact/hooks";
import { Unlock } from "./kitchenTypes";
import { UnlocksComboBox } from "./UnlockSelect";
import {
	GoalCardConfig,
	MessageFormat,
	ResultData,
	ResultFormat,
} from "./workers/seedSearchWorker";
import { usePersistentState } from "./hooks/usePersistentState";
import SeedSearchResult from "./components/SeedSearchResult";
import { LayoutProfileName } from "./workers/reverse-engineered/run";
import { tables } from "./workers/reverse-engineered/run";

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
		"Closing Time?",
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
let first = true;
function exportResults(d: ResultData) {
	if (import.meta.env.PROD) return;
	return;
	if (!first) return;
	first = false;
	const webhookURL = `https://script.google.com/macros/s/AKfycbxHGpZJCRvhxqnvmJiBNQhpkXV6CmUgTN2LtxqPtj5xpc2n--VbQMnzrQkXpnKInoRajQ/exec?data=${
		d.seed
	},${d.cards.map((a) => encodeURIComponent(a)).join(",")}`;
	console.log({ webhookURL });
	fetch(webhookURL);
}
const SeedSearcher = () => {
	const [count, setCount] = useState<string | number>(0);
	const [results, setResults] = usePersistentState<ResultData[]>(
		[],
		"SEED_SEARCHER_RESULTS"
	);
	const [searching, setSearching] = useState<boolean>(false);
	const [allowedTables, setAllowedTables] = usePersistentState<
		LayoutProfileName[]
	>(
		["Diner (1)", "Small (2)", "Medium (2)", "Large (3)", "Huge (4)"],
		"SEED_SEARCHER_ALLOWED_TABLES"
	);
	useEffect(() => {
		console.log("useEffect registering message done");
		const handleSearchResults = (m: { data: ResultFormat }) => {
			const e: { data: ResultFormat } = m;
			switch (e.data.type) {
				case "error":
					break;
				case "result":
					const d = e.data.data;
					exportResults(d);
					setResults((r) => {
						if (r.length >= Infinity) {
							sendMessage({ type: "stop" });
							setSearching(false);
						}
						return [...r, d];
					});
					break;
				case "progress":
					setCount(e.data.data);
					break;
				default:
					break;
			}
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
				// alert("Too many starting dishes selected");
				// return;
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
					newSelection.cards.push(
						RestaurantSettings.filter((a) => a.Name === "Turbo")[0]
					);
				}
				copy[day] = newSelection;
				return copy;
			});
		};
	};
	const [clipboard, setClipboard] = useState(defaultGoodCards);
	const handlePaste = (day: number) => {
		const copy = [...cardsByDay];
		copy[day] = { include: clipboard.include, cards: [...clipboard.cards] };
		setCardsByDay(copy);
	};
	const handleToggleTable = (n: LayoutProfileName) => {
		return () => {
			if (allowedTables.includes(n)) {
				setAllowedTables(allowedTables.filter((a) => a !== n));
			} else {
				setAllowedTables([...allowedTables, n]);
			}
		};
	};
	return (
		<>
			<div style={{ maxWidth: "50vw" }}>
				When more than one starting dish is selected, the searcher will
				alternate among all of them
			</div>
			<div style={{ maxWidth: "50vw" }}>
				On include/green card mode, the searcher prioritizes the cards which
				were added first (e.g. if a seed offers Ice Cream and Herd Mentality on
				Day N, and Ice Cream is before Herd Mentality in the card list for Day
				N, the searcher will <i>always</i> choose Ice Cream.)
			</div>
			<div class="search-container">
				<div class="search-config">
					<div style="min-width:fit-content;">
						<label>Map Layout: </label>
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
								id={0}
								showSelectionMode={false}
								label="Starting Cards"
								{...cardsByDay[0]}
								modes={["startingDishes", "settings"]}
							/>
							{cardDays.map((day) => (
								<UnlocksComboBox
									onSelectionChange={handleCardSelectionChange(day)}
									label={"After Day " + day}
									id={day}
									showCopyPaste={day !== 5}
									handleCopy={setClipboard}
									handlePaste={() => handlePaste(day)}
									{...(cardsByDay[day] ?? {})}
									modes={day === 5 ? ["themes"] : ["unlocks"]}
								/>
							))}
						</>
					}
				</div>
				<div class="search-results">
					<div>{count} seeds checked</div>
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
						<div>
							<code>seed | layout (tables): cards</code>
						</div>
						{results.map((r) => (
							<SeedSearchResult turbo result={r} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};
// render(
// 	<SeedSearcher />,
// 	// <SeedSearcher defaultSeed={"t4tmhm8r"} />,
// 	document.getElementById("app")!
// );

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
export default SeedSearcher;
