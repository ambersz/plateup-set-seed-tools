import { useEffect, useState } from "preact/hooks";
import { UnlocksComboBox } from "./UnlockSelect";
import {
	GoalCardConfig,
	MessageFormat,
	ResultData,
	ResultFormat,
} from "./workers/seedSearchWorker";
import { usePersistentState } from "./hooks/usePersistentState";
import SeedSearchResult from "./components/SeedSearchResult";
import { LayoutProfileName, tables } from "./workers/reverse-engineered/run";
import { getHeatCardsForRun } from "./workers/reverse-engineered/heat";
import {
	DefaultHeatLevels,
	HeatCards,
	ChillCards,
	lookupHeatUnlock,
} from "./workers/db/heatLevels";
import { Unlocks } from "./workers/db/unlocks";

// Every run on this page is assumed to have the Banquet Dining setting active - it's
// force-added to the starting cards below rather than being user-selectable, since it
// isn't in the curated RestaurantSettings list.
const BanquetDiningCard = Unlocks.filter((a) => a.Name === "Banquet Dining")[0];

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

const defaultCardsByDay: GoalCardConfig[] = [];
for (let i = 0; i < 12; i++) {
	defaultCardsByDay.push({
		include: i !== 6 && i !== 11,
		cards: [],
	});
}

