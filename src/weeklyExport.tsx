import { render } from "preact";
import "./index.css";
import { getWeeklyConfig } from "./workers/weekly";
import { CardPaths } from "./components/CardPaths";
import { useState } from "preact/hooks";
import { useInput } from "./utils/useInput";
import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
import Appliances from "./workers/db/appliances";
import { Unlock } from "./kitchenTypes";
const spawnConfig: RerollConfig[] = [{ spawnInside: true, blueprintCount: 5 }];
const lastRoll: RerollConfig = { spawnInside: true, blueprintCount: 10 };
const rerollConfigs: RerollConfig[] = [
	{ spawnInside: true, blueprintCount: 5 },
	{ spawnInside: false, playerInside: true, blueprintCount: 5 },
	{ spawnInside: false, playerInside: false, blueprintCount: 5 },
];
const normalCardDays = [3, 5, 6, 9, 12];
const weeklyConfig = getWeeklyConfig();
const defaultAppliances = Appliances.filter(
	(a) => a.Name === "Booking Desk" || a.Name === "Blueprint Cabinet"
).sort((a, b) => (a.Name < b.Name ? 1 : -1));
const WeeklyRerollsExport = () => {
	const [selectedCardPath, setSelectedCardPath] = useState<Unlock[]>([]);
	const [rowIndex, setRowIndex] = useState<number>();
	const [platesDay, setPlatesDay] = useInput("2");
	const [researchDay, setResearchDay] = useInput("2");
	return (
		<>
			<div>
				<button
					onClick={() => {
						let tsv = [
							selectedCardPath.map((a) => a.Name).join("\t"),
							[
								"prep of day",
								"blueprints spawn inside",
								"at least one player inside the restaurant",
								"blueprints",
							].join("\t"),
						];
						const shop = new Shop(weeklyConfig.seed);
						shop.OwnedAppliances = defaultAppliances;
						shop.addCard(weeklyConfig.dish);
						shop.addCard(weeklyConfig.setting);
						const addCards = [...selectedCardPath].slice(shop.Cards.length);
						for (let day = 1; day < 15; day++) {
							tsv.push(
								(day + 1).toString() +
									"\t\t\t" +
									shop
										.getAppliances(spawnConfig, day)
										.map((a) => a.Name)
										.join("\t")
							);
							if (Number(platesDay) - 1 === day)
								shop.OwnedAppliances.push(
									Appliances.filter((a) => a.Name === "Plates")[0]
								);
							if (Number(researchDay) - 1 === day)
								shop.OwnedAppliances.push(
									Appliances.filter((a) => a.Name === "Research Desk")[0]
								);
							for (const reroll of rerollConfigs) {
								const conf = [reroll, lastRoll];
								for (const {} of [1, 2]) {
									tsv.push(
										day +
											1 +
											"\t" +
											reroll.spawnInside +
											"\t" +
											!!reroll.playerInside +
											"\t" +
											shop
												.getAppliances(conf, day)
												.map((a) => a.Name)
												.join("\t")
									);
									conf.splice(0, 0, reroll);
								}
							}
							if (normalCardDays.includes(day)) shop.addCard(addCards.shift()!);
						}
						navigator.clipboard.writeText(tsv.join("\n"));
					}}
				>
					Export tsv to clipboard
				</button>
			</div>
			<div>
				<label for="plates">Buy plates on prep of day</label>
				<input
					type="number"
					id="plates"
					value={platesDay}
					onChange={setPlatesDay}
				/>
			</div>
			<div>
				<label for="research">Buy research desk on prep of day</label>
				<input
					type="number"
					id="research"
					value={researchDay}
					onChange={setResearchDay}
				/>
			</div>
			<CardPaths
				chooseCardPath
				onSelectCardPath={(unlocks, i) => {
					setRowIndex(i);
					// debugger;
					setSelectedCardPath(unlocks);
				}}
				highlightCardPath={rowIndex}
				seed={weeklyConfig.seed}
				startingCards={[weeklyConfig.setting, weeklyConfig.dish]}
			/>
		</>
	);
};

render(
	<>
		<WeeklyRerollsExport />
	</>,
	document.getElementById("app")!
);
