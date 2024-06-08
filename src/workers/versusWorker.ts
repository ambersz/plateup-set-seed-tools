import { FindNewUnlocks } from "./reverse-engineered/cards";
import { Unlock } from "../kitchenTypes";
import { randomInGameSeed } from "../utils/utils";
import { LayoutProfileName, Run } from "./reverse-engineered/run";
const DAYS = [3, 5, 6, 9, 12];

const worker = self as unknown as Worker;
export interface RequestFormat {
	type: "strict" | "flex";
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
			debugger;
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
