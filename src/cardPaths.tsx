import { CardPaths, defaultConfig } from "./components/CardPaths";
import { UnlocksComboBox } from "./UnlockSelect";
import { useState } from "preact/hooks";
import { GoalCardConfig } from "./workers/seedSearchWorker";
import { usePersistentState } from "./hooks/usePersistentState";
const CardPathsPage = () => {
	const [seed, setSeed] = usePersistentState("", "CARD_PATHS_SEED");
	const [startingConfig, setStartingConfig] =
		useState<GoalCardConfig>(defaultConfig);
	return (
		<>
			<div>
				<label for="seed">Seed:</label>
				<input
					onChange={(e) => setSeed((e.target as HTMLInputElement).value)}
					value={seed}
					id="seed"
				/>
			</div>
			<UnlocksComboBox
				id={""}
				label="Starting Card(s)"
				cards={startingConfig.cards}
				onSelectionChange={setStartingConfig}
				modes={["startingDishes", "settings"]}
				showSelectionMode={false}
			/>
			<CardPaths seed={seed} startingCards={startingConfig.cards} />
		</>
	);
};
export default CardPathsPage;
