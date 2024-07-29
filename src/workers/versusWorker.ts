import { FindNewUnlocks } from "./reverse-engineered/cards";
import { Unlock } from "../kitchenTypes";
import { randomInGameSeed } from "../utils/utils";
import { LayoutProfileName, Run } from "./reverse-engineered/run";
const DAYS = [3, 5, 6, 9, 12];
let c = 0;
const worker = self as unknown as Worker;
export interface RequestFormat {
	type: "strict" | "flex" | "priorityModel";
	data: {
		mapSettings: Unlock[];
		startingDishes: Unlock[];
		allowedTables: LayoutProfileName[];
	};
}
export interface ResponseDataFormat {
	seed: string;
	mapSize: LayoutProfileName;
	startingDish: string;
}
export type ResponseFormat = {
	type: "result";
	data: ResponseDataFormat;
};
worker.onmessage = (e: MessageEvent<RequestFormat>) => {
	let searcher: (setup: FindNewUnlocks) => boolean;
	switch (e.data.type) {
		case "strict":
			searcher = strictTest;
			break;
		case "flex":
			searcher = flexTest;
			break;
		case "priorityModel":
			searcher = dependencyAllowed;
			break;
		default:
			throw new Error();
			break;
	}
	const { allowedTables, startingDishes, mapSettings } = e.data.data;
	const dishes = [...startingDishes];
	const unlocks = new FindNewUnlocks("");
	for (const s of mapSettings) unlocks.addCard(s);
	while (dishes.length) {
		const s = randomInGameSeed();
		// const s = "h984833g";
		const mapSize = new Run(s).getMapSize();
		if (!allowedTables.includes(mapSize)) continue;
		unlocks.seed = s;
		const i = Math.floor(Math.random() * dishes.length);
		unlocks.cards = [...mapSettings, dishes[i]];
		if (searcher(unlocks)) {
			sendResult({ seed: s, mapSize, startingDish: dishes[i].Name });
			dishes.splice(i, 1);
		}
	}
};

function sendResult(result: ResponseDataFormat) {
	sendMessage({ type: "result", data: result });
}

function sendMessage(message: ResponseFormat) {
	postMessage(message);
}

function strictTest(setup: FindNewUnlocks): boolean {
	let queue = [setup.cards];
	for (let i = 0; i < 5; i++) {
		const options = new Set();
		let nextQueue = [];
		for (const v of queue) {
			setup.cards = v;
			const n = setup.getUnlockOptions(DAYS[i]);
			options.add(n[0].Name);
			options.add(n[1].Name);
			if (options.size > 2) return false;
			nextQueue.push([...v, n[0]]);
			nextQueue.push([...v, n[1]]);
		}
		queue = nextQueue;
	}
	return true;
}
function flexTest(setup: FindNewUnlocks): boolean {
	let queue = [setup.cards];
	const options = new Set();
	for (let i = 0; i < 5; i++) {
		let nextQueue = [];
		for (const v of queue) {
			setup.cards = v;
			const n = setup.getUnlockOptions(DAYS[i]);
			options.add(n[0].Name);
			options.add(n[1].Name);
			if (options.size > 10) return false;
			nextQueue.push([...v, n[0]]);
			nextQueue.push([...v, n[1]]);
		}
		queue = nextQueue;
	}
	return true;
}

function dependencyAllowed(setup: FindNewUnlocks): boolean {
	const originalSetupCards = setup.cards;
	// Given the previous card path, what unlock option combinations are permitted for the next card?
	// The options shown must be the same across all unlock paths
	// exceptions: a card is allowed to be re-offered, and a card which depends on having a card taken in the path may override other choices
	// essentially, the given card path should be compatible with a model where (for each day,) all possible cards are ranked globally, then for each partial card path, the first valid option is shown

	let queue = [originalSetupCards];
	for (let i = 0; i < 5; i++) {
		let lrPriorities: [Unlock[][], Unlock[][]] = [[[]], [[]]];
		let lrSeenCards = [new Set<number>(), new Set<number>()];
		let lrPathToOpt = [
			new Map<Unlock[], Unlock>(),
			new Map<Unlock[], Unlock>(),
		];
		let newQueue: Unlock[][] = [];
		for (let j = 0; j < queue.length; j++) {
			const p = queue[j];
			setup.cards = p;
			const day = DAYS[i];
			const options = setup.getUnlockOptions(day);
			if (day === 5) {
				// order doesn't matter for the deco themes
				for (const ind of [0, 1]) {
					lrSeenCards[0].add(options[ind].ID);
					newQueue.push([...p, options[ind]]);
				}
				if (lrSeenCards[0].size > 2) return false;
				continue;
			}
			for (let lrIndex = 0; lrIndex <= 1; lrIndex++) {
				const opt = options[lrIndex];
				newQueue.push([...p, opt]);
				// if this card has already been seen, we don't need to add or recheck priorities
				if (lrSeenCards[lrIndex].has(opt.ID)) {
					continue;
				}
				lrSeenCards[lrIndex].add(opt.ID);
				lrPathToOpt[lrIndex].set(p, opt);
				// 1. augment the possibilities for left and right priorities by inserting it in every possible position
				lrPriorities[lrIndex] = lrPriorities[lrIndex].flatMap((priority) => {
					let res: Unlock[][] = [];
					for (let i = 0; i <= priority.length; i++) {
						const copy = [...priority];
						copy.splice(i, 0, opt);
						res.push(copy);
					}
					return res;
				});
				// 2. filter the priority orders by whether it's compatible with every card path checked so far
				for (
					let priorityIndex = 0;
					priorityIndex < lrPriorities[lrIndex].length;
					priorityIndex++
				) {
					// for every possible priority order,
					const order = lrPriorities[lrIndex][priorityIndex];
					let pass = true;
					for (let pathIndex = 0; pathIndex <= j; pathIndex++) {
						// for every previously checked path
						const checkPath = queue[pathIndex];
						const expectedOpt = getExpectedOpt(setup, day, checkPath, order);
						const actual = lrPathToOpt[lrIndex].get(checkPath);
						if (actual?.ID !== expectedOpt.ID) {
							pass = false;
							break;
						}
					}
					if (!pass) {
						lrPriorities[lrIndex].splice(priorityIndex, 1);
						priorityIndex--;
					}
				}
				// 3. if either of the priority orders is empty, this seed is not compatible with the desired model
				if (!lrPriorities[lrIndex].length) {
					return false;
				}
			}
		}
		queue = newQueue;
	}
	setup.cards = originalSetupCards;
	return true;
}

function getExpectedOpt(
	pack: FindNewUnlocks,
	day: number,
	checkPath: Unlock[],
	order: Unlock[]
) {
	const validCandidates = pack.unlockPack.getCandidates(checkPath, day);
	for (const card of order) {
		// if card is allowed to be shown based on the cards in checkPath, return card
		if (validCandidates.some((a) => a.ID === card.ID)) return card;
	}
	// none of the candidates are valid (should be impossible because I literally added the actual option into the pool)
	throw new Error("no valid options");
}
