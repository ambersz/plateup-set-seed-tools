import { FunctionComponent } from "preact";
import { AppliancesComboBox } from "../ApplianceSelect";
import { Appliance } from "../workers/db/appliances";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { usePersistentState } from "../hooks/usePersistentState";
import {
	AutoRigWorkerInput,
	AutoRigWorkerOutput,
} from "../workers/autoRigWorker";
import { RigPiece } from "../utils/niceRerolls";
import { SeedConfigForm, SeedConfig } from "../SeedConfigForm";
function postMessage(worker: Worker, message: AutoRigWorkerInput) {
	worker.postMessage(message);
}
interface AutoRigProps {}
const UPGRADE_MAP: { [appName: string]: string[] } = {
	"Grabber - Rotating": ["Smart Grabber"],
	Grabber: ["Conveyor"],
	// Grabber: ["Conveyor", "Grabber - Rotating", "Smart Grabber"],
	Freezer: ["Counter"],
	Workstation: ["Counter"],
	"Prep Station": ["Frozen Prep Station"],
	"Frozen Prep Station": ["Prep Station"],
	Mixer: ["Rapid Mixer", "Conveyor Mixer", "Heated Mixer"],
	// "Kitchen Floor Protector": ["Robot Buffer", "Floor Buffer"],
	"Dish Rack": ["Dish Washer"],
	"Rapid Mixer": ["Mixer", "Conveyor Mixer"],
	"Heated Mixer": ["Mixer", "Rapid Mixer"],
	"Conveyor Mixer": ["Heated Mixer", "Mixer"],
	Bin: ["Affordable Bin", "Expanded Bin", "Compactor Bin", "Composter Bin"],
	"Compactor Bin": ["Expanded Bin", "Bin"],
	"Composter Bin": ["Compactor Bin", "Bin"],
	"Expanded Bin": ["Composter Bin", "Bin"],
	// "Metal Table": ["Dining Table"],
	"Table - Simple Cloth": ["Dining Table"],
	"Table - Fancy Cloth": import.meta.env.DEV
		? ["Table - Simple Cloth", "Dining Table", "Bar Table"]
		: ["Dining Table"],
	// "Bar Table": ["Dining Table"],
	"Power Sink": ["Soaking Sink", "Sink"],
	"Soaking Sink": ["Sink", "Dish Washer"],
	"Dish Washer": ["Sink", "Wash Basin"],
	"Danger Hob": ["Safety Hob", "Hob"],
	"Safety Hob": ["Hob", "Danger Hob"],
	Microwave: ["Oven"],
	"Robot Mop": ["Fast Mop"],
	"Robot Buffer": ["Floor Buffer"],
	"Copying Desk": ["Research Desk", "Discount Desk"],
	"Discount Desk": ["Research Desk", "Blueprint Desk"],
	Teleporter: ["Dumbwaiter"],
};
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
	const [playerCount, setPlayerCount] = usePersistentState<number>(
		1,
		"RIG_PLAYER_COUNT"
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
	const requestRoute = (tiers: RigPiece[][]) => {
		postMessage(worker.current!, { config, tiers, playerCount });
	};

	return (
		<div>
			<label for="playerCount">Player Count</label>
			<input
				id="playerCount"
				defaultValue={playerCount.toString()}
				type="number"
				onChange={(e) => {
					const target = e.target as HTMLInputElement;
					setPlayerCount(Number(target.value));
				}}
			/>
			<SeedConfigForm onConfigChange={setConfig} config={config} mode="cards" />
			{tiers.map((appliances, i) => {
				return (
					<AppliancesComboBox
						shopModifiersOnly={false}
						appliances={appliances}
						allowDupes={true}
						label={`Tier ${i + 1} appliances: `}
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
							res.push({ goal, substitutes: UPGRADE_MAP[goal] ?? [], number });
						}
						return res;
					});
					requestRoute(compiledTiers);
				}}
			>
				Route Rig
			</button>
			<button
				onClick={() => {
					setResult("");
				}}
			>
				Clear Previous Results
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

export default AutoRig;
