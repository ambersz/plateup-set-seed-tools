import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { usePersistentState } from "../hooks/usePersistentState";
import { SeedConfig } from "../workers/autoRigWorker";
import { RestaurantSettings } from "../workers/db/unlocks";
import { Run } from "../workers/reverse-engineered/run";
import { SeedConfigForm } from "./AutoRig";

const GroupSizes = () => {
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
	const [playerCount, setPlayerCount] = usePersistentState<number>(
		1,
		"RIG_PLAYER_COUNT"
	);
	const days = [<></>];
	const nonSetting = config.cards.filter(
		(a) => !RestaurantSettings.some((b) => b.Name === a.Name)
	);
	const startingCards = config.cards.filter((a) =>
		RestaurantSettings.some((b) => b.Name === a.Name)
	);
	if (nonSetting.length) startingCards.push(nonSetting[0]);
	const otherCards = nonSetting.slice(1);
	const run = new Run(config.seed, startingCards, otherCards);
	run.playerCount = playerCount;
	for (let i = 1; i <= 15; i++) {
		const groupSizes = run.getGroupSizes(i);
		days.push(
			<tr>
				<td>{i}</td>
				<td>{groupSizes.length}</td>
				<td>{groupSizes.reduce((a, b) => a + b)}</td>
				<td>{Math.round(run.guessMoney(i))}</td>
				<td>{groupSizes.join(",")}</td>
			</tr>
		);
	}

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
			<SeedConfigForm onConfigChange={setConfig} config={config} />
			<table>
				<thead>
					<tr>
						<td>Day</td>
						<td>Groups</td>
						<td>Customers</td>
						<td>Money?</td>
						<td>All Groups</td>
					</tr>
				</thead>
				<tbody>{days}</tbody>
			</table>
		</div>
	);
};

export default GroupSizes;
