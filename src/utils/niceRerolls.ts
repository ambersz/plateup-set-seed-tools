import { Unlock } from "../kitchenTypes";
import { ObjectiveComparison, ParetoSet } from "./paretoSet";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
import { Unlocks } from "../workers/db/unlocks";
import Appliances, { Appliance } from "../workers/db/appliances";
import { ShuffleInPlace } from "./utils";
// import { ShuffleInPlace } from "./utils";
export interface RigPiece {
	goal: string; // appliance name
	substitutes: string[]; // things that upgrade into this or fill a similar purpose
	number: number; // how many copies I need
	skipMissing?: boolean;
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
	fodderPurchases: [number, number];
}
interface RerollRoutes extends RouteBase {
	rerollConfigs: RerollConfig[][];
	upgradesInProgress: number;
	deskTime: number;
}

const defaultExpectedBookingDesksByDay: number[] = [
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
		switch (name) {
			case "Copying Desk":
				// applianceCache[name].PurchaseCost += 120;
				break;
			case "Grabber - Rotating":
				// applianceCache[name].PurchaseCost *= 3;
				break;
			case "Metal Table":
				// applianceCache[name].PurchaseCost *= 2;
				break;
			case "Danger Hob":
				// applianceCache[name].PurchaseCost *= 2;
				break;
			default:
				break;
		}
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
				return (
					a.goalsPurchased +
					a.substitutesPurchased -
					(b.goalsPurchased + b.substitutesPurchased)
				);
			}
			// if one of them has not reached the goal yet, prefer the one with more substitutes available
			return b.substitutesPurchased - a.substitutesPurchased;
		}
		return res;
	};
}