const SeedSearcherBanquetHall = () => {
	const [count, setCount] = useState<string | number>(0);
	const [ot15, setOT15] = usePersistentState<boolean>(
		false,
		"SEED_SEARCHER_BANQUET_HALL_OT15"
	);
	const [heatLevel, setHeatLevel] = usePersistentState<number>(
		0,
		"SEED_SEARCHER_BANQUET_HALL_HEAT_LEVEL"
	);
	const [heat2Card, setHeat2Card] = usePersistentState<GoalCardConfig>(
		{ include: true, cards: [] },
		"SEED_SEARCHER_BANQUET_HALL_HEAT2_CARD"
	);
	const [results, setResults] = usePersistentState<ResultData[]>(
		[],
		"SEED_SEARCHER_BANQUET_HALL_RESULTS"
	);
	const [searching, setSearching] = useState<boolean>(false);
	const [allowedTables, setAllowedTables] = usePersistentState<
		LayoutProfileName[]
	>(
		["Diner (1)", "Small (2)", "Medium (2)", "Large (3)", "Huge (4)"],
		"SEED_SEARCHER_BANQUET_HALL_ALLOWED_TABLES",
		(oldState) => {
			return oldState.flatMap((state) => {
				if (typeof state === "number") {
					switch (state) {
						case 1:
							return "Diner (1)";
						case 2:
							return ["Medium (2)", "Small (2)"];
						case 3:
							return "Large (3)";
						case 4:
							return "Huge (4)";
					}
				}
				return state;
			});
		}
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

	const cardDays = ot15
		? [3, 5, 6, 9, 12, 15, 18, 21, 24, 27]
		: [3, 5, 6, 9, 12];
	const toggleSearch = () => {
		if (searching) {
			sendMessage({ type: "stop" });
			setSearching(false);
		} else {
			// sanity check inputs
			if (cardsByDay[0].cards.length < 1) {
				if (
					!confirm(
						"No starting dish selected. Run search anyway? (If you're doing that ridiculous no food run 🤣)"
					)
				)
					return;
			} else if (cardsByDay[0].cards.length > 2) {
				// alert("Too many starting dishes selected");
				// return;
			}
			const invalidDays = [];
			for (let d = 1; d < cardDays.length; d++) {
				if (
					!cardsByDay[d] ||
					(cardsByDay[d].include && cardsByDay[d].cards.length === 0)
				)
					invalidDays.push(cardDays[d]);
			}
			if (heatLevel >= 2 && heat2Card.include && heat2Card.cards.length === 0) {
				invalidDays.push(2);
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
			const heatCards = getHeatCardsForRun(
				undefined,
				DefaultHeatLevels,
				heatLevel,
				lookupHeatUnlock
			).cards;
			const startingCards: GoalCardConfig = {
				...cardsByDay[0],
				cards: [...cardsByDay[0].cards, BanquetDiningCard, ...heatCards],
			};
			sendMessage({
				type: "start",
				data: {
					mapSizes: allowedTables,
					goalCards: [
						startingCards,
						...(heatLevel >= 2 ? [heat2Card] : []),
						...cardsByDay.slice(1, cardDays.length + 1),
					],
					goalAppliances: spawnGoals, // TODO: not supported yet
				},
			});
			setSearching(true);
		}
	};
	const [cardsByDay, setCardsByDay] = usePersistentState(
		defaultCardsByDay,
		"SEED_SEARCHER_BANQUET_HALL_CARDS_BY_DAY"
	);
	const handleCardSelectionChange = (dayIndex: number) => {
		return (newSelection: GoalCardConfig) => {
			setCardsByDay((orig) => {
				const copy = [...orig];
				copy[dayIndex] = newSelection;
				return copy;
			});
		};
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
	const [clipboard, setClipboard] = useState(defaultCardsByDay[1]);
	const handlePaste = (day: number) => {
		const copy = [...cardsByDay];
		copy[day] = { include: clipboard.include, cards: [...clipboard.cards] };
		setCardsByDay(copy);
	};
	return (
		<div class="search-container">
			<div class="search-config">
				<div>Every run on this page assumes Banquet Dining is active.</div>
				<div>
					<label for="ot15">Search until OT15</label>
					<input
						type="checkbox"
						id="ot15"
						onChange={() => {
							setOT15(!ot15);
						}}
						checked={ot15}
					/>
				</div>
				<div>
					<label for="heatLevel">Heat Level: </label>
					<select
						id="heatLevel"
						value={heatLevel}
						onChange={(e) => {
							setHeatLevel(Number((e.target as HTMLSelectElement).value));
						}}
					>
						{ChillCards.map((_, i) => (
							<option value={-(ChillCards.length - i)}>
								Chill {ChillCards.length - i}
							</option>
						))}
						<option value={0}>None</option>
						{HeatCards.map((_, i) => (
							<option value={i + 1}>Heat {i + 1}</option>
						))}
					</select>
				</div>
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
							id={0}
							onSelectionChange={handleCardSelectionChange(0)}
							showSelectionMode={false}
							label="Starting Cards"
							{...cardsByDay[0]}
							modes={["startingDishes", "settings"]}
						/>
						{heatLevel >= 2 && (
							<UnlocksComboBox
								id="heat2"
								onSelectionChange={setHeat2Card}
								label="After Day 2"
								{...heat2Card}
								modes={["unlocks"]}
							/>
						)}
						{cardDays.map((day, i) => (
							<UnlocksComboBox
								id={day}
								onSelectionChange={handleCardSelectionChange(i + 1)}
								label={"After Day " + (day > 15 ? `OT${day - 15}` : day)}
								{...(cardsByDay[i + 1] ?? {})}
								modes={
									day === 5
										? ["themes"]
										: day === 15
										? ["franchise"]
										: ["unlocks"]
								}
								showCopyPaste={day !== 5 && day !== 15}
								handleCopy={setClipboard}
								handlePaste={() => handlePaste(i + 1)}
							/>
						))}
					</>
				}
			</div>
			<div class="search-results">
				<div>
					<div>{count} seeds checked</div>
					<button onClick={toggleSearch}>
						{searching ? "Stop" : "Start"} Search
					</button>
				</div>
				<div class="results">
					{results.length ? (
						<button onClick={() => setResults([])}>
							Clear Previous Results
						</button>
					) : (
						""
					)}
					<div>
						<code>seed | map (tables): cards</code>
					</div>
					{results.map((r, i) => (
						<SeedSearchResult key={i} result={r} />
					))}
				</div>
			</div>
		</div>
	);
};

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

export default SeedSearcherBanquetHall;
