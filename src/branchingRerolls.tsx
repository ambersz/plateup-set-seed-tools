import { render, FunctionComponent, VNode } from "preact";
import { useEffect, useState } from "preact/compat";
import "./index.css";

import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
import Appliances, { Appliance } from "./workers/db/appliances";
import { GhostBlueprints } from "./components/GhostBlueprints";
import { useInput } from "./utils/useInput";
import { Unlock } from "./kitchenTypes";
import { UnlocksComboBox } from "./UnlockSelect";
import { AppliancesComboBox } from "./ApplianceSelect";

function explainRerollConfig(c: RerollConfig[]): string {
	let res = "";
	if (!c.length) return "Spawn: any settings";
	for (let i = 0; i < c.length; i++) {
		const config = c[i];
		let roll = i ? `Reroll ${i}` : "Spawn";
		roll += ": ";
		roll += config.spawnInside
			? "Spawn Inside"
			: "Spawn Outside, " +
			  (config.playerInside ? "Someone Inside" : "Everyone Outside");
		if (i) {
			roll += `, reroll ${c[i].blueprintCount} blueprints`;
		}
		res += roll + "\n";
	}
	res += "Last Reroll: any settings";
	return res;
}
interface BranchingRerollProps {
	seed: string;
	day: number;
	startingConfig?: RerollConfig[];
	baseUpgradeChance?: number;
	blueprintCount?: number;
	searchDepth?: number;
	ghostBlueprints?: number;
	blueprintCabinets: number;
	solo: boolean;
	cards: Unlock[];
	appliances: Appliance[];
}
const BranchingRerolls: FunctionComponent<BranchingRerollProps> = ({
	seed,
	day,
	startingConfig = [],
	baseUpgradeChance = 0,
	blueprintCount = 5,
	searchDepth = 2,
	ghostBlueprints = 2,
	blueprintCabinets = 1,
	solo,
	cards = [],
	appliances = [],
}: BranchingRerollProps) => {
	console.log({ baseUpgradeChance, blueprintCount });
	const finalRollConfig: RerollConfig = {
		blueprintCount: blueprintCount + ghostBlueprints,
		spawnInside: true,
	};
	const shop = new Shop(seed, baseUpgradeChance);
	for (const c of cards) shop.addCard(c);
	shop.OwnedAppliances = [...shop.OwnedAppliances, ...appliances];
	const configOptions: RerollConfig[] = [];
	/*
	for (const spawnInside of spawnInsides) {
		if (spawnInside) {
			configOptions.push({ spawnInside: true, blueprintCount });
			continue;
		}
		for (const playerInside of playerInsides) {
			configOptions.push({ spawnInside: false, blueprintCount, playerInside });
		}
	}
	*/
	const spawnConfigs = [];
	// for (let i = -blueprintCount + 1; i <= blueprintCabinets; i++) {
	for (let i = -blueprintCabinets - 1; i <= blueprintCabinets; i++) {
		const config = {
			spawnInside: true,
			blueprintCount: blueprintCount + i,
		};
		configOptions.push(config as RerollConfig);
		if (!solo)
			configOptions.push({
				spawnInside: false,
				playerInside: true,
				blueprintCount: blueprintCount + i,
			});
		configOptions.push({
			spawnInside: false,
			playerInside: false,
			blueprintCount: blueprintCount + i,
		});
		if (i === 0) {
			spawnConfigs.push(config);
			spawnConfigs.push({
				spawnInside: false,
				playerInside: true,
				blueprintCount: blueprintCount + i,
			});
			spawnConfigs.push({
				spawnInside: false,
				playerInside: false,
				blueprintCount: blueprintCount + i,
			});
		}
	}
	let renders: VNode[] = [];
	let cumulativeConfigs: RerollConfig[][] = [startingConfig];
	for (let depth = 0; depth <= searchDepth; depth++) {
		let newConfigs: RerollConfig[][] = [];
		let row: VNode[] = [];
		for (let i = 0; i < cumulativeConfigs.length; i++) {
			const final = { ...finalRollConfig };
			final.blueprintCount =
				(cumulativeConfigs[i].at(-1)?.blueprintCount ?? blueprintCount) +
				ghostBlueprints;
			const roll = shop
				.getAppliances([...cumulativeConfigs[i], final], day)
				.map((a) => a.Name);
			row.push(
				<td
					colspan={configOptions.length ** (searchDepth - depth)}
					title={explainRerollConfig(cumulativeConfigs[i])}
					// TODO: non-tooltip version so people can copy the instructions https://stackoverflow.com/questions/13845003/tooltips-for-cells-in-html-table-no-javascript
				>
					<GhostBlueprints
						bps={roll}
						// normalCount={blueprintCount}
						ghostCount={ghostBlueprints}
					/>
				</td>
			);
			const options =
				startingConfig.length + depth === 0 ? spawnConfigs : configOptions;
			for (const branchConfig of options) {
				const newConfig = [...cumulativeConfigs[i], branchConfig];
				newConfigs.push(newConfig as RerollConfig[]);
			}
		}
		renders.push(<tr>{row}</tr>);
		cumulativeConfigs = newConfigs;
	}
	return <table> {renders} </table>;
};
interface SeedConfig {
	seed: string;
	initialRerollConfig: RerollConfig[];
	day: number;
	blueprintCount: number;
	baseUpgradeChance: number;
	solo: boolean;
	appliances: Appliance[];
	cards: Unlock[];
	searchDepth: number;
}
interface SeedConfigFormProps {
	onConfigChange: (config: SeedConfig) => void;
}
const SeedConfigForm = ({ onConfigChange }: SeedConfigFormProps) => {
	const [searchDepth, setSearchDepth] = useState(2);
	const [seed, setSeed] = useInput("az");
	const [day, setDay] = useInput("1");
	const [blueprintCount, setBlueprintCount] = useState(5);
	const [baseUpgradeChance, setUpgradeChance] = useState(0);
	const [solo, setSolo] = useState(false);
	const [appliances, setAppliances] = useState<Appliance[]>([
		Appliances.filter((a) => a.Name === "Blueprint Cabinet")[0],
	]);
	const [cards, setCards] = useState<Unlock[]>([]);
	const handleSettingChange: HTMLInputElement["onchange"] = (e) => {
		if ((e.target as HTMLInputElement).checked) {
			setBlueprintCount(7);
			setUpgradeChance(0.25);
		} else {
			setBlueprintCount(5);
			setUpgradeChance(0);
		}
	};
	useEffect(() => {
		onConfigChange({
			seed,
			day: Number(day),
			initialRerollConfig: [],
			blueprintCount,
			baseUpgradeChance,
			solo,
			appliances,
			cards,
			searchDepth,
		});
	}, [
		seed,
		day,
		blueprintCount,
		baseUpgradeChance,
		solo,
		appliances,
		cards,
		searchDepth,
	]);

	return (
		<div>
			<div>
				<div>Run Config:</div>
				<label for="solo">Solo:</label>
				<input
					type="checkbox"
					checked={solo}
					onChange={() => setSolo((a) => !a)}
				/>
				<label for="searchDepth">Search Depth</label>{" "}
				<input
					id="searchDepth"
					type="number"
					value={searchDepth}
					onChange={(e) =>
						setSearchDepth(Number((e.target as HTMLInputElement).value))
					}
				/>
				<br />
				<label for="seed" value={seed}>
					Seed:{" "}
				</label>
				<input type="text" value={seed} onChange={setSeed} />
				<label for="setting">Turbo?</label>
				<input
					id="setting"
					type="checkbox"
					checked={blueprintCount === 7}
					onChange={handleSettingChange}
				/>
			</div>
			<div>
				{/* Day Config: */}
				<label for="day" value={day}>
					Day:{" "}
				</label>
				<input type="number" value={day} onChange={setDay} />
				<UnlocksComboBox
					label="Selected cards:"
					onSelectionChange={(gcc) => {
						setCards(gcc.cards);
					}}
					showSelectionMode={false}
					cards={cards}
					include={true}
				/>
				<AppliancesComboBox
					label="Select owned appliances:"
					placeholder=""
					onSelectionChange={setAppliances}
					appliances={appliances}
				/>
			</div>
		</div>
	);
};

const BranchingRerollPage = () => {
	const [config, setConfig] = useState({ seed: "az", day: 1 } as SeedConfig);
	return (
		<>
			<SeedConfigForm onConfigChange={setConfig} />
			<BranchingRerolls {...config} blueprintCabinets={1} />
		</>
	);
};
render(
	<BranchingRerollPage
	// seed="az"
	// day={1}
	// startingConfig={[{ spawnInside: true, blueprintCount: 5 }]}
	/>,
	document.getElementById("app")!
);
