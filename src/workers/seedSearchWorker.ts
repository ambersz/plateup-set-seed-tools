import { FindNewUnlocks } from "./reverse-engineered/cards";
import { LayoutProfileName, Run } from "./reverse-engineered/run";
import { RerollConfig, Shop } from "./reverse-engineered/shop";
import type { Unlock } from "../kitchenTypes";
import Appliances, { Appliance } from "./db/appliances";
import { ShuffleInPlace, chars, hashCollisionPairMap } from "../utils/utils";
import { DishType, UnlockGroup } from "../kitchenEnums";
const CUSTOMER_INCREASING_CARDS = [
	"Burgers",
	"Hot Dogs",
	"Breakfast",
	"Steak",
	"Salad",
	"Pizza",
	"Black Coffee",
];
let numSeeds = 0;

// @ts-ignore
var worker = self as Worker;
let searching: boolean = false;
let nextProgressUpdate = new Date().valueOf();
worker.onmessage = function (e: MessageEvent<MessageFormat>) {
	console.log("Worker: Message received from main script");
	if (e.data.type === "start") {
		searching = true;
		search(e.data.data as SearchParams);
		// setTimeout(() => (searching = false), 1000 * 60 * minutes);
	} else {
		console.log("breaking search");
		sendProgress(numSeeds, true);
		searching = false;
	}
};
export interface MessageFormat {
	type: "start" | "stop";
	data?: SearchParams;
}
export type ResultFormat =
	| {
			type: "result" | "error";
			data: ResultData;
	  }
	| {
			type: "progress";
			data: number | string;
	  };
export interface ResultData {
	seed: string;
	cards: string[];
	mapSize: LayoutProfileName;
	blueprints: Appliance[];
}

export interface SearchParams {
	goalCards: GoalCardConfig[];
	goalAppliances: string[];
	mapSizes: LayoutProfileName[];
	maxSeeds?: number;
	partial?: boolean;
}

