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
	let cumulativeMoney = run.guessMoney(0);

	let rerollsForPots = 2; // let's say I had to spend two rerolls looking for copy desks and such
	let flowerPotCosts = 60; // discount desk
	for (let i = 0; i < rerollsForPots; i++) flowerPotCosts += 10 * (i + 1);
	flowerPotCosts += (20 + 60 + 20 + 20 + 60 + 20 + 60 + 60 + 60 + 40 + 40) / 2; // tools
	let cumulativeFlowers = 0;
	let flowers: number[] = [];
	for (let i = 1; i <= 15; i++) {
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
			console.log(JSON.stringify(flowers));
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
				<td>{Math.round(cumulativeMoney)}</td>
				<td>{cumulativeFlowers + flowers.length}</td>
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
			<SeedConfigForm onConfigChange={setConfig} config={config} mode="cards" />
			<div>Total Customers: {totalCustomerCount}</div>
			<table>
				<thead>
					<tr>
						<td>Day</td>
						<td>Groups</td>
						<td>Customers</td>
						<td>Money</td>
						<td>Cumulative Money</td>
						<td>Cumulative Flower Pots</td>
						<td>All Groups</td>
					</tr>
				</thead>
				<tbody>{days}</tbody>
			</table>
		</div>
	);
};

export default GroupSizes;
