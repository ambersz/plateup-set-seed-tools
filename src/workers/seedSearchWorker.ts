import { FindNewUnlocks } from "./reverse-engineered/cards";
import { Run } from "./reverse-engineered/run";
import { Shop } from "./reverse-engineered/shop";
import type { Unlock } from "../kitchenTypes";
import { Appliance } from "./db/appliances";
import { hash } from "./reverse-engineered/prng";
import { Unlocks } from "./db/unlocks";

// @ts-ignore
var worker = self as Worker;
let seedHashes: (number | undefined)[] = [];
let size = 0;
const checkHash = false;
// 2771254 distinct seeds checked in 2 minutes over 2782919 tries.
const minutes = 60;
function checkAndSaveHash(h: number): boolean {
	const uintHash = h >>> 0;
	const bucket = Math.floor(uintHash / 32);
	const shift = uintHash % 32;
	const a = seedHashes[bucket];
	let has = a && (a & (1 << shift)) !== 0;
	if (!has) size++;
	const save = (a ?? 0) | (1 << shift);
	seedHashes[bucket] = save;
	return !!has;
}

let searching: boolean = false;

worker.onmessage = function (e: MessageEvent<MessageFormat>) {
	console.log("Worker: Message received from main script");
	if (e.data.type === "start") {
		searching = true;
		seedHashes = [];
		size = 0;
		search(e.data.data as SearchParams);
		// setTimeout(() => (searching = false), 1000 * 60 * minutes);
	} else {
		console.log("breaking search");
		searching = false;
	}
};
export interface MessageFormat {
	type: "start" | "stop";
	data?: SearchParams;
}
export interface ResultFormat {
	type: "result" | "error";
	data: ResultData;
}
export interface ResultData {
	seed: string;
	cards: string[];
	blueprints: Appliance[];
}

export interface SearchParams {
	goalCards: GoalCardConfig[];
	goalAppliances: string[];
	mapSizes: number[];
	maxSeeds?: number;
	partial?: boolean;
}

export interface GoalCardConfig {
	include: boolean;
	cards: Unlock[];
}

async function search({
	goalCards,
	goalAppliances = [],
	mapSizes,
	maxSeeds = 10,
	partial = false,
}: SearchParams) {
	let numSeeds = 0;
	const channel = new MessageChannel();
	let promiseResolver: () => void;
	channel.port2.onmessage = (_event) => {
		promiseResolver();
	};
	let seed = "az2mpjp3";
	const cards = goalCards[0].cards;

	let metric: [number, string[]] = [-Infinity, []];
	let n = maxSeeds;
	while (searching && n) {
		numSeeds++;
		const promise = new Promise((resolve) => {
			promiseResolver = resolve as () => void;
		});
		channel.port1.postMessage(null);
		await promise;
		seed = "az";
		while (seed.length < 8) {
			seed += chars[Math.floor(Math.random() * chars.length)];
		}
		if (checkHash) {
			const hashed = hash(seed);
			if (checkAndSaveHash(hashed)) continue;
		}
		const ms = new Run(seed).mapSize;
		if (!mapSizes.includes(ms)) continue;
		const candMetric: [number, string[]] = test(
			seed,
			cards,
			goalCards,
			goalAppliances,
			partial
		);
		if (candMetric[0] >= metric[0]) {
			if (!Number.isFinite(candMetric[0])) continue;
			metric = candMetric;
			n--;
			const res = JSON.stringify({
				seed,
				metric: [candMetric[0], candMetric[1]],
			});
			console.log(res);
			reportResult({
				seed,
				cards: candMetric[1],
				blueprints: [],
			});
		}
	}
	// 3911700 distinct seeds checked in 2 minutes over 3935153 tries.
	//       0 distinct seeds checked in 2 minutes over 4121851 tries.
	// 9240889 distinct seeds checked in 5 minutes over 9372250 tries.
	console.log(
		`${size} distinct seeds checked in ${minutes} minutes over ${numSeeds} tries.`
	);
	// 3676793 distinct seeds checked in 2 minutes over 3697388 tries.
	//       0 distinct seeds checked in 2 minutes over 3936888 tries.
}
function reportResult(data: ResultData) {
	const res: ResultFormat = { type: "result", data };
	postMessage(res);
}
const iceCream = Unlocks.filter((a) => a.Name === "Ice Cream")[0];

function test(
	seed: string,
	cards: Unlock[],
	goalCardConfigs: GoalCardConfig[],
	_goalAppliances: string[],
	partial: boolean = false
): [number, string[]] {
	const INSPECT_BLUEPRINTS = import.meta.env.DEV ? false : false;
	if (INSPECT_BLUEPRINTS) {
		const shop = new Shop(
			seed,
			cards.some((a) => a.Name === "Turbo") ? 0.25 : 0
		);
		for (const card of cards) {
			shop.addCard(card);
		}
		const firstSpawns = shop
			.getAppliances([{ spawnInside: true, blueprintCount: 7 }], 1)
			.map((a) => a.Name);
		if (
			!firstSpawns.includes("Copying Desk") ||
			!firstSpawns.includes("Discount Desk")
		)
			return [-Infinity, []];
		shop.addCard(iceCream);
		const secondSpawns = shop
			.getAppliances([{ spawnInside: true, blueprintCount: 7 }], 2)
			.map((a) => a.Name);
		if (!secondSpawns.includes("Display Stand")) return [-Infinity, []];
	}

	const game = new FindNewUnlocks(seed);
	for (const c of cards) {
		game.addCard(c);
	}

	let partialMisses = 0;
	let day = 1;
	for (; day < 15; day++) {
		const options = game.getUnlockOptions(day);
		const leftRank = rankOfCandidate(options[0], goalCardConfigs[day]);
		const rightRank = rankOfCandidate(options[1], goalCardConfigs[day]);
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
				day < 2
			) {
				console.log(
					options.map((a) => a.Name).join(", ") + ` on day ${day} both suck.`
				);
				return [-Infinity, []];
			}
			chosen = Math.floor(Math.random() * 2);
			partialMisses++;
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
			debugger;
			console.log({ options });
			throw new Error();
		}
		game.addCard(options[chosen]);
	}
	return [day - partialMisses, game.cards.map((a) => a.Name)];
}
export const chars = "abcdefghijklmnopqrstuvwxyz123456789";

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
