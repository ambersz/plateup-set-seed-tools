import { getWeeklyConfig } from "./workers/weekly";
import { CardPaths } from "./components/CardPaths";
import { useState } from "preact/hooks";
import { useInput } from "./utils/useInput";
import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
import Appliances, { Appliance } from "./workers/db/appliances";
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

const constantStaples = [
	"Counter",
	"Dining Table",
	"Sink",
	"Hob",
	"Research Desk",
];
function organizeStapleSpawns(spawns: Appliance[]): Appliance[] {
	// counter, table, hob, sink
	const ordered: Appliance[] = [];
	for (let j = 0; j < constantStaples.length; j++) {
		const name = constantStaples[j];
		for (let i = 0; i < spawns.length; i++) {
			if (spawns[i].Name === name) {
				ordered[j] = spawns.splice(i, 1)[0];
			}
		}
	}
	// prefer to put plates in the research desk column since they're both conditional-- generally will end up as far right as possible
	spawns.sort(
		(a, b) => (a.StapleWhenMissing ? 1 : 0) - (b.StapleWhenMissing ? 1 : 0)
	);
	// fill in remaining non-staples
	let j = 0;
	while (spawns.length) {
		while (ordered[j]) j++;
		ordered[j] = spawns.shift()!;
		j++;
	}
	return ordered;
}
const WeeklyRerollsExport = () => {
	const [selectedCardPath, setSelectedCardPath] = useState<Unlock[]>([]);
	const [rowIndex, setRowIndex] = useState<number>();
	const [platesDay, setPlatesDay] = useInput("2");
	const [researchDay, setResearchDay] = useInput("2");
	return (
		<>
			<div>
				Designed for use with{" "}
				<a href="https://docs.google.com/spreadsheets/d/1hlkwDRavJPK4CkXLycuM5_lDkiRbS0H-8Ftf0tSv3lk/edit?gid=0#gid=0&range=B22:I23">
					Lock's spreadsheet tools
				</a>
			</div>
			<div>
				<button
					onClick={() => {
						let tsv = [
							selectedCardPath.map((a) => a.Name).join("\t"),
							[
								"prep of day",
								"reroll #",
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
							let card: undefined | Unlock = undefined;
							if (normalCardDays.includes(day)) {
								card = addCards.shift();
								shop.handleNewCardSpawnEffects(card);
							}
							tsv.push(
								(day + 1).toString() +
									"\t0\t\t\t" +
									organizeStapleSpawns(shop.getAppliances(spawnConfig, day))
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
							shop.handleNewCardRerollEffects(card);
							for (const reroll of rerollConfigs) {
								const conf = [reroll, lastRoll];
								for (const rerollNumber of [1, 2]) {
									tsv.push(
										day +
											1 +
											"\t" +
											rerollNumber +
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
							shop.addCard(card);
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

export default WeeklyRerollsExport;
