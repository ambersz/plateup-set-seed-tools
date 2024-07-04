import { useState } from "preact/hooks";
import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { usePersistentState } from "../hooks/usePersistentState";
import { RestaurantSettings } from "../workers/db/unlocks";
import { Run } from "../workers/reverse-engineered/run";
import { SeedConfigForm, SeedConfig } from "../SeedConfigForm";

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
	const [calls, setCalls] = useState<number[]>([]);
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
	let totalCustomerCount = 0;
	for (let i = 1; i <= 15; i++) {
		const groupSizes = run.getGroupSizes(i);
		const customers = groupSizes.reduce((a, b) => a + b);
		totalCustomerCount += customers;
		const normalGroups = Math.ceil(
			run.getExpectedCustomers(i) / run.getExpectedGroupSize(i)
		);
		const dayLength = run.getDayLength(i);
		days.push(
			<tr>
				<td>{i}</td>
				<td>{groupSizes.length}</td>
				<td>{customers}</td>
				<td>{Math.round(run.guessMoney(i))}</td>
				<td>{groupSizes.join(",")}</td>
				<td>
					<input
						type="number"
						style="width:3lh;text-align:center"
						value={calls[i - 1]}
						onChange={(e) => {
							setCalls((calls) => {
								let copy = [...calls];
								copy[i - 1] = Number((e.target as HTMLInputElement).value);
								return copy;
							});
						}}
					/>
				</td>
				<td>
					{(
						((normalGroups - (calls[i - 1] ?? 0)) / normalGroups) *
						dayLength
					).toFixed(0)}{" "}
					seconds
				</td>
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
			<SeedConfigForm onConfigChange={setConfig} config={config} mode="cards" />
			<div>Total Customers: {totalCustomerCount}</div>
			<table>
				<thead>
					<tr>
						<td>Day</td>
						<td>Groups</td>
						<td>Customers</td>
						<td>Money?</td>
						<td>All Groups</td>
						<td>Calls (excluding rushes)</td>
						<td>Remaining Time</td>
					</tr>
				</thead>
				<tbody>{days}</tbody>
			</table>
		</div>
	);
};

export default GroupSizes;
