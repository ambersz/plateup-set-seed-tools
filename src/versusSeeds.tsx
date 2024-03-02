import { useState, useEffect } from "preact/hooks";
import { DishType } from "./kitchenEnums";
import { UnlocksComboBox } from "./UnlockSelect";
import { GoalCardConfig } from "./workers/seedSearchWorker";
import { LayoutSize } from "./forms/LayoutSize";
import { RestaurantSettings, StartingDishes } from "./workers/db/unlocks";
import {
	RequestFormat,
	ResponseDataFormat,
	ResponseFormat,
} from "./workers/versusWorker";
const defaultConfig = { include: true, cards: StartingDishes };
const worker = new Worker(
	new URL("./workers/versusWorker.ts", import.meta.url),
	{ type: "module" }
);
function sendMessage(message: RequestFormat) {
	worker.postMessage(message);
}
const defaultTables = [1];
const VersusSeeds = () => {
	const [startingCards, setStartingCards] =
		useState<GoalCardConfig>(defaultConfig);
	const [strict, setStrict] = useState(true);
	const [autumn, setAutumn] = useState(false);
	const [allowedTables, setAllowedTables] = useState<number[]>(defaultTables);
	const [results, setResults] = useState<ResponseDataFormat[]>([]);
	useEffect(() => {
		worker.onmessage = (e: MessageEvent<ResponseFormat>) => {
			setResults((prevResults) => [...prevResults, e.data.data]);
		};
	}, []);

	const runSearch = () => {
		let startingDishes = startingCards.cards.filter(
			(a) => a.DishType === DishType.Base
		);
		const settings = [];
		if (autumn)
			settings.push(
				RestaurantSettings.filter((a) => a.Name === "Community")[0]
			);
		sendMessage({
			type: strict ? "strict" : "flex",
			data: { mapSettings: settings, startingDishes, allowedTables },
		});
	};
	return (
		<>
			Strict Mode: The same 2 cards are offered each day, no matter which card
			path you took on previous days (Side effect: you will never get offered a
			card that you passed up earlier in the run) <br />
			Flex Mode: Across all card paths, there are at most 10 unique cards.
			<br />
			<label for="autumn">Autumn:</label>
			<input
				type="checkbox"
				id="autumn"
				checked={autumn}
				onClick={() => setAutumn((a) => !a)}
			/>
			<br />
			<label for="modeToggle">Mode Toggle:</label>
			<input
				type="checkbox"
				id="modeToggle"
				checked={strict}
				onClick={() => setStrict((a) => !a)}
			/>
			Currently on {strict ? "Strict" : "Flex"} Mode
			<br />
			<LayoutSize
				setAllowedTables={setAllowedTables}
				allowedTables={allowedTables}
			/>
			<UnlocksComboBox
				id={""}
				onSelectionChange={setStartingCards}
				showSelectionMode={false}
				label="Starting Cards"
				{...startingCards}
				modes={["startingDishes"]}
			/>
			<button onClick={runSearch}>Run Search</button>
			<br />
			Results:
			{results.map((a) => (
				<div>
					{a.startingDish}: {a.seed} ({a.mapSize})
				</div>
			))}
		</>
	);
};
export default VersusSeeds;
