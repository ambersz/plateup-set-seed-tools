import { SeedConfig } from "../SeedConfigForm";
import { RigPiece, niceRerolls } from "../utils/niceRerolls";
import Appliances from "./db/appliances";
import { RestaurantSettings } from "./db/unlocks";
import { getRunMoneyInfo } from "./reverse-engineered/run";

// @ts-ignore
var worker = self as Worker;
export type AutoRigWorkerInput = {
	config: SeedConfig;
	tiers: RigPiece[][];
	playerCount: number;
};
export type AutoRigWorkerOutput = string;
function report(message: string) {
	import.meta.env.DEV && console.log(`reporting - ${message.split("\n")[0]}`);
	worker.postMessage(message);
}
const alwaysUseful = [
	"Copying Desk",
	"Blueprint Cabinet",
	"Clipboard Stand",
	"Research Desk",
];
const defaultFinalTier: RigPiece[] = [
	{ goal: "Copying Desk", number: 1, substitutes: [], skipMissing: true },
	{ goal: "Blueprint Cabinet", number: 8, substitutes: [], skipMissing: true },
	{ goal: "Clipboard Stand", number: 1, substitutes: [], skipMissing: true },
	{ goal: "Research Desk", number: 1, substitutes: [], skipMissing: true },
	{
		goal: "Starter Bin",
		number: 999,
		substitutes: Appliances.filter((a) => !alwaysUseful.includes(a.Name)).map(
			(a) => a.Name
		),
		skipMissing: true,
	},
];
worker.onmessage = (e: MessageEvent<AutoRigWorkerInput>) => {
	let { config, tiers, playerCount } = e.data;
	tiers = tiers.filter((a) => a.length);
	const copyDefaultFinalTier = [...defaultFinalTier];
	const nonTrash = tiers.flatMap((tier) =>
		tier.flatMap((goal) => [goal.goal, ...goal.substitutes])
	);
	const fodder = copyDefaultFinalTier.length - 1;
	copyDefaultFinalTier[fodder].substitutes = copyDefaultFinalTier[
		fodder
	].substitutes.filter((a) => {
		return !nonTrash.some((b) => a === b);
	});
	tiers[tiers.length - 1].push(...copyDefaultFinalTier);
	// tiers.splice(-1, 1, defaultFinalTier);
	const numStarting =
		config.cards.filter((a) =>
			RestaurantSettings.some((b) => b.Name === a.Name)
		).length + 1;
	const startingCards = config.cards.slice(0, numStarting);
	let {
		expectedMoneyByDay,
		expectedBookingDesksByDay,
	}: { expectedMoneyByDay: number[]; expectedBookingDesksByDay: number[] } =
		getRunMoneyInfo(config, numStarting, startingCards, playerCount);

	niceRerolls(
		config.seed,
		startingCards,
		config.cards.slice(numStarting).map((a) => a.Name),
		tiers,
		config.solo,
		expectedMoneyByDay,
		expectedBookingDesksByDay,
		report
	);
};
