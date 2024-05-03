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
	playerCount: number;
};
export type AutoRigWorkerOutput = string;
function report(message: string) {
	console.log(`reporting - ${message.split("\n")[0]}`);
	worker.postMessage(message);
}
const defaultFinalTier: RigPiece[] = [
	{ goal: "Copying Desk", number: 1, substitutes: [], skipMissing: true },
	{ goal: "Blueprint Cabinet", number: 8, substitutes: [], skipMissing: true },
	{ goal: "Clipboard Stand", number: 1, substitutes: [], skipMissing: true },
	{
		goal: "Starter Bin",
		number: 999,
		substitutes: [
			"Auto Plater",
			"Dining Table",
			"Sink",
			"Hob",
			"Counter",
			"Bin",
			"Compactor Bin",
			"Composter Bin",
			"Conveyor",
			"Dish Rack",
			"Expanded Bin",
			"Fire Extinguisher",
			"Freezer",
			"Kitchen Floor Protector",
			"Mop",
			"Plates",
			"Pot Stack",
			"Rolling Pin",
			"Sharp Knife",
			"Soaking Sink",
		],
		skipMissing: true,
	},
];
worker.onmessage = function (e: MessageEvent<AutoRigWorkerInput>) {
	let { config, tiers, playerCount } = e.data;
	tiers = tiers.filter((a) => a.length);
	const copyDefaultFinalTier = [...defaultFinalTier];
	const nonTrash = tiers.flatMap((tier) =>
		tier.flatMap((goal) => [goal.goal, ...goal.substitutes])
	);
	copyDefaultFinalTier[3].substitutes =
		copyDefaultFinalTier[3].substitutes.filter((a) => {
			return !nonTrash.some((b) => a === b);
		});
	tiers[tiers.length - 1].push(...copyDefaultFinalTier);
	// tiers.splice(-1, 1, defaultFinalTier);
	const numStarting =
		config.cards.filter((a) =>
			RestaurantSettings.some((b) => b.Name === a.Name)
		).length + 1;
	const startingCards = config.cards.slice(0, numStarting);
	if (config.blueprintCount === 7) {
		startingCards.push(RestaurantSettings.filter((a) => a.Name === "Turbo")[0]);
	}
	let expectedMoneyByDay: number[] = [];
	const duringRunCards = config.cards.slice(numStarting);
	console.log({ startingCards, duringRunCards });
	let run = new Run(config.seed, startingCards, duringRunCards);
	run.playerCount = playerCount;
	let cumulative = run.guessMoney(0);
	console.log({ cumulative });
	for (let i = 1; i <= 15; i++) {
		cumulative += run.guessMoney(i);
		expectedMoneyByDay.push(cumulative);
	}
	console.log({ expectedMoneyByDay });

	niceRerolls(
		config.seed,
		startingCards,
		config.cards.slice(numStarting).map((a) => a.Name),
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
