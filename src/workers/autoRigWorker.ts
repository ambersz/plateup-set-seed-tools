import { Unlock } from "../kitchenTypes";
import { RigPiece, niceRerolls } from "../utils/niceRerolls";
import { Appliance } from "./db/appliances";
import { RestaurantSettings } from "./db/unlocks";
import { Run } from "./reverse-engineered/run";
import { RerollConfig } from "./reverse-engineered/shop";

// @ts-ignore
var worker = self as Worker;
export type AutoRigWorkerInput = {
	config: SeedConfig;
	tiers: RigPiece[][];
};
export type AutoRigWorkerOutput = string;
function report(message: string) {
	console.log(`reporting - ${message}`);
	worker.postMessage(message);
}
const defaultFinalTier: RigPiece[] = [
	{ goal: "Copying Desk", number: 1, substitutes: [] },
	{ goal: "Blueprint Cabinet", number: 8, substitutes: [] },
	{ goal: "Clipboard Stand", number: 1, substitutes: [] },
];
worker.onmessage = function (e: MessageEvent<AutoRigWorkerInput>) {
	const { config, tiers } = e.data;
	tiers.splice(-1, 1, defaultFinalTier);
	const startingCards = [config.cards[0]];
	if (config.blueprintCount === 7) {
		startingCards.push(RestaurantSettings.filter((a) => a.Name === "Turbo")[0]);
	}
	let expectedMoneyByDay: number[] = [];
	let run = new Run(config.seed, startingCards, config.cards.slice(1));
	for (let i = 1; i <= 15; i++) {
		expectedMoneyByDay.push(run.guessMoney(i));
	}
	console.log({ expectedMoneyByDay });

	niceRerolls(
		config.seed,
		startingCards,
		config.cards.slice(1).map((a) => a.Name),
		tiers,
		config.solo,
		expectedMoneyByDay,
		report
	);
};
export interface SeedConfig {
	seed: string;
	initialRerollConfig: RerollConfig[];
	day: number;
	blueprintCount: number;
	baseUpgradeChance: number;
	solo: boolean;
	appliances: Appliance[];
	cards: Unlock[];
	searchDepth: number;
	simpleBPSettings?: boolean | "insideOnly" | "noSwitching" | "full";
}
