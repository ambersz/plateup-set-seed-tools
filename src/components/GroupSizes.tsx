import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { usePersistentState } from "../hooks/usePersistentState";
import { RestaurantSettings } from "../workers/db/unlocks";
import { Run } from "../workers/reverse-engineered/run";
import { SeedConfigForm, SeedConfig } from "../SeedConfigForm";
import { useSignal, useSignalEffect } from "@preact/signals";
const manageSimulation = (run: Run, spentMoney: number[]) => {
	let times = 10000;
	const t = times;
	let brokeDay: number[] = new Array(17).fill(0);
	let debtByDay: number[] = new Array(17).fill(0);
	while (times--) {
		const [day, debt] = simulateBudget(run, [0, ...spentMoney]);
		if (true) {
			brokeDay[day]++;
			debtByDay[day] += debt;
		}
	}
	debtByDay = debtByDay.map((a, i) => {
		if (brokeDay[i]) return a / brokeDay[i];
		return a;
	});
	brokeDay = brokeDay.map((a) => a / t);
	return brokeDay.slice(1);
};
const simulateBudget = (run: Run, spentMoney: number[]): [number, number] => {
	let cumulativeMoney = 0;
	let lowPoint = Infinity;
	let lowDay = 16;
	for (let i = 0; i <= 15; i++) {
		// if (i === 7) debugger;
		const todayMoney = run.simulateMoney(i);
		if (todayMoney < 10) {
			debugger;
		}
		cumulativeMoney += todayMoney;
		cumulativeMoney -= spentMoney[i] ?? 0;
		if (cumulativeMoney < 0) return [i, cumulativeMoney];
		// if (i === 4) return [i, cumulativeMoney];
		if (i > 1 && cumulativeMoney < lowPoint) {
			lowPoint = cumulativeMoney;
			lowDay = i;
		}
	}
	if (Number.isNaN(cumulativeMoney)) {
		debugger;
	}
	return [16, cumulativeMoney];
	// return [lowDay, lowPoint];
};

const defaultRerollCounts = new Array(15).fill(0);
const defaultApplianceCosts = new Array(15).fill(0);
const defaultTotalCosts = new Array(15).fill(0);
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
	const rerollCounts = useSignal<number[]>(defaultRerollCounts);
	const applianceCosts = useSignal<number[]>(defaultApplianceCosts);
	const totalCosts = useSignal<number[]>(defaultTotalCosts);
	const failureChances = useSignal<number[]>();
	useSignalEffect(() => {
		let cumulativeCostsByDay: number[] = [];
		let rerollCost = 10;
		for (let i = 0; i < 15; i++) {
			let todaysCosts = 0;
			for (let r = 0; r < rerollCounts.value[i]; r++) {
				todaysCosts += rerollCost;
				rerollCost += 10;
			}
			todaysCosts += applianceCosts.value[i];
			cumulativeCostsByDay.push(todaysCosts);
		}
		totalCosts.value = cumulativeCostsByDay;
		// failureChances.value = undefined;
	});
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
	const handleRunSim = () => {
		const brokeDays = manageSimulation(run, totalCosts.value);
		failureChances.value = brokeDays;
	};

	run.playerCount = playerCount;
	let totalCustomerCount = 0;
	let cumulativeMoney = run.guessMoney(0);

	let rerollsForPots = 2; // let's say I had to spend two rerolls looking for copy desks and such
	let flowerPotCosts = 60; // discount desk
	for (let i = 0; i < rerollsForPots; i++) flowerPotCosts += 10 * (i + 1);
	flowerPotCosts += (20 + 60 + 20 + 20 + 60 + 20 + 60 + 60 + 60 + 40 + 40) / 2; // tools
	let cumulativeFlowers = 0;
	let flowers: number[] = [];
	let cumulativeCosts = 0;
	for (let i = 1; i <= 15; i++) {
		cumulativeCosts += totalCosts.value[i - 1];
		const groupSizes = run.getGroupSizes(i);
		const customers = groupSizes.reduce((a, b) => a + b);
		totalCustomerCount += customers;
		const todayMoney = run.guessMoney(i);
		cumulativeMoney += todayMoney;
		{
			flowers.sort((a, b) => b - a);
			let discountAdjacent = 3;
			if (flowers.length > 8) discountAdjacent += 3;
			for (let j = 0; j < Math.min(flowers.length, discountAdjacent); j++) {
				flowers[j] = Math.ceil(flowers[j] / 2);
			}
			flowerPotCosts += flowers.reduce((a, b) => a + b, 0);
			// console.log(JSON.stringify(flowers));
			cumulativeFlowers += flowers.length;
			let remaining = cumulativeMoney - flowerPotCosts;
			while (remaining > 0) {
				let cost = (rerollsForPots + 1) * 10; // cost of the next reroll
				cost += 10; // cost of a blueprint cabinet to hold the flower
				if (!(rerollsForPots % 8)) {
					// need a new copying desk for the next flower pots
					cost += 60;
				}
				if (cost > remaining) break;
				rerollsForPots++;
				flowers.push(30);
				flowerPotCosts += cost;
				remaining -= cost;
			}
		}
		days.push(
			<tr>
				<td>{i}</td>
				<td>{groupSizes.length}</td>
				<td>{customers}</td>
				<td>{Math.round(todayMoney)}</td>
				{import.meta.env.DEV && <td>{cumulativeFlowers + flowers.length}</td>}
				<td>{groupSizes.join(",")}</td>
				<td>
					<input
						type="number"
						style={{ width: 40 }}
						value={rerollCounts.value[i - 1]}
						onChange={(e) => {
							rerollCounts.value = [...rerollCounts.value];
							// @ts-ignore
							rerollCounts.value[i - 1] = e.target.valueAsNumber;
						}}
					/>
				</td>
				<td>
					<input
						type="number"
						style={{ width: 40 }}
						value={applianceCosts.value[i - 1]}
						onChange={(e) => {
							applianceCosts.value = [...applianceCosts.value];
							// @ts-ignore
							applianceCosts.value[i - 1] = e.target.valueAsNumber;
						}}
					/>
				</td>
				<td>{cumulativeCosts}</td>
				<td>{Math.round(cumulativeMoney)}</td>
				<td>
					{failureChances.value
						? `${(failureChances.value[i - 1] * 100).toFixed(2)}%`
						: ""}
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
						<td>Average Money</td>
						{import.meta.env.DEV && <td>Cumulative Flower Pots</td>}
						<td>All Groups</td>
						<td>Rerolls</td>
						<td>Appliance Costs</td>
						<td>Total Costs</td>
						<td>Cumulative Money</td>
						<td>
							Probability of running out of money <br />
							<button onClick={handleRunSim}>Run Simulation</button>
						</td>
					</tr>
				</thead>
				<tbody>{days}</tbody>
			</table>
		</div>
	);
};

export default GroupSizes;
