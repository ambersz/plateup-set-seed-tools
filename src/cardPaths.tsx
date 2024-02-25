import { render } from "preact";
import "./index.css";
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
			Starting config
			<UnlocksComboBox
				label="Starting Card(s)"
				cards={startingConfig.cards}
				onSelectionChange={setStartingConfig}
				modes={["startingDishes", "settings"]}
			/>
			<CardPaths seed={seed} startingCards={startingConfig.cards} />
		</>
	);
};
render(
	<CardPathsPage />,
	// <SeedSearcher defaultSeed={"t4tmhm8r"} />,
	document.getElementById("app")!
);