const SCUMCOST: { [goal: string]: number } = {
	"Copying Desk": 30,
	"Metal Table": 30,
	"Power Sink": 15,
};
export function niceRerolls(
	seed: string,
	startingCards: Unlock[],
	cardPath: string[],
	rigTiers: RigPiece[][],
	// rigConfig: RigPiece[],
	// finalRig: Rig,
	solo: boolean = true,
	expectedMoneyByDay: number[] = defaultExpectedMoneyByDay,
	expectedBookingDesksByDay: number[] = defaultExpectedBookingDesksByDay,
	report: (log: string) => void = () => {}
): number {
	let currentTierGoalRig: Rig<RigPiece> = {};
	let usedBlueprintCabs: number[] = [];
	let savedMetal = false;
	let savedGrabber = false;
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
	const tempGoalRig: Rig<RigPiece> = {};
	for (const rigTier of rigTiers) {
		// TODO: fix the construction of the final rig-- the different tiers could include the same goals at different values and it should all be acummulated into the final rig
		// Q: how to handle substitutes then?
		for (const s of rigTier) {
			const { goal, number: n, substitutes, skipMissing = false } = s;
			for (const s of substitutes) {
				substitutesToGoalMap[s] = goal;
			}
			if (!tempGoalRig[goal]) {
				tempGoalRig[goal] = { ...s };
				if (skipMissing) tempGoalRig[goal].number = 0;
			} else {
				if (!skipMissing) tempGoalRig[goal].number += n;
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
			if (!skipMissing)
				gearMoney += getAppliance(goal).PurchaseCost * n * (turbo ? 0.5 : 1);
		}
		try {
			goalRigTiers.push(JSON.parse(JSON.stringify(tempGoalRig)));
		} catch {
			console.log(remainingRigTiers);
			console.log(remainingRigTiers[0]);
			debugger;
		}
		i++;
	}
	const finalRig: Rig<RigPiece> = remainingRigTiers[0];
	const cheapToExpensiveGoals = Object.values(finalRig)
		.sort(
			(a, b) =>
				getAppliance(a.goal).PurchaseCost - getAppliance(b.goal).PurchaseCost
		)
		.map((a) => a.goal);
	currentTierGoalRig = goalRigTiers.shift()!;

	for (const s of Object.values(finalRig)) {
		const { goal, number } = s;
		missingRig[goal] = {
			...s,
			substitutesPurchased: 0,
			goalsPurchased: 0,
		};
		if (s.goal !== "Starter Bin") {
			finalRigComparators.push(generateComparator(number, goal));
			dailyRigComparators.push(generateComparator(number, goal));
		}
	}

	const finalRoutes: ParetoSet<RerollRoutes> = new ParetoSet<RerollRoutes>(
		[],
		[
			...finalRigComparators,
			(a, b) => b.money - a.money,
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
			if (goal === "Copying Desk") {
				copy[goal].goalsPurchased += copy[goal].substitutesPurchased;
				copy[goal].substitutesPurchased = 0;
			}
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
		if (day === 5) {
			if (add.actionHistory.length < 5) return outerMissing;
		}
		const excessBPsRequired = add.fodderUsed;
		const researchRequired =
			Object.values(add.achieved).some((a) => a.substitutesPurchased) &&
			!add.achieved["Research Desk"]?.goalsPurchased;
		befores: for (const before of b) {
			if (researchRequired) {
				// need to upgrade.
				if (
					!globalResearchable &&
					!before.achieved["Research Desk"]?.goalsPurchased
				) {
					// but no research desk
					continue;
				}
			}
			let copy = 1 + (before.achieved["Copying Desk"].goalsPurchased ? 1 : 0);
			const beforeBPCabs = before.achieved["Blueprint Cabinet"].goalsPurchased;
			let excessBPsReachable = beforeBPCabs;
			excessBPsReachable -= usedBlueprintCabs.length; // technically I could copy these and still save the base blueprints
			excessBPsReachable -= before.upgradesInProgress; // need to use blueprint cabinet space to upgrade substitutes
			excessBPsReachable *= copy;
			if (excessBPsReachable < 0) {
				// wtf
				continue;
			}
			// impossible to make this reroll given the resources from the previous day
			if (excessBPsReachable < excessBPsRequired) {
				continue;
			}

			let totalRerolls = before.cumulativeRerolls + add.cumulativeRerolls;
			let totalSpent =
				((totalRerolls * (totalRerolls + 1)) / 2) * 10 + before.applianceCosts;
			const achievedImmediately = add.actionHistory.length
				? addPartialRigs(before.achieved, add.achieved, false)
				: before.achieved;
			const achieved = add.actionHistory.length
				? addPartialRigs(before.achieved, add.achieved, true)
				: before.achieved;
			if (day === 3) {
				if (!achieved["Copying Desk"].goalsPurchased) continue;
				if (
					!achieved["Metal Table"].goalsPurchased &&
					!achieved["Metal Table"].substitutesPurchased
				)
					continue;
			}
			const missing = calculateMissingRig(
				currentTierGoalRig,
				achievedImmediately
			);
			if (outerMissing <= 0 && missing > 0) continue; // we're only looking for full solutions now
			if (add.cumulativeRerolls && totalSpent > money) {
				// can't afford to do rerolls today from this starting point
				continue;
			}
			// if (day === 4)
			let save = 0;
			let spacesNeededToCopy = 0;
			let copyAppliances: string[] = [];
			let deskUses = 0;
			const excessBlueprintCabs =
				achieved["Blueprint Cabinet"].goalsPurchased - usedBlueprintCabs.length;
			const discount =
				before.achieved["Discount Desk"]?.goalsPurchased ??
				0 + before.achieved["Discount Desk"]?.substitutesPurchased ??
				0
					? 0.5
					: 1;
			if (
				before.achieved["Metal Table"].goalsPurchased +
				before.achieved["Metal Table"].substitutesPurchased
			) {
				if (day < 6) save++;
			}
			// if (
			// 	before.achieved["Grabber - Rotating"].goalsPurchased +
			// 	before.achieved["Grabber - Rotating"].substitutesPurchased
			// ) {
			// 	if (day < 7) save++;
			// }

			{
				let spareMoney = money - totalSpent;
				// for (const addRigConf of Object.values(add.achieved)) {
				for (const buyOrderKey of cheapToExpensiveGoals) {
					const addRigConf = add.achieved[buyOrderKey];
					spareMoney -=
						addRigConf.goalsPurchased *
						// +conf.substitutesPurchased
						getAppliance(addRigConf.goal).PurchaseCost *
						(turbo ? 0.5 : 1) *
						discount;
					let saveThis = false;
					if (spareMoney < 0 || addRigConf.substitutesPurchased) {
						if (addRigConf.goal === "Copying Desk") {
							if (spacesNeededToCopy) {
								spacesNeededToCopy = 0;
								deskUses--;
							}
						}
						saveThis = true;
						if (spareMoney < 0) {
							save += addRigConf.goalsPurchased;
							save += addRigConf.substitutesPurchased;
						} else {
							save += addRigConf.substitutesPurchased;
						}
						deskUses +=
							addRigConf.substitutesPurchased *
							(SCUMCOST[addRigConf.goal] ?? 1);
					}
					if (
						(addRigConf.goal === "Metal Table" ||
							addRigConf.goal === "Grabber - Rotating" ||
							addRigConf.goal === "Grabber") &&
						addRigConf.goalsPurchased + addRigConf.substitutesPurchased &&
						((achieved["Copying Desk"].goalsPurchased && spareMoney > 60) ||
							before.achieved["Copying Desk"].goalsPurchased)
					) {
						// try to copy
						if (!saveThis) spacesNeededToCopy++;
						spacesNeededToCopy++;
						copyAppliances.push(addRigConf.goal);
						deskUses++;
					}
				}
				if (save > excessBlueprintCabs) {
					// need enough bp cabs to store everything I can't afford
					continue befores;
				}
			}
			totalSpent += add.applianceCosts * discount;
			let cookingTime = 100;
			let eatingTime = 80;
			let washingTime = 30;
			switch (achieved?.Portioner?.goalsPurchased ?? 0) {
				case 0:
					break;
				case 1:
					cookingTime /= 2;
					break;
				case 2:
				default:
					cookingTime /= 4;
					switch (
						achieved["Grabber - Rotating"].goalsPurchased +
						achieved["Grabber"].goalsPurchased +
						before.achieved["Grabber - Rotating"].substitutesPurchased +
						before.achieved["Grabber"].substitutesPurchased
					) {
						case 0:
							break;
						default:
							cookingTime /= 2;
					}
					break;
			}
			if (achieved["Danger Hob"]) cookingTime *= 0.75;
			switch (achieved["Scrubbing Brush"]?.goalsPurchased ?? 0) {
				case 0:
					break;
				case 1:
				default:
					washingTime /= 3;
			}
			switch (
				Math.max(
					(before.achieved["Power Sink"]?.goalsPurchased ?? 0) +
						(before.achieved["Power Sink"]?.substitutesPurchased ?? 0),
					achieved["Power Sink"]?.goalsPurchased ?? 0
				)
			) {
				case 0:
					break;
				case 1:
				default:
					washingTime /= 2;
			}
			{
				let tables = Math.max(
					(before.achieved["Metal Table"]?.goalsPurchased ?? 0) +
						(before.achieved["Metal Table"]?.substitutesPurchased ?? 0),
					achieved["Metal Table"]?.goalsPurchased ?? 0,
					day === 4 ? 1 : day === 5 ? 2 : day >= 6 ? 4 : 0
				);

				eatingTime /= Math.min(4, Math.max(day > 5 ? 0.01 : 2, tables));
			}

			if (day >= 5) {
				eatingTime /= 2;
			}
			const deskTime =
				before.deskTime +
				// copies required for this path, copy time depends on previous day's clipboard stand
				Math.max(0, excessBPsRequired - beforeBPCabs) *
					5 *
					(before.achieved["Clipboard Stand"]?.goalsPurchased ? 0.5 : 1) +
				// researches needed today, can use clipboard I bought today
				(deskUses * 5 + expectedBookingDesksByDay[add.day]) *
					(achieved["Clipboard Stand"]?.goalsPurchased ? 0.5 : 1) +
				Math.max(cookingTime + washingTime, eatingTime);
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

			if (save > excessBlueprintCabs) continue;
			if (true && spacesNeededToCopy) {
				if (
					spacesNeededToCopy === 1 ||
					save + 1 <= excessBlueprintCabs // if it's not already saved, I need to make sure there is one more cabinet available to copy in
				) {
					for (const app of copyAppliances) {
						newRoute.upgradesInProgress += spacesNeededToCopy;
						achieved[app].goalsPurchased++;
						newRoute.actionHistory.push(`copy ${app}`);
						newRoute.applianceCosts += 30;
					}
				}
			}
			// it looks like a  full build
			// if we don't have enough money to buy everything yet it doesn't count-- only if the next day is a deco day
			if (newRoute.money >= 0 && !newRoute.upgradesInProgress) {
				if (missing < outerMissing) {
					outerMissing = missing;
					console.log(
						`best so far missing ${missing} pieces ` + summary(newRoute, money)
					);
				}
				if (missing <= 0 && !newRoute.upgradesInProgress) {
					if (finalRoutes.add(newRoute)) {
						reportTier();
						continue;
					}
					// console.debug(
					// 	`full build on ${seed} by day ${add.day}: ` + summary(newRoute)
					// );
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
	const initialMissingRig = { ...missingRig };
	initialMissingRig["Blueprint Cabinet"] = {
		...initialMissingRig["Blueprint Cabinet"],
		goalsPurchased: 1,
	};
	const cumulativeParetoRoutes: ParetoSet<RerollRoutes> =
		new ParetoSet<RerollRoutes>(
			[
				{
					achieved: initialMissingRig,
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
	let money = 0;
	const shop = new Shop(seed);
	const buyOnSight: string[] = [
		// "Research Desk",
		"Plates",
		// '"Specials" Menu',
	];
	let globalResearchable = false;
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
		beforePurchaseState: RerollRoute,
		spawns: Appliance[],
		processResult: (r: RerollRoute) => void
	): RerollRoute[] {
		let noFodderPurchased: RerollRoute[] = [{ ...beforePurchaseState }];
		let hasFodderButNoMore: RerollRoute[] = [];
		let canPurchaseFodder: RerollRoute[] = [];
		const cumulativePurchaseState: Rig<AchievedRig> = JSON.parse(
			JSON.stringify(beforePurchaseState.achieved)
		);
		for (const cand of spawns) {
			let goalName = cand.Name;
			let potentialPurchaseState = cumulativePurchaseState[goalName];
			let isSubstitute: boolean = false;
			if (
				!potentialPurchaseState ||
				potentialPurchaseState.goalsPurchased >=
					remainingRigTiers[0][goalName].number
			) {
				potentialPurchaseState =
					cumulativePurchaseState[substitutesToGoalMap[cand.Name]];
				if (!potentialPurchaseState) continue;
				isSubstitute = true;
				goalName = substitutesToGoalMap[cand.Name];
			}

			if (
				isSubstitute &&
				potentialPurchaseState.goalsPurchased +
					potentialPurchaseState.substitutesPurchased >=
					remainingRigTiers[0][goalName].number
			) {
				// already have enough, would only want to purchase this as fodder
				// potentialPurchaseState = cumulativePurchaseState["Starter Bin"];
				// goalName = "Starter Bin";
				continue;
			}
			if (
				potentialPurchaseState.goalsPurchased >=
				remainingRigTiers[0][goalName].number
			) {
				// already have enough, would only want to purchase this as fodder
				// potentialPurchaseState = cumulativePurchaseState["Starter Bin"];
				// goalName = "Starter Bin";
				// isSubstitute = true;
				continue;
			}
			if (goalName === "Table - Fancy Cloth") isSubstitute = false;
			if (isSubstitute) {
				potentialPurchaseState.substitutesPurchased++;
			} else {
				potentialPurchaseState.goalsPurchased++;
			}
			{
				const purchaseHandler = (r: RerollRoute) => {
					const copy = { ...r };
					copy.achieved = { ...copy.achieved };
					copy.numFloor--;
					copy.achieved[goalName] = {
						...copy.achieved[goalName],
						goalsPurchased:
							copy.achieved[goalName].goalsPurchased + (isSubstitute ? 0 : 1),
						substitutesPurchased:
							copy.achieved[goalName].substitutesPurchased +
							(isSubstitute ? 1 : 0),
					};
					const PurchaseCost =
						goalName === "Starter Bin" || goalName === "Table - Fancy Cloth"
							? getAppliance(cand.Name).PurchaseCost
							: Math.max(
									// sometimes the substitute isn't actually an upgrade, just something I can use for the same purpose, so I can't just use the cheaper price
									getAppliance(cand.Name).PurchaseCost,
									getAppliance(goalName).PurchaseCost
							  );
					copy.applianceCosts += PurchaseCost * (turbo ? 0.5 : 1);
					if (isSubstitute) {
					}
					copy.actionHistory = [
						...copy.actionHistory,
						`buy ${cand.Name}` + (isSubstitute ? ` for ${goalName}` : ""),
					];
					if (goalName === "Starter Bin") {
						copy.fodderPurchases = [...copy.fodderPurchases];
						copy.fodderPurchases[1]++;
						copy.achieved[goalName].substitutesPurchased--;
					}
					return copy;
				};
				if (goalName !== "Starter Bin") {
					const afterPurchase = noFodderPurchased.map(purchaseHandler);
					const morePurchasesAfterRerolls =
						hasFodderButNoMore.map(purchaseHandler);
					const morePurchasesOrMoreFodderAllowed =
						canPurchaseFodder.map(purchaseHandler);

					noFodderPurchased = afterPurchase.concat(noFodderPurchased);
					hasFodderButNoMore =
						morePurchasesAfterRerolls.concat(hasFodderButNoMore);
					canPurchaseFodder =
						morePurchasesOrMoreFodderAllowed.concat(canPurchaseFodder);
					afterPurchase.forEach(processResult);
				} else {
					// purchasing fodder
					hasFodderButNoMore = hasFodderButNoMore.concat(canPurchaseFodder);
					canPurchaseFodder = (
						!canPurchaseFodder.length ? noFodderPurchased : canPurchaseFodder
					).map(purchaseHandler);
				}
			}
		}
		return noFodderPurchased
			.concat(hasFodderButNoMore)
			.concat(canPurchaseFodder);
	}
	// Inside: will track all the reasonable paths I could take for that day only
	// Outside: wouldn't bother trying to extend previous days' states if it's not even better than previous days' individual rerolls
	while (outerMissing) {
		let prevDayCumulativeRoutes = cumulativeParetoRoutes.array;
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
		// if (
		// 	!savedMetal &&
		// 	prevDayCumulativeRoutes.every(
		// 		(a) =>
		// 			a.achieved["Metal Table"].goalsPurchased +
		// 			a.achieved["Metal Table"].substitutesPurchased
		// 	)
		// ) {
		// 	savedMetal = true;
		// 	usedBlueprintCabs.push(3);
		// }

		// if (day === 4) usedBlueprintCabs.push(3);
		// if (day === 5) usedBlueprintCabs.push(3);
		if (day > 14) break;
		if (day > 1 && prevDayCumulativeRoutes.length === 0) {
			debugger;
			break;
		}
		if (prevDayCumulativeRoutes.length > 100) {
			// cut to the fastest half routes every day?
			prevDayCumulativeRoutes.sort((a, b) => a.deskTime - b.deskTime);
			const n = Math.ceil((prevDayCumulativeRoutes.length - 100) / 2 + 100);
			// const n = 50;
			if (n < prevDayCumulativeRoutes.length) {
				console.log(
					`Reducing from ${prevDayCumulativeRoutes.length} to top ${n} routes on day ${day}`
				);
			}
			prevDayCumulativeRoutes = prevDayCumulativeRoutes.slice(0, n + 1);
		}
		if (
			prevDayCumulativeRoutes.every(
				(r) => r.achieved["Copying Desk"].goalsPurchased
			)
		) {
			usedBlueprintCabs = usedBlueprintCabs.map((a) => {
				money -= 60 / 2;
				return a - 1;
			});
			usedBlueprintCabs = usedBlueprintCabs.filter((a) => a > 0);
		}
		// if (
		// 	!savedGrabber &&
		// 	prevDayCumulativeRoutes.every(
		// 		(a) =>
		// 			a.achieved["Grabber"].goalsPurchased +
		// 			a.achieved["Grabber"].substitutesPurchased
		// 	)
		// ) {
		// 	savedGrabber = true;
		// 	usedBlueprintCabs.push(3);
		// }
		let maxRerolls = 5;
		// day < 7 ? 2 : Math.max(3, 1 + Math.sqrt(Math.max(0, money - 470)));
		// let maxTimePerReroll = Infinity;
		let maxTimePerReroll = 0.5 * 60 * 1000; // 30 seconds
		const justKeepRollingAfter = Math.min(maxRerolls - 1, Infinity);
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
		let nextCard = undefined;
		if (turbo || day === 5 || !(day % 3)) {
			nextCard = cardPath.shift();
		}
		const c = Unlocks.filter((a) => a.Name === nextCard)[0];
		shop.handleNewCardSpawnEffects(c);
		const spawns = shop.getAppliances(
			[{ spawnInside: true, blueprintCount }],
			day
		);
		shop.handleNewCardRerollEffects(c);
		let globalBoughtMessage: string[] = [];
		if (buyOnSight.length) {
			for (let i = buyOnSight.length - 1; i >= 0; i--) {
				let j = spawns.length;
				while (j--) {
					const app = spawns[j];
					if (app.Name === buyOnSight[i]) {
						console.log(`buying ${app.Name} on day ${day}`);
						const spare =
							money -
							prevDayCumulativeRoutes.reduce(
								(sp, r) =>
									Math.min(
										sp,
										r.applianceCosts +
											(10 / 2) * (r.cumulativeRerolls + 1) * r.cumulativeRerolls
									),
								Infinity
							);
						if (spare < app.PurchaseCost * (turbo ? 0.5 : 1)) {
							console.log(`not enough money-- skip for now`);
							continue;
						}
						delayBuy.push(app);
						buyOnSight.splice(i, 1);
						money -= app.PurchaseCost * (turbo ? 0.5 : 1);
						spawns.splice(j, 1);
						break;
					}
				}
				globalBoughtMessage = delayBuy.map((a) => `Buy ${a.Name}`);
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
					fodderPurchases: [0, 0],
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

		// cache all the costs to get extra blueprints
		combineRoutes(
			prevDayCumulativeRoutes,
			paretoQueue.array[0],
			cumulativeParetoRoutes,
			true
		);
		let breakAfter: number = Infinity;
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
		rerollLoop: while (maxRerolls--) {
			if (
				delayBuy.length &&
				paretoQueue.array[0]?.rerollConfigs?.length === 1
			) {
				if (delayBuy.some((a) => a.Name === "Research Desk"))
					globalResearchable = true;
				// buy after spawn &before first reroll
				shop.OwnedAppliances.push(...delayBuy);
				delayBuy = [];
				globalBoughtMessage = [];
			}
			breakAfter =
				Date.now() +
				maxTimePerReroll /
					(paretoQueue.array[0]?.rerollConfigs?.length ?? 1) ** 2;

			//		Math.max(2, paretoQueue.array[0]?.rerollConfigs?.length ?? 1);
			if (paretoQueue.array[0] === undefined) {
				break;
			}
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
			// ShuffleInPlace(oldParetoQueue);
			// oldParetoQueue.sort(
			// 	(a, b) =>
			// 		-(
			// 			-a.achieved["Research Desk"].goalsPurchased +
			// 			b.achieved["Research Desk"].goalsPurchased
			// 		)
			// );
			for (const route of oldParetoQueue) {
				if (Date.now() > breakAfter) {
					// paretoQueue.array.sort(
					// 	(a, b) =>
					// 		a.fodderAvailable - b.fodderAvailable ||
					// 		b.money - a.money ||
					// 		calculateMissingRig(remainingRigTiers[0], a.achieved) -
					// 			calculateMissingRig(remainingRigTiers[0], b.achieved) ||
					// 		a.numFloor - b.numFloor ||
					// 		b.applianceCosts - a.applianceCosts ||
					// 		Math.random() - 0.5
					// );
					// ShuffleInPlace(paretoQueue.array);
					const order = -1; // 1 for fewest buys first, -1 for most purchases first
					const comp = (c: number, a: AchievedRig): number =>
						(a.goal === "Blueprint Cabinet" || a.goal === "Copying Desk"
							? 0
							: a.goalsPurchased) + c;
					paretoQueue.array.sort(
						(a, b) => order * (a.applianceCosts - b.applianceCosts)
						// order * (a.achieved["Blueprint Cabinet"].goalsPurchased - b.achieved["Blueprint Cabinet"].goalsPurchased)
						// order *
						// (Object.values(a.achieved).reduce(comp, 0) -
						// Object.values(b.achieved).reduce(comp, 0))
					);
					continue rerollLoop;
				}
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
				{
					// don't take out fodder if you just bought blueprints to reduce bp count
					let i = route.actionHistory.length;
					while (i--) {
						if (route.actionHistory[i].includes("reroll")) break;
						if (route.actionHistory[i].includes("Starter Bin")) {
							maxBPCount = route.numFloor;
							break;
						}
					}
				}
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

				shop.getAppliances(
					[
						...route.rerollConfigs,
						{ spawnInside: true, blueprintCount: maxBPCount },
					],
					route.day
				); // get appliances with max number to force cache with max bp count
				let spawnBaseProcessed = false;
				for (const conf of confs) {
					// let res: RerollRoute[] = [];
					const processResult = (r: RerollRoute) => {
						if (!paretoQueue.add(r)) return;
						if (!pareto.add(r)) return;
						let uneccesaryFodderPurchase =
							r.fodderPurchases[0] + r.fodderPurchases[1];
						if (!uneccesaryFodderPurchase) {
							combineRoutes(prevDayCumulativeRoutes, r, cumulativeParetoRoutes);
						}
					};

					// default just keep rerolling, but if I take anything out, prefer to start from most extreme, and work my way down only if I have the time
					const counts = [minBPCount];
					for (let count = maxBPCount; count > minBPCount; count--) {
						counts.push(count);
					}
					for (const count of counts) {
						const rerollConfigs = [
							...route.rerollConfigs,
							{
								...conf,
								blueprintCount: count,
							},
						];

						const origApps =
							rerollConfigs.length === 1
								? spawns // has the buyOnSight stuff removed so I don't buy it twice
								: shop.getAppliances(rerollConfigs, route.day);
						const apps = [...origApps].sort(
							(a, b) => a.PurchaseCost - b.PurchaseCost
						);

						const fodderExtracted = count - route.numFloor;
						if (fodderExtracted > route.fodderAvailable) {
							debugger;
						}
						const beforePurchaseState: RerollRoute = {
							...route,
							fodderPurchases: [route.fodderPurchases[1], 0],
							money: route.money - route.rerollConfigs.length * 10,
							rerollConfigs,
							numFloor:
								rerollConfigs.length === 1 ? count - delayBuy.length : count,
							fodderAvailable: route.fodderAvailable - fodderExtracted,
							fodderUsed: route.fodderUsed + fodderExtracted,
							cumulativeRerolls: route.rerollConfigs.length
								? route.cumulativeRerolls + 1
								: 0,
							actionHistory: !route.rerollConfigs.length
								? [
										`day ${route.day} spawn`,
										`spawn ${
											conf.spawnInside ? "I" : conf.playerInside ? "OI" : "OO"
										}`,
										...globalBoughtMessage,
								  ]
								: [
										...route.actionHistory,
										`${
											fodderExtracted ? `take ${fodderExtracted} out, ` : ""
										}reroll ${
											conf.spawnInside ? "I" : conf.playerInside ? "OI" : "OO"
										}`,
								  ],
						};
						if (
							beforePurchaseState.actionHistory.join(", ") ===
							"day 4 spawn, spawn OI, buy Hob for Danger Hob, buy Blueprint Cabinet, take 2 out, reroll I"
						) {
							console.log(origApps.map((a) => a.Name).join(", "));
							debugger;
						}
						processResult(beforePurchaseState);
						attemptPurchases(beforePurchaseState, apps, processResult);

						if (Date.now() > breakAfter) {
							break;
						}
					}
				}
			}
		}
		shop.addCard(c);
		// console.log(JSON.stringify(pareto.array));
		// console.log(pareto.array.map((r) => summary(r)).join("\n"));
		if (outerMissing <= 0) {
			if (!goalRigTiers.length) {
				finalRoutes.array.sort((a, b) => a.deskTime - b.deskTime);
				report(
					(outerMissing <= 0 ? `full build on ${seed} by day ${day}: \n` : "") +
						finalRoutes.array.map((r) => summary(r, money)).join("\n")
				);
				break;
			}
			// console.log({
			// 	remain: goalRigTiers.length,
			// 	usedBlueprintCabs,
			// 	next: goalRigTiers.map((a) => a["Blueprint Cabinet"]),
			// });
			// debugger;
			{
				const reserveBlueprintCabs =
					(goalRigTiers[0]["Blueprint Cabinet"]?.number ?? 0) -
					(currentTierGoalRig["Blueprint Cabinet"]?.number ?? 0);
				if (reserveBlueprintCabs + usedBlueprintCabs.length > 2) debugger;
				for (let i = 0; i < reserveBlueprintCabs; i++) {
					usedBlueprintCabs.push(1);
				}
			}

			for (const app of Object.values(currentTierGoalRig)) {
				if (app.number) shop.OwnedAppliances.push(getAppliance(app.goal));
			}
			currentTierGoalRig = goalRigTiers.shift()!;
			remainingRigTiers.shift();
			dailyRigComparators = [];
			for (const { goal, number } of Object.values(remainingRigTiers[0]))
				dailyRigComparators.push(generateComparator(number, goal));

			outerMissing = Infinity;
			extraBPCosts = [];

			reportTier(true);
			cumulativeParetoRoutes.array = finalRoutes.array;
			finalRoutes.clear();
			finalRoutes.objectiveFunctions; // TODO
		}
		// console.log(overallPareto.array.map((r) => summary(r)).join("\n"));
		// console.log({ outerMissing });
		// if (day === 4) return false; // give up if it's not better than azro2eh8
	}

	return day;

	function reportTier(final: boolean = false) {
		report(
			`tier ${
				rigTiers.length - goalRigTiers.length - (!final ? 0 : 1)
			} build on ${seed} by day ${day}${!final ? " (Partial)" : ""}: \n` +
				finalRoutes.array
					.slice(0, 100)
					.map((r) => summary(r, money))
					.join("\n")
		);
	}
	// return { cumulativeParetoRoutes };
}
function calculateMissingRig(
	currentTierGoalRig: Rig<RigPiece>,
	achieved: Rig<AchievedRig>
) {
	let missing = 0;
	for (const r of Object.values(currentTierGoalRig)) {
		// if (
		// 	r.goal === "Blueprint Cabinet" ||
		// 	r.goal === "Copying Desk" ||
		// 	r.goal === "Clipboard Stand"
		// )
		// 	continue;
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
	return missing;
}

function summary(r: RerollRoute | RerollRoutes, money: number) {
	const totalMoney =
		((r.cumulativeRerolls * (r.cumulativeRerolls + 1)) / 2) * 10 +
		r.applianceCosts;
	return (
		`${r.day}: ${getRouteTime(r)} total rerolls: ${
			r.cumulativeRerolls
		}, appliance costs: ${
			r.applianceCosts
		} (money spent: ${totalMoney}/${money}), ` + r.actionHistory.join(", ")
	);
}
