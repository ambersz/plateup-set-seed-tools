import { FindNewUnlocks } from "./reverse-engineered/cards";
import { Run } from "./reverse-engineered/run";
import { Shop } from "./reverse-engineered/shop";
import type { Unlock } from "../kitchenTypes";
import { Appliance } from "./db/appliances";
// interface Unlock {}
console.log("start of worker file");
var worker = self as DedicatedWorkerGlobalScope;
let searching: boolean = false;

worker.onmessage = function (m) {
	const e = m as { data: MessageFormat };
	console.log("Worker: Message received from main script");
	if (e.data.type === "start") {
		searching = true;
		search(e.data.data as SearchParams);
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
	const channel = new MessageChannel();
	let promiseResolver: () => void;
	channel.port2.onmessage = (event) => {
		promiseResolver();
	};
	let seed = "az2mpjp3";
	const cards = goalCards[0].cards;

	let metric: [number, string[]] = [-Infinity, []];
	let n = maxSeeds;
	while (searching && n) {
		const promise = new Promise((resolve) => {
			promiseResolver = resolve as () => void;
		});
		channel.port1.postMessage(null);
		await promise;
		seed = "az";
		while (seed.length < 8) {
			seed += chars[Math.floor(Math.random() * chars.length)];
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
}
function reportResult(data: ResultData) {
	const res: ResultFormat = { type: "result", data };
	postMessage(res);
}
function test(
	seed: string,
	cards: Unlock[],
	goalCardConfigs: GoalCardConfig[],
	goalAppliances: string[],
	partial: boolean = false
): [number, string[]] {
	const shop = new Shop(seed, cards.some((a) => a.Name === "Turbo") ? 0.25 : 0);
	for (const card of cards) {
		shop.addCard(card);
	}
	const firstSpawns = shop
		.getAppliances([{ spawnInside: true, blueprintCount: 7 }], 1)
		.map((a) => a.Name);
	const firstRerolls = [
		shop
			.getAppliances(
				[
					{ spawnInside: true, blueprintCount: 7 },
					{ spawnInside: true, blueprintCount: 5 },
				],
				1
			)
			.map((a) => a.Name),
		shop
			.getAppliances(
				[
					{ spawnInside: false, playerInside: true, blueprintCount: 7 },
					{ spawnInside: true, blueprintCount: 5 },
				],
				1
			)
			.map((a) => a.Name),
		shop
			.getAppliances(
				[
					{ spawnInside: false, playerInside: false, blueprintCount: 7 },
					{ spawnInside: true, blueprintCount: 5 },
				],
				1
			)
			.map((a) => a.Name),
	];
	let count = 0;
	let countReroll: number[] = [];
	for (const goal of goalAppliances) {
		let foundFirst = false;
		if (firstSpawns.includes(goal)) {
			count++;
			foundFirst = true;
		}
		if (!foundFirst || (goal !== "Rolling Pin" && goal !== "Tray Stand")) {
			for (let i = 0; i < firstRerolls.length; i++) {
				if (firstRerolls[i].includes(goal)) {
					if (!countReroll[i]) countReroll[i] = 0;
					countReroll[i]++;
				}
			}
		}
	}
	let appliances = [...firstSpawns, ...firstRerolls.flat()];

	if (
		!appliances.includes("Bar Table") ||
		!(count > 1 || count + Math.max(...countReroll) > 2)
	) {
		return [-Infinity, []];
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
			} else {
				chosen = 1;
			}
		} else if (leftRank === -1 && rightRank === -1) {
			// failed
			if (!partial) return [-Infinity, []];
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

import.meta.env.DEV && console.log("end of worker file");

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
