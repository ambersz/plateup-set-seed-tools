import { Unlock } from "../kitchenTypes";
import { ObjectiveComparison, ParetoSet } from "./paretoSet";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
import { Unlocks } from "../workers/db/unlocks";
import Appliances, { Appliance } from "../workers/db/appliances";
export interface RigPiece {
	goal: string; // appliance name
	substitutes: string[]; // things that upgrade into this or fill a similar purpose
	number: number; // how many copies I need
}
interface AchievedRig extends RigPiece {
	substitutesPurchased: number;
	goalsPurchased: number;
}
type Rig<T extends RigPiece> = { [goal: string]: T };
interface RouteBase {
	day: number;
	achieved: Rig<AchievedRig>;
	numFloor: number;
	money: number;
	fodderAvailable: number;
	actionHistory: string[];
	applianceCosts: number;
	cumulativeRerolls: number;
}
interface RerollRoute extends RouteBase {
	rerollConfigs: RerollConfig[];
	fodderUsed: number;
}
interface RerollRoutes extends RouteBase {
	rerollConfigs: RerollConfig[][];
	upgradesInProgress: number;
	deskTime: number;
}

const expectedBookingDesksByDay: number[] = [
	7, 8, 8, 8, 8, 10, 10, 8, 9, 9, 9, 10, 9, 10, 10,
];
const defaultExpectedMoneyByDay: number[] = [
	92 + 30,
	143,
	159,
	169,
	169,
	215,
	215,
	218,
	240,
	252,
	252,
	288,
	263,
	300,
	300,
]; // TODO: configure this manually from the spreadsheet per seed/card path
// .map((a) => a / 2);
const applianceCache: { [name: string]: Appliance } = {};

function getAppliance(name: string) {
	if (applianceCache[name] === undefined) {
		applianceCache[name] = Appliances.filter((a) => a.Name === name)[0];
	}
	if (applianceCache[name] === undefined)
		console.error(`Could not find ${name} appliance`);
	return applianceCache[name];
}
const extraBPComparators: readonly ObjectiveComparison<[number, number]>[] = [
	(a, b) => a[0] - b[0], // fewer rerolls better
	(a, b) => a[1] - b[1], // fewer money spent better
];
function getRouteTime(a: RouteBase): number {
	let t = 0;
	// @ts-ignore
	if (a?.deskTime !== undefined) t += a.deskTime;
	for (const conf of Object.values(a.achieved)) {
		// t += conf.substitutesPurchased * 5;
		t += a.cumulativeRerolls * 2;
		t += conf.goalsPurchased + conf.substitutesPurchased;
	}
	return t;
}

