import { FindNewUnlocks } from "./reverse-engineered/cards";
import { Run } from "./reverse-engineered/run";
import { Shop } from "./reverse-engineered/shop";
import type { Unlock } from "../kitchenTypes";
// interface Unlock {}
console.log("start of worker file");
var worker = self as DedicatedWorkerGlobalScope;
let searching: boolean = false;
worker.onmessage = function (e) {
	console.log("Worker: Message received from main script");
	if (e.data.type === "start") {
		searching = true;
		search(e.data);
	} else {
		console.log("breaking search");
		searching = false;
	}
};

async function search({
	cards,
	goalCards,
	goalAppliances = [],
	mapSizes,
}: {
	cards: Unlock[];
	goalCards: (string | string[])[];
	goalAppliances: string[];
	mapSizes: number[];
}) {
	let seed = "az2mpjp3";
	// const game = new FindNewUnlocks(seed);
	// game.addCard(RestaurantSettings[0]); // Turbo to block rushes
	// game.addCard(Unlocks.filter((u) => u.Name === "Cakes")[0]);
	// const res = game.getUnlockOptions(1);
	// console.log({ res });

	// console.log(new Run("a").mapSize);

	let metric: [number, string[]] = [Infinity, []];
	let n = 10;
	while (searching && n) {
		await Yield();
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
			goalAppliances
		);
		if (candMetric[0] <= metric[0]) {
			metric = candMetric;
			n--;
			const res = JSON.stringify({
				seed,
				metric: [candMetric[0], candMetric[1]],
			});
			console.log(res);
			postMessage({
				type: "result",
				data: {
					seed,
					cards: candMetric[1],
					blueprints: [],
				},
			});
		} else {
			debugger;
		}
	}
}

function test(
	seed: string,
	cards: Unlock[],
	goalCards: (string | string[])[],
	goalAppliances: string[]
): [number, string[]] {
	const shop = new Shop(seed, 0.25);
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
		return [Infinity, []];
	}

	const game = new FindNewUnlocks(seed);
	for (const c of cards) {
		game.addCard(c);
	}
	let currentAllowableCards = [...goalCards[0]];
	let rank = 0;
	let stratFound = 0;
	let day = 1;
	for (; day < 15; day++) {
		const options = game.getUnlockOptions(day);
		const leftRank = currentAllowableCards.indexOf(options[0].Name);
		const rightRank = currentAllowableCards.indexOf(options[1].Name);
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
			return [Infinity, []];
		} else {
			// choose non-negative one
			if (leftRank >= 0) {
				chosen = 0;
			} else {
				chosen = 1;
			}
		}
		const chosenRank = currentAllowableCards.indexOf(options[chosen].Name);
		rank += chosenRank * (Math.abs(chosenRank - day + 1) + 1);
		if (!options[chosen]) {
			debugger;
			console.log({ options });
			throw new Error();
		}
		game.addCard(options[chosen]);
		if (options[chosen].Name === "Affordable" && day === 4) {
			console.log(`Chose card ${options[chosen].Name} on day ${day}`);
			debugger;
		}
		if (chosenRank > 3) {
			// wiggle--;
			// if (chosenRank > 4) wiggle--;
			// if (wiggle < 0) return [];
		} else {
			stratFound++;
			if (stratFound === 4) break;
		}
		if (Array.isArray(goalCards[day])) {
			currentAllowableCards = [...currentAllowableCards, ...goalCards[day]];
		} else if (typeof goalCards[day] === "string") {
			currentAllowableCards.push(goalCards[day] as string);
		}
	}
	return [day, game.cards.map((a) => a.Name)];
}
export const chars = "abcdefghijklmnopqrstuvwxyz123456789";
console.log("end of worker file");

function Yield() {
	return new Promise((resolve) => setTimeout(() => resolve(true), 0));
}
