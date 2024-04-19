import { FunctionComponent } from "preact";
import { AppliancesComboBox } from "../ApplianceSelect";
import { UnlocksComboBox } from "../UnlockSelect";
import { Appliance } from "../workers/db/appliances";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { usePersistentState } from "../hooks/usePersistentState";
import {
	AutoRigWorkerInput,
	AutoRigWorkerOutput,
	SeedConfig,
} from "../workers/autoRigWorker";
import { RigPiece } from "../utils/niceRerolls";
function postMessage(worker: Worker, message: AutoRigWorkerInput) {
	worker.postMessage(message);
}
interface AutoRigProps {}
const AutoRig: FunctionComponent<AutoRigProps> = ({}: AutoRigProps) => {
	const [config, setConfig] = usePersistentState<SeedConfig>(
		defaultBranchingRerollConfig,
		"BRANCH_CONFIG",
		(config: SeedConfig) => {
			if (typeof config.simpleBPSettings === "boolean") {
				debugger;
				return {
					...config,
					simpleBPSettings: config.simpleBPSettings ? "insideOnly" : "full",
				};
			}
			return config;
		}
	);
	const [tiers, setTiers] = usePersistentState<Appliance[][]>(
		[[]],
		"RIG_TIERS"
	);
	const [result, setResult] = usePersistentState<string>("", "RIG_RESULT");
	const handleMessage: (a: MessageEvent<AutoRigWorkerOutput>) => void =
		useCallback((mess) => {
			setResult(mess.data);
		}, []);
	const worker = useRef<Worker>();
	useEffect(() => {
		if (worker.current === undefined)
			worker.current = new Worker(
				new URL("../workers/autoRigWorker.ts", import.meta.url),
				{ type: "module" }
			);
		worker.current.onmessage = handleMessage;
	}, []);
	function requestRoute(tiers: RigPiece[][]) {
		postMessage(worker.current!, { config, tiers });
	}

	return (
		<div>
			<SeedConfigForm onConfigChange={setConfig} config={config} />
			{tiers.map((appliances, i) => {
				return (
					<AppliancesComboBox
						shopModifiersOnly={false}
						appliances={appliances}
						allowDupes={true}
						onSelectionChange={(newAppliances: Appliance[]) => {
							setTiers((tiers) => {
								const copy = [...tiers];
								copy.splice(i, 1, newAppliances);
								let j = copy.length;
								while (j--) {
									if (copy[j].length) break;
									copy.pop();
								}
								copy.push([]);
								return copy;
							});
						}}
					/>
				);
			})}
			<button
				onClick={() => {
					const compiledTiers = tiers.map((as) => {
						let count: { [appName: string]: number } = {};
						for (const a of as) {
							if (!count[a.Name]) count[a.Name] = 0;
							count[a.Name]++;
						}
						let res = [];
						for (const [goal, number] of Object.entries(count)) {
							res.push({ goal, substitutes: [], number });
						}
						return res;
					});
					requestRoute(compiledTiers);
				}}
			>
				Route Rig
			</button>
			{/* {(!tiers.length || tiers.at(-1)!.length) && (
				<AppliancesComboBox
					appliances={[]}
					onSelectionChange={(newAppliances) => {
						setTiers((tiers) => {
							return [...tiers, newAppliances];
						});
					}}
				/>
			)} */}
			<div>
				{result.split("\n").map((line) => (
					<div>{line}</div>
				))}
			</div>
		</div>
	);
};
interface SeedConfigFormProps {
	onConfigChange: (config: SeedConfig) => void;
	config: SeedConfig;
}
const SeedConfigForm = ({ onConfigChange, config }: SeedConfigFormProps) => {
	const {
		seed,
		blueprintCount,
		solo,
		cards,
		searchDepth,
		simpleBPSettings = false,
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
				<input
					type="checkbox"
					id="solo"
					checked={solo}
					onChange={() => {
						setConfig("solo", !solo);
					}}
				/>
				<span style="margin:0 20px">
					<label for="simpleRerollSettings">Spawn setting configs: </label>
					<select
						value={
							simpleBPSettings === true
								? "insideOnly"
								: simpleBPSettings === false
								? "full"
								: simpleBPSettings
						}
						onChange={(e) => {
							setConfig(
								"simpleBPSettings",
								// @ts-ignore
								(e.target as HTMLOptionElement)?.value ?? "full"
							);
						}}
					>
						<option value="full">All spawn settings</option>
						<option value="insideOnly">Spawn Inside only</option>
						<option value="noSwitching">
							Don't switch bp settings after spawn
						</option>
					</select>
				</span>
				<div>
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
				</div>
				<label for="seed" value={seed}>
					Seed:{" "}
				</label>
				<input
					type="text"
					id="seed"
					value={seed}
					disabled
					onChange={(e) => {
						setConfig("seed", (e.target as HTMLInputElement).value);
					}}
				/>
				<label for="setting"> Turbo?</label>
				<input
					id="setting"
					type="checkbox"
					disabled
					checked={blueprintCount === 7}
					onChange={handleSettingChange}
				/>
			</div>
			<div>
				<UnlocksComboBox
					id="cardSchedule"
					// label="Enter all cards in order, including your starting dish:"
					// onSelectionChange={(gcc) => {
					// 	setConfig("cards", gcc.cards);
					// }}
					onSelectionChange={() => {}} // don't allow changes?
					showSelectionMode={false}
					cards={cards}
					include={true}
					modes={["themes", "dishes", "customerCards"]}
				/>
			</div>
		</div>
	);
};

export default AutoRig;
