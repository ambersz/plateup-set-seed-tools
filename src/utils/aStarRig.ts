// @ts-nocheck
import FastPriorityQueue from "fastpriorityqueue";
import { Unlock } from "../kitchenTypes";
import Appliances, { Appliance } from "../workers/db/appliances";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
import getExpectedCoupons from "./couponCollector";
import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "../workers/db/unlocks";
import { ObjectiveComparison, ParetoSet } from "./paretoSet";

class ParetoDay extends ParetoSet<RerollState> {
	constructor(finalLoadout: [Appliance, number][]) {
		const comparators: ObjectiveComparison<RerollState>[] = [
			(a: RerollState, b: RerollState) => {
				return a.day - b.day; // the earlier I finish the loadout, the better
			},
			// more money is better because it means you can do more rerolls in the future
			(a, b) => {
				return b.coins - a.coins;
			},
			// do I want this? on one hand, it would be nice to keep since it's the final metric I use to determine if a route is good, but on the other, it doesn't actually impact what blueprints I'm capable of reaching later. If possible I'd like to use it only as a tie-breaker for when all other comparisons come up equal, and never use it as a reason to keep a state I would otherwise remove
			(a, b) => {
				return (
					(a.rerollCount - b.rerollCount) * 2 +
					(a.ownedAppliances.length - b.ownedAppliances.length) +
					(a.deskTime - b.deskTime)
				);
				// reroll 2 seconds
				// buy blueprint 1 seconds
				// research/upgrade 5 seconds, gets halved to 2.5 if you own a clipboard stand so let the code handle that logic as you go
			},
			// more owned appliances is better
			...finalLoadout.map(([desiredAppliance, finalCount]) => {
				return (a: RerollState, b: RerollState) => {
					return (
						Math.min(
							finalCount,
							b.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length
						) -
						Math.min(
							finalCount,
							a.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length
						)
					);
				};
			}),
			// more potential owned appliances (i.e. including cabinets) is better
			...finalLoadout.map(([desiredAppliance, finalCount]) => {
				return (a: RerollState, b: RerollState) => {
					return (
						Math.min(
							finalCount,
							b.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length +
								b.blueprintCabinets
									.filter((a) => a.contents?.Name === desiredAppliance.Name)
									.reduce((count, a) => {
										return (a.containsCopy ? 2 : 1) + count;
									}, 0)
						) -
						Math.min(
							finalCount,
							a.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length +
								a.blueprintCabinets
									.filter((a) => a.contents?.Name === desiredAppliance.Name)
									.reduce((count, a) => {
										return (a.containsCopy ? 2 : 1) + count;
									}, 0)
						)
					);
				};
			}),
			// more empty blueprint cabinets is better for ability to manipulate blueprints on the ground without spending money to buy appliances
			(a, b) =>
				-a.blueprintCabinets.filter((a) => a.contents === undefined).length +
				b.blueprintCabinets.filter((a) => a.contents === undefined).length,
			// more fodder is better for ability to increase blueprints on the ground (but is it always better to have more? is there any case where you'd want to leave some fodder uncopied so that you can more easily access the underlying empty cabinet without having to buy appliances?)
			(a, b) =>
				-a.blueprintCabinets.reduce(
					(count, cab) =>
						count + (cab.contents === undefined ? 0 : cab.containsCopy ? 2 : 1),
					0
				) +
				b.blueprintCabinets.reduce(
					(count, cab) =>
						count + (cab.contents === undefined ? 0 : cab.containsCopy ? 2 : 1),
					0
				),
			// more cabs with 0 or 1 thing in them is better, for potential to get empty cabinets in the middle of reroll manips,
			(a, b) =>
				-a.blueprintCabinets.reduce(
					(count, cab) => count + (cab.containsCopy ? 0 : 1),
					0
				) +
				b.blueprintCabinets.reduce(
					(count, cab) => count + (cab.containsCopy ? 0 : 1),
					0
				),
		];
		super([], comparators);
	}
}
class ParetoFinal extends ParetoSet<RerollState> {
	constructor(finalLoadout: [Appliance, number][]) {
		const comparators: ObjectiveComparison<RerollState>[] = [
			(a: RerollState, b: RerollState) => {
				return a.day - b.day; // the earlier I finish the loadout, the better
			},
			// more money is better--- or not? Having more money isn't going to improve the speedrun necessarily. it's the time spent rerolling and upgrading that'll have the impact
			// (a, b) => {
			// 	return b.coins - a.coins;
			// },
			(a, b) => {
				return (
					(a.rerollCount - b.rerollCount) * 2 +
					(a.ownedAppliances.length - b.ownedAppliances.length) +
					(a.deskTime - b.deskTime)
				);
				// reroll 2 seconds
				// buy blueprint 1 seconds
				// research/upgrade 5 seconds, gets halved to 2.5 if you own a clipboard stand so let the code handle that logic as you go
			},
			...finalLoadout.map(([desiredAppliance, finalCount]) => {
				return (a: RerollState, b: RerollState) => {
					return (
						Math.min(
							finalCount,
							b.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length
						) -
						Math.min(
							finalCount,
							a.ownedAppliances.filter((a) => a.Name === desiredAppliance.Name)
								.length
						)
					);
				};
			}),
		];
		super([], comparators);
	}
}
interface EmptyCab {
	contents?: undefined;
	containsCopy: false;
}
interface FullCab {
	contents: Appliance;
	containsCopy: boolean;
}
type CabConfig = EmptyCab | FullCab;
interface BlueprintState {
	blueprintCabinets: CabConfig[];
	floorBlueprints: Appliance[];
	coins: number;
}
type DailyActions = {
	// what if I don't encode the actions I take in the data, just the final state?
	// the valid actions can be encoded in the state generation instead
	blueprintManip: BlueprintState[]; // length n+1
	rerolls: RerollConfig[]; // length n
};
type RerollState = {
	day: number;
	rerollCount: number;
	rerollConfig: RerollConfig[]; // the rerolls I've done so far today
	ownedAppliances: Appliance[];
	researchDesk: boolean;
	copyDesk: boolean;
	actions: DailyActions[];
	deskTime: number; // time spent researching & copying. normally 5 seconds but gets halved to 2.5 if you own a clipboard stand
} & BlueprintState;
let startingState: RerollState = {
	day: 0,
	coins: 30,
	rerollCount: 0,
	rerollConfig: [],
	blueprintCabinets: [{ containsCopy: false, contents: undefined }],
	ownedAppliances: [],
	researchDesk: false,
	copyDesk: false,
	floorBlueprints: [],
	actions: [],
};
/**
 * I'm worried that if I include money in the pareto filter, with the amount of money you make from turbo runs, it'll make for ridiculously deep search trees by day 6-7 when I expect to have enough money to buy everythng. because it'll always consider that doing nothing and going next is an pareto-optimal strat. then having that much money, it'll try to reroll until it runs out of money-- it's teeeechnially possible that it's optimal and you'll luck into a specific reroll with everything you want but.... the space just explodes so much...
 *
 * Might need a different pareto filter for day and and mid-rerolls...
 * What feels like a suboptimal state mid reroll?
 * If the reroll state is at all different, it could have better rerolls. so somehow return the positive and the negative of prng advancements as two different metrics?
 *
 * Or was it just slow as a mod because of the Unity bloat... can I get away with it if I'm not running the game?
 */