function generateComparator(
	max: number,
	goal: string
): (r: RouteBase, s: RouteBase) => number {
	return (r: RouteBase, s: RouteBase) => {
		// const number = remainingRigTiers[0][goal].number;
		const a = r.achieved[goal];
		const b = s.achieved[goal];
		const ap = Math.min(a.goalsPurchased, max);
		const bp = Math.min(b.goalsPurchased, max);
		let res = bp - ap;
		if (res === 0) {
			if (
				a.goalsPurchased >= max ||
				(a.goalsPurchased + a.substitutesPurchased >= max &&
					b.goalsPurchased + b.substitutesPurchased >= max)
			) {
				// both have reached their goals, fewer over-purchases is better
				return a.substitutesPurchased - b.substitutesPurchased;
			}
			// if one of them has not reached the goal yet, prefer the one with more substitutes available
			return b.substitutesPurchased - a.substitutesPurchased;
		}
		return res;
	};
}
export function niceRerolls(
	seed: string,
	startingCards: Unlock[],
	cardPath: string[],
	rigTiers: RigPiece[][],
	// rigConfig: RigPiece[],
	// finalRig: Rig,
	solo: boolean = true,
	expectedMoneyByDay: number[] = defaultExpectedMoneyByDay,
	report: (log: string) => void = () => {}
): number {
	let currentTierGoalRig: Rig<RigPiece> = {};
	const goalRigTiers: Rig<RigPiece>[] = [];
	const remainingRigTiers: Rig<RigPiece>[] = new Array(rigTiers.length)
		.fill(0)
		.map(() => ({}));
	const substitutesToGoalMap: { [substituteName: string]: string } = {};
	let trackMaxExcessBPs = 0;
	let gearMoney = 0;
	const missingRig: Rig<AchievedRig> = {};
	const turbo = startingCards.some((a) => a.Name === "Turbo");
	// let comparators: ObjectiveComparison<RouteBase>[] = [];
	const finalRigComparators: ObjectiveComparison<RouteBase>[] = [];
	let dailyRigComparators: ObjectiveComparison<RouteBase>[] = [];
	let i = 0;
	for (const rigTier of rigTiers) {
		// TODO: fix the construction of the final rig-- the different tiers could include the same goals at different values and it should all be acummulated into the final rig
		// Q: how to handle substitutes then?
		for (const s of rigTier) {
			const { goal, number: n, substitutes } = s;
			for (const s of substitutes) {
				substitutesToGoalMap[s] = goal;
			}
			for (let j = 0; j <= i; j++) {
				if (remainingRigTiers[j] === undefined) {
					debugger;
				}
				if (!remainingRigTiers[j][goal]) {
					remainingRigTiers[j][goal] = { ...s };
				} else {
					remainingRigTiers[j][goal].number += n;
				}
			}
			for (let j = i + 1; j < remainingRigTiers.length; j++) {
				if (remainingRigTiers[j] === undefined) {
					debugger;
				}
				if (!remainingRigTiers[j][goal]) {
					remainingRigTiers[j][goal] = {
						...s,
						number: 0,
					};
				}
			}

			gearMoney += getAppliance(goal).PurchaseCost * n * (turbo ? 0.5 : 1);
		}
		try {
			goalRigTiers.push(JSON.parse(JSON.stringify(remainingRigTiers[0])));
		} catch {
			console.log(remainingRigTiers);
			console.log(remainingRigTiers[0]);
			debugger;
		}
		i++;
	}
	const finalRig: Rig<RigPiece> = remainingRigTiers[0];
	currentTierGoalRig = goalRigTiers.shift()!;

	for (const s of Object.values(finalRig)) {
		const { goal, number } = s;
		missingRig[goal] = {
			...s,
			substitutesPurchased: 0,
			goalsPurchased: 0,
		};
		finalRigComparators.push(generateComparator(number, goal));
		dailyRigComparators.push(generateComparator(number, goal));
	}

	const finalRoutes: ParetoSet<RerollRoutes> = new ParetoSet<RerollRoutes>(
		[],
		[
			...finalRigComparators,
			(a, b) => getRouteTime(a) - getRouteTime(b),
			(a, b) => a.actionHistory.length - b.actionHistory.length,
			(a, b) => a.cumulativeRerolls - b.cumulativeRerolls,
			(a, b) =>
				(a.day + 1) % 5 ? a.upgradesInProgress - b.upgradesInProgress : 0,
		]
	);

	const blueprintCount = turbo ? 7 : 5;
	const rerollSettings: RerollConfig[] = [
		{ spawnInside: true, blueprintCount },
		{ spawnInside: false, playerInside: false, blueprintCount },
	];
	if (!solo)
		rerollSettings.push({
			spawnInside: false,
			playerInside: true,
			blueprintCount,
		});
	const spawnSettings: RerollConfig[] = [
		{ spawnInside: true, blueprintCount },
		{ spawnInside: false, playerInside: true, blueprintCount },
		{ spawnInside: false, playerInside: false, blueprintCount },
	];
	function addPartialRigs(
		beforeRig: Rig<AchievedRig>,
		deltaRig: Rig<AchievedRig>,
		addSubstitutes: boolean
	): Rig<AchievedRig> {
		const copy = { ...beforeRig };
		for (const conf of Object.values(deltaRig)) {
			const goal = conf.goal;
			copy[goal] = { ...copy[goal] };
			copy[goal].goalsPurchased += conf.goalsPurchased;
			if (addSubstitutes)
				copy[goal].substitutesPurchased += conf.substitutesPurchased;
		}
		return copy;
	}
	let extraBPCosts: ParetoSet<[number, number]>[] = [];
	function combineRoutes(
		b: RerollRoutes[],
		add: RerollRoute,
		s: ParetoSet<RerollRoutes>,
		cacheBPCosts: boolean = false
	): number {
		const excessBPsRequired = add.fodderUsed;
		for (const before of b) {
			let copy = 1 + before.achieved["Copying Desk"].goalsPurchased;
			const beforeBPCabs =
				1 + before.achieved["Blueprint Cabinet"].goalsPurchased;
			let excessBPsReachable = beforeBPCabs;
			excessBPsReachable *= copy;
			excessBPsReachable -= before.upgradesInProgress; // need to use blueprint cabinet space to upgrade substitutes
			if (excessBPsReachable < 0) {
				// wtf
				continue;
			}
			// impossible to make this reroll given the resources from the previous day
			if (excessBPsReachable < excessBPsRequired) continue;

			let totalRerolls = before.cumulativeRerolls + add.cumulativeRerolls;
			let totalSpent =
				((totalRerolls * (totalRerolls + 1)) / 2) * 10 + before.applianceCosts;
			const achievedImmediately = addPartialRigs(
				before.achieved,
				add.achieved,
				false
			);
			const achieved = addPartialRigs(before.achieved, add.achieved, true);
			const missing = calculateMissingRig(
				currentTierGoalRig,
				achievedImmediately
			);
			if (outerMissing <= 0 && missing > 0) continue; // we're only looking for full solutions now
			if (totalSpent > money) {
				// can't afford to do rerolls today from this starting point
				continue;
			}
			// if (day === 4)
			let save = 0;
			let spacesNeededToCopy = 0;
			let deskUses = 0;
			{
				let spareMoney = money - totalSpent;
				for (const conf of Object.values(add.achieved)) {
					spareMoney -=
						conf.goalsPurchased *
						// +conf.substitutesPurchased
						getAppliance(conf.goal).PurchaseCost *
						(turbo ? 0.5 : 1);
					let saveThis = false;
					if (spareMoney < 0 || conf.substitutesPurchased) {
						saveThis = true;
						save++;
						deskUses += conf.substitutesPurchased;
					}
					if (
						conf.goal === "Metal Table" &&
						conf.goalsPurchased &&
						achieved["Copying Desk"].goalsPurchased
					) {
						// try to copy
						if (!saveThis) spacesNeededToCopy++;
						spacesNeededToCopy++;
						deskUses++;
					}
				}
				if (save > achieved["Blueprint Cabinet"].goalsPurchased + 1) {
					// need enough bp cabs to store everything I can't afford
					continue;
				}
			}
			totalSpent += add.applianceCosts;
			const deskTime =
				before.deskTime +
				// copies required for this path, copy time depends on previous day's clipboard stand
				Math.max(0, excessBPsRequired - beforeBPCabs) *
					5 *
					(before.achieved["Clipboard Stand"].goalsPurchased ? 0.5 : 1) +
				// researches needed today, can use clipboard I bought today
				(deskUses * 5 + expectedBookingDesksByDay[add.day]) *
					(achieved["Clipboard Stand"].goalsPurchased ? 0.5 : 1);
			const newRoute: RerollRoutes = {
				...add,
				rerollConfigs: [...before.rerollConfigs, add.rerollConfigs],
				achieved,
				money: money - totalSpent,
				actionHistory: [...before.actionHistory, ...add.actionHistory],
				upgradesInProgress: save,
				cumulativeRerolls: before.cumulativeRerolls + add.cumulativeRerolls,
				applianceCosts: before.applianceCosts + add.applianceCosts,
				deskTime,
			};
			if (save > achieved["Blueprint Cabinet"].goalsPurchased + 1) continue;
			if (spacesNeededToCopy) {
				if (
					spacesNeededToCopy === 1 ||
					save + 1 <= achieved["Blueprint Cabinet"].goalsPurchased + 1 // if it's not already saved, I need to make sure there is one more cabinet available to copy in
				) {
					newRoute.upgradesInProgress += spacesNeededToCopy;
					achieved["Metal Table"].goalsPurchased++;
					newRoute.actionHistory.push("Copy Metal Table");
					newRoute.applianceCosts += 30;
				}
			}
			// it looks like a  full build
			// if we don't have enough money to buy everything yet it doesn't count-- only if the next day is a deco day
			if (newRoute.money >= 0) {
				if (missing < outerMissing) {
					outerMissing = missing;
					console.log(
						`best so far missing ${missing} pieces ` + summary(newRoute)
					);
				}
				if (missing <= 0) {
					if (finalRoutes.add(newRoute)) {
					}

					// console.debug(
					// 	`full build on ${seed} by day ${add.day}: ` + summary(newRoute)
					// );
					continue;
				} else if (outerMissing <= 0) continue;
			}
			if (excessBPsReachable > trackMaxExcessBPs) {
				trackMaxExcessBPs = excessBPsReachable;
			}
			if (cacheBPCosts) {
				const rerolls = before.cumulativeRerolls;
				for (let i = 0; i <= excessBPsReachable; i++) {
					if (extraBPCosts[i] === undefined) {
						extraBPCosts[i] = new ParetoSet<[number, number]>(
							[],
							extraBPComparators
						);
					}
					extraBPCosts[i].add([rerolls, totalSpent]);
				}
				continue;
			}
			s.add(newRoute);
		}
		return outerMissing;
	}
	const cumulativeParetoRoutes: ParetoSet<RerollRoutes> =
		new ParetoSet<RerollRoutes>(
			[
				{
					achieved: { ...missingRig },
					actionHistory: [],
					applianceCosts: 0,
					cumulativeRerolls: 0,
					rerollConfigs: [],
					upgradesInProgress: 0,
					day: 0,
					numFloor: 0,
					money: 0,
					fodderAvailable: 0,
					deskTime: 0,
				},
			],
			[
				...finalRigComparators,
				(a, b) => a.applianceCosts - b.applianceCosts,
				(a, b) => a.cumulativeRerolls - b.cumulativeRerolls,
			]
		);

	let outerMissing = Infinity;
	let day = 0;
	let money = turbo ? 30 : 0;
	const shop = new Shop(seed);
	const buyOnSight: string[] = [
		// "Plates",
		"Research Desk",
	];
	let delayBuy: Appliance[] = [];
	{
		const startingAplliances = ["Booking Desk", "Blueprint Cabinet"];
		Appliances.filter((a) => startingAplliances.includes(a.Name)).forEach((a) =>
			shop.OwnedAppliances.push(a)
		);
	}
	for (const c of startingCards) {
		shop.addCard(c);
	}
	function attemptPurchases(
		r: RerollRoute,
		spawns: Appliance[]
	): RerollRoute[] {
		let res: RerollRoute[] = [{ ...r }];
		for (const cand of spawns) {
			let goalName = cand.Name;
			let goalConf = r.achieved[cand.Name];
			let isSubstitute: boolean = false;
			if (!goalConf) {
				goalConf = r.achieved[substitutesToGoalMap[cand.Name]];
				if (!goalConf) continue;
				isSubstitute = true;
				goalName = substitutesToGoalMap[cand.Name];
			}
			if (goalConf.goalsPurchased >= remainingRigTiers[0][goalName].number)
				continue;
			if (
				isSubstitute &&
				goalConf.goalsPurchased + goalConf.substitutesPurchased >=
					remainingRigTiers[0][goalName].number
			)
				continue;
			{
				res = res.concat(
					res.map((r) => {
						const copy = { ...r };
						copy.achieved = { ...copy.achieved };
						copy.numFloor--;
						copy.achieved[goalConf.goal] = {
							...goalConf,
							goalsPurchased: goalConf.goalsPurchased + (isSubstitute ? 0 : 1),
							substitutesPurchased:
								goalConf.substitutesPurchased + (isSubstitute ? 1 : 0),
						};
						copy.applianceCosts +=
							getAppliance(goalName).PurchaseCost * (turbo ? 0.5 : 1);
						if (isSubstitute) {
						}
						copy.actionHistory = [
							...copy.actionHistory,
							`buy ${cand.Name}` +
								(isSubstitute ? ` for ${goalConf.goal}` : ""),
						];
						return copy;
					})
				);
			}
		}
		return res;
	}
	// Inside: will track all the reasonable paths I could take for that day only
	// Outside: wouldn't bother trying to extend previous days' states if it's not even better than previous days' individual rerolls
	while (outerMissing) {
		const prevDayCumulativeRoutes = cumulativeParetoRoutes.array;
		cumulativeParetoRoutes.clear();
		const pareto = new ParetoSet<RerollRoute>(
			[],
			[
				...dailyRigComparators,
				(a, b) => a.cumulativeRerolls - b.cumulativeRerolls,
				(a, b) => a.applianceCosts - b.applianceCosts,
			]
		); // TODO: do I want this to be inside the loop or outside the daily loop?
		// money = expectedMoneyByDay[day];
		money += expectedMoneyByDay[day];
		day++;
		if (day > 14) break;
		if (day > 1 && prevDayCumulativeRoutes.length === 0) {
			debugger;
			break;
		}
		let maxRerolls = 4;
		const justKeepRollingAfter = Math.min(maxRerolls - 1, 2);
		if (money >= gearMoney) {
			const maxRerolls = Math.sqrt(((money - gearMoney) / 10) * 2);
			console.log(
				`Have ${money} on day ${day}, need ${gearMoney} to buy everything. Allows for ~${maxRerolls} rerolls across all days`
			);
		}
		if (!(day % 5)) {
			maxRerolls = 1;
			// continue; // don't need decor day
			// need to clear the bp cabs so i have fodder for day 6
		}
		// let queue: RerollRoute[] = [

		// ];
		const spawns = shop.getAppliances(
			[{ spawnInside: true, blueprintCount }],
			day
		);
		if (buyOnSight.length) {
			for (let i = buyOnSight.length - 1; i >= 0; i--) {
				for (const app of spawns) {
					if (app.Name === buyOnSight[i]) {
						console.log(`buying ${app.Name} on day ${day}`);
						delayBuy.push(app);
						buyOnSight.splice(i, 1);
						money -= app.PurchaseCost * (turbo ? 0.5 : 1);
						break;
					}
				}
			}
		}
		let paretoQueue: ParetoSet<RerollRoute> = new ParetoSet<RerollRoute>(
			[
				{
					day,
					rerollConfigs: [],
					achieved: { ...missingRig },
					// numFloor: blueprintCount - delayBuy.length,
					numFloor: blueprintCount,
					fodderAvailable: trackMaxExcessBPs,
					fodderUsed: 0,
					money,
					actionHistory: [],
					applianceCosts: 0,
					cumulativeRerolls: 0,
				},
			],
			[
				(a, b) =>
					shop.getPrngAdvancements(a.rerollConfigs, day) -
					shop.getPrngAdvancements(b.rerollConfigs, day),
				(a, b) =>
					-shop.getPrngAdvancements(a.rerollConfigs, day) +
					shop.getPrngAdvancements(b.rerollConfigs, day),
				...dailyRigComparators,
				(a, b) => a.cumulativeRerolls - b.cumulativeRerolls,
				(a, b) => a.applianceCosts - b.applianceCosts,
				(a, b) =>
					b.numFloor + b.fodderAvailable - a.numFloor + a.fodderAvailable,
				(a, b) => a.numFloor - b.numFloor,
			]
		);

		const nextCard = cardPath.shift();
		const c = Unlocks.filter((a) => a.Name === nextCard)[0];
		shop.handleNewCardSpawnEffects(c);
		// cache all the costs to get extra blueprints
		combineRoutes(
			prevDayCumulativeRoutes,
			paretoQueue.array[0],
			cumulativeParetoRoutes,
			true
		);

		while (maxRerolls--) {
			if (paretoQueue.array[0] === undefined) {
				// debugger;
				break;
			}
			const minSpentMoneyByExtraBlueprints: number[] = extraBPCosts.map((p) => {
				return p.array.reduce(
					(min, [rerolls, spentMoney]) =>
						Math.min(
							min,
							spentMoney +
								paretoQueue.array[0].rerollConfigs.length * (rerolls + 1) * 10
						),
					Infinity
				);
			});
			console.log(
				`Seed ${seed} Day ${day} Reroll ${paretoQueue.array[0].rerollConfigs.length} expanding ${paretoQueue.array.length} states`
			);
			console.log({ minSpentMoneyByExtraBlueprints });
			// console.log({
			// 	minRemainingMoneyByExtraBlueprints,
			// 	extraBPCosts,
			// 	l: paretoQueue.array.length,
			// });
			const oldParetoQueue = paretoQueue.array;
			if (!goalRigTiers.length && outerMissing <= 0) {
				const rrs = oldParetoQueue[0].rerollConfigs.length;
				// if we already have results and we can't afford rerolls after buying full rig, just stop expanding
				// give it one reroll of wiggle room because I don't need all the blueprint cabinets and can copy some things to buy tomorrow
				if (rrs * ((rrs + 1) / 2) * 10 + gearMoney > money) {
					console.log("get me outta here!");
					break;
				}
			}
			paretoQueue.clear();
			for (const route of oldParetoQueue) {
				if (route.numFloor + route.fodderAvailable === 0) continue; // you bought everything already
				if (route.money < route.rerollConfigs.length * 10) continue; // not enough money to reroll, assume one reroll a day from previous days
				let affordableFodderUsages = 0;
				if (minSpentMoneyByExtraBlueprints[0] > route.money) {
					// there doesn't exist a single partial route that this day could extend off of
					continue;
				}
				for (let i = 1; i < minSpentMoneyByExtraBlueprints.length; i++) {
					affordableFodderUsages++;
					if (minSpentMoneyByExtraBlueprints[i] > route.money) {
						affordableFodderUsages = i - 1;
						break;
					}
				}
				let maxBPCount =
					justKeepRollingAfter < route.rerollConfigs.length
						? route.numFloor
						: route.rerollConfigs.length
						? route.numFloor +
						  Math.min(
								route.fodderAvailable,
								affordableFodderUsages - route.fodderUsed
						  )
						: blueprintCount;
				const minBPCount =
					justKeepRollingAfter < route.rerollConfigs.length
						? route.numFloor
						: route.rerollConfigs.length
						? Math.max(1, route.numFloor)
						: blueprintCount;
				let confs: RerollConfig[];
				if (route.rerollConfigs.length === 0) {
					confs = spawnSettings;
				} else if (justKeepRollingAfter < route.rerollConfigs.length) {
					confs = [route.rerollConfigs.at(-1)!];
				} else {
					confs = rerollSettings;
				}
				if (delayBuy.length && route.rerollConfigs.length === 1) {
					// buy after spawn &before first reroll
					shop.OwnedAppliances.push(...delayBuy);
					delayBuy = [];
				}
				shop.getAppliances(
					[
						...route.rerollConfigs,
						{ spawnInside: true, blueprintCount: maxBPCount },
					],
					route.day
				); // get appliances with max number to force cache with max bp count
				confs.forEach((conf) => {
					let res: RerollRoute[] = [];
					// because want least fodder usage to go into pareto sets first
					for (let count = minBPCount; count <= maxBPCount; count++) {
						const rerollConfigs = [
							...route.rerollConfigs,
							{
								...conf,
								blueprintCount: count,
							},
						];

						const apps = shop.getAppliances(rerollConfigs, route.day);

						const fodderExtracted = count - route.numFloor;
						if (fodderExtracted > route.fodderAvailable) {
							debugger;
						}
						res.push(
							...attemptPurchases(
								{
									...route,
									money: route.money - route.rerollConfigs.length * 10,
									rerollConfigs,
									numFloor:
										rerollConfigs.length === 1
											? count - delayBuy.length
											: count,
									fodderAvailable: route.fodderAvailable - fodderExtracted,
									fodderUsed: route.fodderUsed + fodderExtracted,
									cumulativeRerolls: route.rerollConfigs.length
										? route.cumulativeRerolls + 1
										: 0,
									actionHistory: !route.rerollConfigs.length
										? [
												`day ${route.day} spawn`,
												`spawn ${
													conf.spawnInside
														? "I"
														: conf.playerInside
														? "OI"
														: "OO"
												}`,
										  ]
										: [
												...route.actionHistory,
												`${
													fodderExtracted ? `take ${fodderExtracted} out, ` : ""
												}reroll ${
													conf.spawnInside
														? "I"
														: conf.playerInside
														? "OI"
														: "OO"
												}`,
										  ],
								},
								apps
							)
						);
					}
					for (const r of res) {
						if (!paretoQueue.add(r)) continue;
						if (!pareto.add(r)) continue;

						// // require day 1 portioner
						// if (day === 1) {
						// 	if (
						// 		r.actionHistory.filter((a) => a.includes(" for ")).length >
						// 		r.achieved["Blueprint Cabinet"].goalsPurchased + 1
						// 	) {
						// 		// substitutes need to go into a cabinet and I don't have any!
						// 		continue;
						// 	}
						// 	if (true || r.achieved["Portioner"].goalsPurchased) {
						// 		cumulativeParetoRoutes.add({
						// 			...r,
						// 			rerollConfigs: [r.rerollConfigs],
						// 			upgradesInProgress: Object.values(r.achieved).reduce(
						// 				(sub, { substitutesPurchased }) =>
						// 					sub + substitutesPurchased,
						// 				0
						// 			),
						// 		});
						// 	}
						// } else
						{
							combineRoutes(prevDayCumulativeRoutes, r, cumulativeParetoRoutes);
						}
					}
				});
			}
		}
		shop.addCard(c);
		// console.log(JSON.stringify(pareto.array));
		// console.log(pareto.array.map((r) => summary(r)).join("\n"));
		if (outerMissing <= 0) {
			if (!goalRigTiers.length) {
				report(
					(outerMissing <= 0 ? `full build on ${seed} by day ${day}: \n` : "") +
						finalRoutes.array.map((r) => summary(r)).join("\n")
				);
				break;
			}
			currentTierGoalRig = goalRigTiers.shift()!;
			remainingRigTiers.shift();
			dailyRigComparators = [];
			for (const { goal, number } of Object.values(remainingRigTiers[0]))
				dailyRigComparators.push(generateComparator(number, goal));

			outerMissing = Infinity;
			extraBPCosts = [];

			report(
				`tier ${
					rigTiers.length - goalRigTiers.length - 1
				} build on ${seed} by day ${day}: \n` +
					finalRoutes.array.map((r) => summary(r)).join("\n")
			);
			cumulativeParetoRoutes.array = finalRoutes.array;
			finalRoutes.clear();
			finalRoutes.objectiveFunctions; // TODO
		} else {
			debugger;
		}
		// console.log(overallPareto.array.map((r) => summary(r)).join("\n"));
		// console.log({ outerMissing });
		// if (day === 4) return false; // give up if it's not better than azro2eh8
	}
	// debugger;
	return day;
	// return { cumulativeParetoRoutes };
}
function calculateMissingRig(
	currentTierGoalRig: Rig<RigPiece>,
	achieved: Rig<AchievedRig>
) {
	let missing = 0;
	for (const r of Object.values(currentTierGoalRig)) {
		if (r.goal === "Blueprint Cabinet" || r.goal === "Copying Desk") continue;
		let need = r.number;

		if (
			false &&
			r.goal === "Metal Table" &&
			achieved["Copying Desk"].goalsPurchased > 0
		) {
			need -= 1;
		}
		missing += Math.max(
			0,
			need -
				achieved[r.goal].goalsPurchased -
				achieved[r.goal].substitutesPurchased
		);
	}
	// if (!achieved["Metal Table"].goalsPurchased && missing <= 0) {
	// 	debugger;
	// }
	return missing;
}

function summary(r: RerollRoute | RerollRoutes) {
	return (
		`${r.day}: ${getRouteTime(r)} ${r.money} (${r.rerollConfigs.length - 1}) ${
			r.cumulativeRerolls
		}, ` + r.actionHistory.join(", ")
	);
}
