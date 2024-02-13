import { render } from "preact";
import "./index.css";
import { useEffect, useState } from "preact/hooks";
import { UnlocksComboBox } from "./UnlockSelect";
import {
	GoalCardConfig,
	MessageFormat,
	ResultData,
	ResultFormat,
} from "./workers/seedSearchWorker";
import { usePersistentState } from "./hooks/usePersistentState";

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

const SeedSearcher = () => {
	const [count, setCount] = useState(0);
	const [ot15, setOT15] = usePersistentState<boolean>(
		false,
		"SEED_SEARCHER_NORMAL_OT15"
	);
	const [results, setResults] = usePersistentState<ResultData[]>(
		[],
		"SEED_SEARCHER_NORMAL_RESULTS"
	);
	const [searching, setSearching] = useState<boolean>(false);
	const [allowedTables, setAllowedTables] = usePersistentState(
		[1, 2, 3, 4],
		"SEED_SEARCHER_NORMAL_ALLOWED_TABLES"
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
				alert("No starting dish selected.");
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
					goalCards: cardsByDay.slice(0, cardDays.length + 1), // 1 extra for starting cards config
					goalAppliances: spawnGoals, // TODO: not supported yet
				},
			});
			setSearching(true);
		}
	};
	const [cardsByDay, setCardsByDay] = usePersistentState(
		defaultCardsByDay,
		"SEED_SEARCHER_NORMAL_CARDS_BY_DAY"
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
							modes={["startingDishes", "settings"]}
						/>
						{cardDays.map((day, i) => (
							<UnlocksComboBox
								onSelectionChange={handleCardSelectionChange(i + 1)}
								label={"After Day " + (day > 15 ? `OT${day - 15}` : day)}
								{...(cardsByDay[i + 1] ?? {})}
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
					{results.map((r) => {
						return (
							<div>
								{r.seed} ({r.mapSize}): <div>{r.cards.join(", ")}</div>
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