type TestA = {
	a: number;
};

class TestB {
	constructor() {}
	get a() {
		return this.b ** this.b;
	}
	get b() {
		return Math.random();
	}
}

function testC(a: TestA) {
	return a.a;
}
let d = new TestB();
testC(d);

class PriorityQueue<T extends object, V> {
	queue: FastPriorityQueue<T>;
	heuristic: (a: T) => V;
	comparer: (a: V, b: V) => number;
	constructor(heuristic: (a: T) => V, comparer: (a: V, b: V) => number) {
		this.heuristic = heuristic;
		this.comparer = comparer;
		this.queue = new FastPriorityQueue((a, b) => {
			return comparer(this.heuristic(a), this.heuristic(b)) < 0;
		});
	}
	add(a: T) {
		// binary search insertion
		this.queue.add(a);
	}
	shift() {
		return this.queue.poll();
	}
	get length() {
		return this.queue.size;
	}
}

export function aStarRig(
	seed: string,
	startingCards: Unlock[],
	cardPath: string[],
	finalRig: [string, number][],
	solo: boolean = true
) {
	let turbo = startingCards.some((a) => a.Name === "Turbo");
	let shop = new Shop(seed, turbo ? 0.2 : 0);
	startingCards.forEach((a) => shop.addCard(a));
	// handling a different shop state for each node because different cards introduce different ingredient appliance drops sounds like a pain... what if I just find a path that will work even if I already have all the ingredients?
	// will be suboptimal probably because I'm diluting the blueprint pool by a lot but.... eh.
	Unlocks.filter((a) => cardPath.some((b) => a.Name === b)).forEach((a) => {
		shop.addCard(a);
	});
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

	const expectedMoneyByDay: number[] = [
		92, 143, 159, 138, 138, 229, 229, 218, 263, 275, 252, 312, 337, 326, 326,
	]; // TODO: configure this manually from the spreadsheet per seed/card path
	function estimateRerollingTime(finalRig: [string, number][]) {
		const baseRigPieces: [Appliance, number][] = [];
		const upgradedRigPieces: [Appliance, number][] = [];
		for (const [applianceName, num] of finalRig) {
			const app = Appliances.filter((a) => a.Name === applianceName)[0];
			if (app.IsPurchasableAsUpgrade) {
				upgradedRigPieces.push([app, num]);
			} else {
				baseRigPieces.push([app, num]);
			}
		}
		return (a: RerollState) => {
			let remainingCost = 0;
			const desiredBaseRig: number[] = baseRigPieces
				.map((r) => {
					const owned = a.ownedAppliances.filter(
						(a) => a.Name === r[0].Name
					).length;
					const remaining = Math.max(0, r[1] - owned);
					remainingCost += r[0].PurchaseCost * remaining;
					return remaining;
				})
				.filter((a) => a);
			const desiredUpgradedRig: number[] = upgradedRigPieces
				.map((r) => {
					const owned = a.ownedAppliances.filter(
						(a) => a.Name === r[0].Name
					).length;
					const remaining = Math.max(0, r[1] - owned);
					remainingCost += r[0].PurchaseCost * remaining;
					return remaining;
				})
				.filter((a) => a);

			const availableAppliances = shop.buildShopOptions(
				a.ownedAppliances,
				shop.Theme,
				shop.Cards
			);
			const totalAppliances = availableAppliances.length;
			const upgradedAppliances = availableAppliances.filter(
				(a) => a.SellAsUpgrade
			).length;
			const baseAppliance = totalAppliances - upgradedAppliances;
			const probUpgraded =
				(upgradedAppliances / totalAppliances) * shop.getUpgradeChance(a.day);
			const probDesiredUpgrade =
				(desiredUpgradedRig.length / upgradedAppliances) * probUpgraded;
			const probBase = 1 - probUpgraded;
			const probDesiredBase =
				(desiredBaseRig.length / baseAppliance) * probBase;

			const rerolledBlueprintsForAllDesiredUpgrades = probDesiredUpgrade
				? getExpectedCoupons(desiredUpgradedRig) / probDesiredUpgrade
				: 0;
			const rerolledBlueprintsForAllDesiredBase =
				getExpectedCoupons(desiredBaseRig) / probDesiredBase;
			const minBPs = Math.max(
				rerolledBlueprintsForAllDesiredBase,
				rerolledBlueprintsForAllDesiredUpgrades
			);
			console.log({
				rerolledBlueprintsForAllDesiredBase,
				rerolledBlueprintsForAllDesiredUpgrades,
				minBPs,
			});
			const numDesiredAppliances =
				desiredBaseRig.reduce((a, b) => a + b, 0) +
				desiredUpgradedRig.reduce((a, b) => a + b, 0);
			const r = 1 - numDesiredAppliances / minBPs;
			let money = a.coins;
			let d = a.day;
			// get enough money to afford the rig without rerolls
			if (turbo) remainingCost /= 2;
			while (money < remainingCost) {
				money += expectedMoneyByDay[d];
				d++;
			}
			const naturalDoneDay = d;
			money -= remainingCost;
			let effectiveBPs = 0;
			let totalRerolls = 0;
			do {
				let deltaDays = d - a.day;
				// arithmetic series for reroll const-- let's just ignore that I can't actually make a partial reroll lol
				// (prevRerolls*10+10 + (prevRerolls+x-1)*10 + 10) * x / 2 = money
				// solve for x-- & divide evenly across deltaDays
				totalRerolls =
					(Math.sqrt(
						5 * (4 * money + 20 * a.rerollCount * (a.rerollCount + 1) + 5)
					) -
						10 * a.rerollCount -
						5) /
					10;
				const rerollsPerDay = totalRerolls / deltaDays;
				effectiveBPs =
					deltaDays *
					// from spawn, ignoring that the staples don't actually have a chance to roll anything I want
					(blueprintCount +
						// from rerolls, taking into account that I will be buying the things I want as I see them, so successive rerolls will be less and less effective
						(((blueprintCount +
							a.blueprintCabinets.length * (a.copyDesk ? 2 : 1)) *
							(1 - r ** rerollsPerDay)) /
							(1 - r)) *
							(2 * a.blueprintCabinets.length * rerollsPerDay - 1));

				money += expectedMoneyByDay[Math.min(expectedMoneyByDay.length - 1, d)];
				d++;
				console.log({
					deltaDays,
					totalRerolls,
					rerollsPerDay,
					money,
					effectiveBPs,
					minBPs,
					r,
					seriesMultiplier: (1 - r ** rerollsPerDay) / (1 - r),
				});
			} while (effectiveBPs < minBPs);
			d--;
			const rerollingAndDeskTime =
				(totalRerolls + a.rerollCount) * 2 +
				(a.ownedAppliances.length + numDesiredAppliances) * 1 +
				(a.copyDesk ? 5 * (d - a.day) * a.blueprintCabinets.length : 0) +
				a.deskTime;
			const res = d + rerollingAndDeskTime / 1000;
			console.log(
				`estimated day of full rig by random seed strats: ${d}-- heuristic: ${res}`
			);
			console.log({
				naturalDoneDay,
				d,
				res,
				totalRerolls,
				rerollingAndDeskTime,
				money,
				effectiveBPs,
			});
			return (naturalDoneDay * 19 + res) / 20;
		};
	}
	// sort by best heuristic first
	let nodes: PriorityQueue<RerollState, number> = new PriorityQueue(
		estimateRerollingTime(finalRig),
		(a, b) => a - b
	);
	const startingNode: RerollState = {
		day: 1,
		rerollCount: 0,
		rerollConfig: [{ spawnInside: true, blueprintCount }],
		ownedAppliances: Appliances.filter(
			(a) => a.Name === "Booking Desk" || a.Name === "Blueprint Cabinet"
		).concat(shop.OwnedAppliances),
		researchDesk: false,
		copyDesk: false,
		deskTime: 0,
		coins: turbo ? 30 : 0,
		blueprintCabinets: [
			{ contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
			// { contents: undefined, containsCopy: false },
		],
		floorBlueprints: shop.getAppliances(
			[{ spawnInside: true, blueprintCount }],
			1
		),
		actions: [],
	};
	console.log(estimateRerollingTime(finalRig)(startingNode));
	nodes.add(startingNode);
	let first = true;
	while (nodes.length) {
		const expand = nodes.shift()!;
		/**
		 * 1. expand nodes
		 * 	a. buy any subset of desired blueprints (day 1 only)
		 * 	b. reroll search at depth 2, buying any subset of desired blueprints
		 * 	c. go to next day, buying any subset of desired blueprints from spawns
		 * 2. assign new heuristic to expanded nodes
		 * 3. insert the new nodes in priority queue
		 */

		let newQueue: RerollState[] = [];
		if (!first) {
			// can you even afford to reroll?
			if (expand.coins >= (expand.rerollCount + 1) * 10) {
				// put blueprints in open cabinets
				const openCabinets = expand.blueprintCabinets.filter(
					(a) => a.contents === undefined
				).length;
				const reduceBPs = Math.min(
					openCabinets,
					expand.floorBlueprints.length - 1
				);
				const reducedCopy = { ...expand };

				reducedCopy.blueprintCabinets = [...reducedCopy.blueprintCabinets]; // gotta copy this too
				let emptyIndex = 0;
				// progressively fill the blueprint cabinets with more and more blueprints
				for (let i = 1; i <= reduceBPs; i++) {
					while (
						reducedCopy.blueprintCabinets[emptyIndex].contents !== undefined
					) {
						emptyIndex++;
					}
					reducedCopy.blueprintCabinets = [...reducedCopy.blueprintCabinets];
					reducedCopy.blueprintCabinets.splice(emptyIndex, 1, {
						contents: expand.floorBlueprints[i - 1],
						containsCopy: false,
					});
					newQueue.push({ ...reducedCopy });
				}
				// progressively take more and more blueprints out of the blueprint cabinets
				let i = expand.blueprintCabinets.length;
				const increaseCopy = { ...expand };
				while (i--) {
					increaseCopy.blueprintCabinets = [...increaseCopy.blueprintCabinets];
					increaseCopy.floorBlueprints = [
						...increaseCopy.floorBlueprints,
						increaseCopy.blueprintCabinets[i].contents!,
					];
					if (increaseCopy.blueprintCabinets[i].containsCopy) {
						increaseCopy.blueprintCabinets[i] = {
							...increaseCopy.blueprintCabinets[i],
							containsCopy: false,
						};
						i++;
					} else {
						increaseCopy.blueprintCabinets[i] = {
							contents: undefined,
							containsCopy: false,
						};
					}
					newQueue.push({ ...increaseCopy });
				}
				newQueue.push({ ...expand });
				// queue now contains all reachable numbers of blueprints on the ground, without force-buying to reduce floor blueprints
				let retroRerollConfigs: RerollConfig[];
				if (expand.rerollConfig.length) {
					retroRerollConfigs = rerollSettings;
				} else {
					retroRerollConfigs = spawnSettings;
				}
				let cachedRerollResults = retroRerollConfigs.map((conf) =>
					shop.getAppliances(
						[
							...expand.rerollConfig,
							{
								...conf,
								blueprintCount: newQueue.at(-1)?.floorBlueprints.length!,
							},
						],
						expand.day
					)
				);
				newQueue = newQueue.flatMap((a) =>
					cachedRerollResults.map((apps) => ({
						...a,
						floorBlueprints: apps.slice(0, a.floorBlueprints.length),
					}))
				);
			}
			// go to next day
			newQueue.push();
		} else {
			newQueue = [expand];
			first = false;
		}
		// newQueue has rerolled, buy as many of your desired appliances as possible from the floor, stuff the rest into blueprint cabinets
		// buy as many of your desired appliances from cabinets as possible
		newQueue.map((state) => {});
	}
}

function buy(app: Appliance, state: RerollState, turbo: boolean) {
	const copy = { ...state };
	switch (app.Name) {
		case "Blueprint Cabinet":
			copy.blueprintCabinets = [
				...copy.blueprintCabinets,
				{ contents: undefined, containsCopy: false },
			];
			break;
		case "Copying Desk":
			copy.copyDesk = true;
			break;
		case "Research Desk":
			copy.researchDesk = true;
			break;
		default:
			break;
	}
	copy.coins -= (turbo ? 0.5 : 1) * app.PurchaseCost;
	copy.ownedAppliances = [...copy.ownedAppliances, app];
	return copy;
}
