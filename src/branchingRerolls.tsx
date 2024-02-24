import { render, FunctionComponent, VNode } from "preact";
import "./index.css";

import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
import Appliances, { Appliance } from "./workers/db/appliances";
import { GhostBlueprints } from "./components/GhostBlueprints";
import { Unlock } from "./kitchenTypes";
import { UnlocksComboBox } from "./UnlockSelect";
import { AppliancesComboBox } from "./ApplianceSelect";
import Version from "./components/Version";
import { usePersistentState } from "./hooks/usePersistentState";

function explainRerollConfig(c: RerollConfig[]) {
	let res = "";
	if (!c.length) {
		res = "Spawn: any settings";
	} else {
		for (let i = 0; i < c.length; i++) {
			const config = c[i];
			let roll = i ? `Reroll ${i}` : "Spawn";
			roll += ": ";
			roll +=
				"Blueprints " +
				(config.spawnInside
					? "Spawn Inside"
					: "Spawn Outside, " +
					  (config.playerInside
							? "Someone Inside"
							: "All Players Stand Outside"));
			if (i) {
				roll += `, reroll ${c[i].blueprintCount} blueprints`;
			}
			res += roll + "\n";
		}
		res += `Reroll ${c.length}: any settings`;
	}
	const lines = res.split("\n");
	return (
		<div
			class="reroll-instructions"
			onClick={(e) => {
				if (e.detail < 2) {
					return;
				}
				const range = document.createRange();
				range.selectNodeContents(e.currentTarget);
				const sel = document.getSelection();
				sel?.removeAllRanges();
				sel?.addRange(range);
			}}
		>
			{lines.map((a) => (
				<div>{a}</div>
			))}
		</div>
	);
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
const defaultAppliances = Appliances.filter(
	(a) => a.Name === "Booking Desk" || a.Name === "Blueprint Cabinet"
).sort((a, b) => (a.Name < b.Name ? 1 : -1));
const BranchingRerolls: FunctionComponent<BranchingRerollProps> = ({
	seed,
	day,
	startingConfig = [],
	baseUpgradeChance = 0,
	blueprintCount = 5,
	searchDepth = 2,
	ghostBlueprints = 2,
	// ghostBlueprints = 6,
	blueprintCabinets = 1,
	solo,
	cards = [],
	appliances = [],
}: BranchingRerollProps) => {
	seed = seed.toLocaleLowerCase().trim();
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
			final.blueprintCount = cumulativeConfigs[i].length
				? (cumulativeConfigs[i].at(-1)?.blueprintCount ?? blueprintCount) +
				  ghostBlueprints
				: blueprintCount;
			const roll = shop
				.getAppliances([...cumulativeConfigs[i], final], day)
				.map((a) => a.Name);
			row.push(
				<td
					class="reroll-cell"
					colspan={configOptions.length ** (searchDepth - depth)}
					// TODO: non-tooltip version so people can copy the instructions https://stackoverflow.com/questions/13845003/tooltips-for-cells-in-html-table-no-javascript
				>
					<GhostBlueprints
						bps={roll}
						// normalCount={blueprintCount}
						ghostCount={depth === 0 ? 0 : ghostBlueprints}
					/>
					{explainRerollConfig(cumulativeConfigs[i])}
				</td>
			);
			const options =
				startingConfig.length + depth === 0 ? spawnConfigs : configOptions;
			for (const branchConfig of options) {
				const newConfig = [...cumulativeConfigs[i], branchConfig];
				newConfigs.push(newConfig as RerollConfig[]);
			}
		}
		renders.push(
			<tr>
				<td>{depth ? `Reroll ${depth}` : `Spawns`}</td>
				{row}
			</tr>
		);
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
	config: SeedConfig;
}
const SeedConfigForm = ({ onConfigChange, config }: SeedConfigFormProps) => {
	const {
		seed,
		day,
		blueprintCount,
		solo,
		appliances = defaultAppliances,
		cards,
		searchDepth,
	} = config;
	const handleSettingChange: HTMLInputElement["onchange"] = (e) => {
		let newConf = { ...config };
		if ((e.target as HTMLInputElement).checked) {
			newConf.blueprintCount = 7;
			newConf.baseUpgradeChance = 0.25;
		} else {
			newConf.blueprintCount = 5;
			newConf.baseUpgradeChance = 0;
		}
		onConfigChange(newConf);
	};

	const setConfig = <T extends keyof SeedConfig>(
		key: T,
		value: SeedConfig[T]
	) => {
		let newConf = { ...config };
		newConf[key] = value;
		onConfigChange(newConf);
	};
	return (
		<div>
			<div>
				<div>Run Config:</div>
				<label for="solo">Solo:</label>
				<input type="checkbox" id="solo" checked={solo} onChange={() => {}} />
				<label for="searchDepth">Number of Rerolls</label>{" "}
				<input
					id="searchDepth"
					type="number"
					value={searchDepth}
					onChange={(e) => {
						setConfig(
							"searchDepth",
							Number((e.target as HTMLInputElement).value)
						);
					}}
				/>
				<br />
				<label for="seed" value={seed}>
					Seed:{" "}
				</label>
				<input
					type="text"
					id="seed"
					value={seed}
					onChange={(e) => {
						setConfig("seed", (e.target as HTMLInputElement).value);
					}}
				/>
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
					Prep of Day:{" "}
				</label>
				<input
					type="number"
					id="day"
					value={day + 1}
					onChange={(e) => {
						setConfig("day", Number((e.target as HTMLInputElement).value) - 1);
					}}
				/>
				<UnlocksComboBox
					label="Selected cards:"
					onSelectionChange={(gcc) => {
						setConfig("cards", gcc.cards);
					}}
					showSelectionMode={false}
					cards={cards}
					include={true}
					modes={["themes", "dishes"]}
				/>
				<AppliancesComboBox
					label="Select owned appliances:"
					placeholder=""
					onSelectionChange={(app) => {
						setConfig("appliances", app);
					}}
					appliances={appliances}
				/>
			</div>
		</div>
	);
};
const defaultBranchingRerollConfig: SeedConfig = {
	seed: "az",
	day: 2,
	cards: [],
	initialRerollConfig: [],
	blueprintCount: 5,
	baseUpgradeChance: 0,
	solo: false,
	appliances: defaultAppliances,
	searchDepth: 2,
};
const BranchingRerollPage = () => {
	const [config, setConfig] = usePersistentState(
		defaultBranchingRerollConfig,
		"BRANCH_CONFIG"
	);
	return (
		<>
			<div>
				Hover over a cell for instructions on how to get those blueprints.
				Getting the blueprints in grey requires taking extra blueprints out of
				cabinets
			</div>
			<SeedConfigForm onConfigChange={setConfig} config={config} />
			<BranchingRerolls {...config} blueprintCabinets={1} />
			{false && (
				<div style={{ maxWidth: "50vw" }}>
					<div>How to read each cell:</div>
					The blueprints in normal text are the ones you would see if you
					rerolled all blueprints from the previous step without buying any. The
					greyed out blueprints are those you would see only if you take
					additional blueprints out of cabinets just before the final reroll.
					<div>
						For example, if a cell says
						<table>
							<GhostBlueprints
								ghostCount={2}
								bps={[
									"Clipboard Stand",
									"Display Stand",
									'"Specials" Menu',
									"Kitchen Floor Protector",
									"Coffee Table",
									"Mixer",
									"Carrots",
								]}
							/>
						</table>
						with the tooltip <br />
						<code>Spawn: Blueprints spawn inside Reroll 1: any settings</code>
						If you reroll exactly the 5 spawned blueprints, you would get the
						blueprints in the regular text (
						<code>
							Clipboard Stand, Display Stand, "Specials" Menu, Kitchen Floor
							Protector, Coffee Table
						</code>
						)
					</div>
				</div>
			)}
			<Version />
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
