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
import { LayoutProfileName } from "./workers/reverse-engineered/run";
const defaultConfig = { include: true, cards: StartingDishes };
const worker = new Worker(
	new URL("./workers/versusWorker.ts", import.meta.url),
	{ type: "module" }
);
function sendMessage(message: RequestFormat) {
	worker.postMessage(message);
}
const defaultTables: LayoutProfileName[] = ["Diner (1)"];
const VersusSeeds = () => {
	const [startingCards, setStartingCards] =
		useState<GoalCardConfig>(defaultConfig);
	const [autumn, setAutumn] = useState(false);
	const [allowedTables, setAllowedTables] =
		useState<LayoutProfileName[]>(defaultTables);
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
			type: "priorityModel",
			data: { mapSettings: settings, startingDishes, allowedTables },
		});
	};
	return (
		<>
			Requires all card paths of a seed to follow a ordered priority model.
			(Essentially, you see the same two cards on a day regardless of the card
			path you took to get there, with exceptions to allow cards to be
			re-offered and cards which have additional requirements to show up on only
			the card paths that unlock them)
			<br />
			<label for="autumn">Autumn:</label>
			<input
				type="checkbox"
				id="autumn"
				checked={autumn}
				onClick={() => setAutumn((a) => !a)}
			/>
			<br />
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