export interface GoalCardConfig {
	include: boolean;
	cards: Unlock[];
}
let bestTarget = -1;
async function search({
	goalCards,
	goalAppliances = [],
	mapSizes,
	maxSeeds = Infinity,
	partial = false,
}: SearchParams) {
	numSeeds = 0;
	const channel = new MessageChannel();
	let promiseResolver: () => void;
	channel.port2.onmessage = (_event) => {
		promiseResolver();
	};
	let seed = "az2mpjp3";
	const restaurantSettings = goalCards[0].cards.filter(
		(a) => a.UnlockGroup === UnlockGroup.Special
	);
	const startingDishes = goalCards[0].cards.filter(
		(a) => a.DishType !== DishType.Null
	);
	const cardDays = goalCards[0].cards.some((a) => a.Name === "Turbo")
		? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
		: [3, 5, 6, 9, 12, 15, 18, 21, 24, 27].slice(0, goalCards.length - 1);

	let metric: [number, string[]] = [-Infinity, []];
	let n = maxSeeds;
	const shuffledChars = new Array(6)
		.fill(chars)
		.map((a) => ShuffleInPlace(Array.from(a)).join(""));
	let seedID = new Array(6).fill(0);
	seedID[0]--;
	seedLoop: while (searching && n) {
		sendProgress(numSeeds);
		const promise = new Promise((resolve) => {
			promiseResolver = resolve as () => void;
		});
		channel.port1.postMessage(null);
		await promise;
		seedID[0]++;
		for (let i = 0; i < seedID.length; i++) {
			if (seedID[i] === shuffledChars[i].length) {
				if (i === seedID.length - 1) {
					// done with all unique seeds
					break seedLoop;
				}
				// carry
				seedID[i] = 0;
				shuffledChars[i] = ShuffleInPlace(Array.from(shuffledChars[i])).join(
					""
				);
				seedID[i + 1]++;
			}
		}
		seed = "az";

		while (seed.length < 8) {
			const i = seed.length - 2;
			const char = shuffledChars[i][seedID[i]];
			if (!char) {
				debugger;
			}
			seed += char;
			if (seed.length > 8) {
				debugger;
			}
		}
		for (let i = 0; i < seed.length - 1; i++) {
			if (hashCollisionPairMap[seed[i] + seed[i + 1]]) {
				// this has a dupe seed, skip this one.
				continue seedLoop;
			}
		}
		numSeeds++; // only increment seeds tested if it's not a dupe
		const run = new Run(seed);
		const ms = run.mapSize;
		if (!mapSizes.includes(ms)) continue;
		for (const dish of startingDishes) {
			const candMetric: [number, string[]] = test(
				seed,
				[...restaurantSettings, dish],
				goalCards,
				goalAppliances,
				partial,
				cardDays
			);
			if (candMetric[0] >= metric[0]) {
				if (!Number.isFinite(candMetric[0])) continue;
				metric = candMetric;
				n--;
				// const res = JSON.stringify({
				// 	seed,
				// 	metric: [candMetric[0], candMetric[1]],
				// });
				// // console.log(res);
				reportResult({
					seed,
					mapSize: ms,
					cards: candMetric[1],
					blueprints: [],
				});
			}
		}
	}
	sendProgress(`Complete`, true);
}
function reportResult(data: ResultData) {
	const res: ResultFormat = { type: "result", data };
	nextProgressUpdate = Date.now() + 60; // If they're seeing new seeds that's proof the searcher is running. Keep the data pipe free by delaying the next progress update
	postMessage(res);
}
function sendProgress(n: number | string, force: boolean = false) {
	if (!force && Date.now() < nextProgressUpdate) return;
	nextProgressUpdate = Date.now() + 120;
	const res: ResultFormat = { type: "progress", data: n };
	postMessage(res);
}
// const iceCream = Unlocks.filter((a) => a.Name === "Ice Cream")[0];
const defaultOwnedAppliances = ["Blueprint Cabinet", "Booking Desk"].flatMap(
	(n) => Appliances.filter((a) => a.Name === n)
);
function test(
	seed: string,
	cards: Unlock[],
	goalCardConfigs: GoalCardConfig[],
	_goalAppliances: string[],
	partial: boolean = false,
	cardDays: number[]
): [number, string[]] {
	const INSPECT_BLUEPRINTS = import.meta.env.DEV ? false : false;

	const game = new FindNewUnlocks(seed);
	for (const c of cards) {
		game.addCard(c);
	}
	let partialMisses = 0;
	let day = 1;
	let haveDessert = false;
	let haveStarter = false;
	for (; day <= (cardDays.at(-1) ?? 15); day++) {
		if (cardDays.includes(day)) {
			const dayIndex = cardDays.indexOf(day) + 1;
			const options = game.getUnlockOptions(day);
			const leftRank = rankOfCandidate(options[0], goalCardConfigs[dayIndex]);
			const rightRank = rankOfCandidate(options[1], goalCardConfigs[dayIndex]);
			let chosen = -1;
			if (leftRank > -1 && rightRank > -1) {
				// choose smallest
				if (leftRank < rightRank) {
					chosen = 0;
				} else if (rightRank < leftRank) {
					chosen = 1;
				} else {
					// equal, pick randomly?
					chosen = Math.floor(Math.random() * 2);
				}
			} else if (leftRank === -1 && rightRank === -1) {
				// failed
				if (
					!partial ||
					// (goalCardConfigs[day].include &&
					// 	goalCardConfigs[day].cards.length === 1) // want one specific card, partial not allowed.
					day < 2 ||
					partialMisses > 2
				) {
					return [-Infinity, []];
				}
				// chosen = Math.floor(Math.random() * 2);
				partialMisses++;
				if (CUSTOMER_INCREASING_CARDS.includes(options[0].Name)) {
					chosen = 1;
				} else {
					chosen = 0;
				}
				const other = options[1 - chosen];
				if (
					other.Name === "Dumplings" ||
					other.Name.includes("Stuffing") ||
					(!haveDessert &&
						other.DishType === DishType.Dessert &&
						other.Name !== "Black Coffee") ||
					(!haveStarter && other.DishType === DishType.Starter)
				)
					chosen = 1 - chosen;
			} else {
				// choose non-negative one
				if (leftRank >= 0) {
					chosen = 0;
				} else {
					chosen = 1;
				}
			}
			// const chosenRank = indexOfUnlock(
			// 	goalCardConfigs[day].cards,
			// 	options[chosen]
			// );
			// rank += chosenRank * (Math.abs(chosenRank - day + 1) + 1);
			if (!options[chosen]) {
				console.log({ options });
				throw new Error();
			}
			switch (options[chosen].DishType) {
				case DishType.Dessert:
					haveDessert = true;
					break;
				case DishType.Starter:
					haveStarter = true;
					break;
				default:
					break;
			}
			game.addCard(options[chosen]);
		}
	}
	let targets = 0;
	let spawnedTargets: Appliance[] = [];
	let bestRerolledTargets: Appliance[] = [];
	let allRerolledTargets: Appliance[] = [];

	if (INSPECT_BLUEPRINTS) {
		const shop = new Shop(
			seed,
			0
			// cards.some((a) => a.Name === "Turbo") ? 0.25 : 0
		);
		shop.OwnedAppliances = defaultOwnedAppliances;
		for (const card of game.cards) {
			shop.addCard(card);
		}

		const goalAppliances = [
			// "Rolling Pin",
			// "Sharp Knife",
			// "Workstation",
			// "Dish Washer",
			"Conveyor Mixer",
			"Power Sink",
			"Grabber",
			// "Danger Hob",
			// "Flower Pot",
			// "Conveyor",
			// "Prep Station",
			// "Bar Table",
			// "Tray Stand",
			// "Sharp Cutlery",
			// "Napkins",
			// "Trainers",
			// "Discount Desk",
			// "Robot Buffer",
			// "Kitchen Floor Protector",
			// "Display Stand",
			// "Bar Table",
			// "Table - Fancy Cloth",
			// "Table - Simple Cloth",
			// "Metal Table",
			// "Blueprint Cabinet",
			// "Coffee Machine",
		];
		const NEED_EARLY_COFFEE = true;
		if (NEED_EARLY_COFFEE) {
			let earlyCoffee = false;
			if (
				!shop
					.getAppliances([{ spawnInside: true, blueprintCount: 5 }], 5)
					.some((a) => a.Name === "Affordable Bin")
			)
				return [-Infinity, []];
			for (let day = 1; day < 5; day++) {
				const spawns = shop.getAppliances(
					[{ spawnInside: true, blueprintCount: 5 }],
					day
				);
				// if (spawns.some((a) => a.Name === "Affordable Bin")) {
				if (spawns.some((a) => a.Name === "Sharp Knife")) {
					// if (spawns.some((a) => a.Name === "Coffee Machine")) {
					earlyCoffee = true;
					break;
				}
			}
			if (!earlyCoffee) {
				return [-Infinity, []];
			}
		}
		for (let day = 6; day <= 12; day++) {
			// spawns better, but in rerolls is good too
			spawnedTargets.push(
				...shop
					.getAppliances([{ spawnInside: true, blueprintCount: 5 }], day)
					.filter((a) => goalAppliances.includes(a.Name))
			);
			if (true) {
				const configs: RerollConfig[][] = [
					[
						{ spawnInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: false, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: true, blueprintCount: 5 },
						{ spawnInside: false, playerInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: false, blueprintCount: 5 },
						{ spawnInside: false, playerInside: false, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 6 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: true, blueprintCount: 5 },
						{ spawnInside: false, playerInside: true, blueprintCount: 6 },
						{ spawnInside: true, blueprintCount: 6 },
					],
					[
						{ spawnInside: false, playerInside: false, blueprintCount: 5 },
						{ spawnInside: false, playerInside: false, blueprintCount: 6 },
						{ spawnInside: true, blueprintCount: 6 },
					],
				];
				for (const c of configs) {
					const reroll = shop
						.getAppliances(c, day)
						.filter((a) => goalAppliances.includes(a.Name));
					if (reroll.length > bestRerolledTargets.length)
						bestRerolledTargets = reroll;
					allRerolledTargets.push(...reroll);
				}
			}
			if (false) {
				const run = new Run(seed, cards, []);
				// require use a full tray of cookies
				for (let day = 1; day <= 1; day++) {
					if (run.getCustomerCount(day) > 4) return [Infinity, []];
				}
			}
		}
		targets += spawnedTargets.filter((a) => a.Name === "Display Stand").length;
		targets += allRerolledTargets.length * 100;
		const unique = new Set();
		for (const { Name } of spawnedTargets) {
			unique.add(Name);
		}
		targets += unique.size * 9;
		for (const { Name } of allRerolledTargets) {
			unique.add(Name);
		}
		targets += unique.size;
		if (targets <= bestTarget - 1) return [-Infinity, []];
		if (false) {
			const firstSpawns = shop
				.getAppliances([{ spawnInside: true, blueprintCount: 5 }], 6)
				.map((a) => a.Name);
			const rerolls = shop
				.getAppliances(
					[
						{ spawnInside: true, blueprintCount: 5 },
						{ spawnInside: true, blueprintCount: 7 },
					],
					6
				)
				.concat(
					shop.getAppliances(
						[
							{ spawnInside: false, playerInside: true, blueprintCount: 5 },
							{ spawnInside: true, blueprintCount: 7 },
						],
						6
					)
				)
				.concat(
					shop.getAppliances(
						[
							{ spawnInside: false, playerInside: false, blueprintCount: 5 },
							{ spawnInside: true, blueprintCount: 7 },
						],
						6
					)
				)
				.map((a) => a.Name);
			if (
				// !firstSpawns.includes("Blueprint Cabinet")
				!firstSpawns.concat(rerolls).includes("Discount Desk")
				// ||!firstSpawns.includes("Discount Desk")
			)
				return [-Infinity, []];
			// shop.addCard(iceCream);
			// const secondSpawns = shop
			// 	.getAppliances([{ spawnInside: true, blueprintCount: 7 }], 2)
			// 	.map((a) => a.Name);
			// if (!secondSpawns.includes("Display Stand")) return [-Infinity, []];
		}
	}
	if (targets > bestTarget) {
		console.log({ targets, bestTarget, seed });
		bestTarget = targets;
	}
	return [day - partialMisses, game.cards.map((a) => a.Name)];
}

function indexOfUnlock(array: Unlock[], target: Unlock) {
	// can't just indexOf for the full Unlock because the Worker message-passing will result in the same Unlock having different instances
	for (let i = 0; i < array.length; i++) {
		if (array[i].ID === target.ID) {
			return i;
		}
	}
	return -1;
}

function rankOfCandidate(candidate: Unlock, config: GoalCardConfig) {
	if (config.include) {
		return indexOfUnlock(config.cards, candidate);
	}
	return config.cards.some((a) => a.ID === candidate.ID) ? -1 : 0;
}
