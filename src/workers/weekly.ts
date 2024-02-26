import { Unlock } from "../kitchenTypes";
import { IN_GAME_SEED_CHARS } from "../utils/utils";
import { SpeedrunRestaurantSettings, SpeedrunDishes } from "./db/unlocks";
import { FindNewUnlocks } from "./reverse-engineered/cards";
import { FixedSeedContext, Random } from "./reverse-engineered/prng";

function getDayOfYear(t: number = Date.now()) {
	let daysSinceYear = Math.floor(
		(t - Date.UTC(new Date(t).getUTCFullYear())) / (24 * 60 * 60 * 1000)
	);
	return daysSinceYear;
}
function getWeekOfYear(t: number | undefined = Date.now()) {
	let n = getDayOfYear(t) - 1;
	let n2 = (new Date(t).getUTCDay() - (n % 7) - 1 + 14) % 7;
	const res = [new Date(t).getUTCFullYear(), Math.floor((n + n2) / 7) + 1];
	return res;
}
export function getWeeklyConfig() {
	const seed = getWeeklySeed();
	const r = new FixedSeedContext(seed, 8853129);
	let settingIndex = r.useSubcontext(0).random.range(0, 5);
	const setting = SpeedrunRestaurantSettings[settingIndex];
	const dish = r.useSubcontext(1).random.select(SpeedrunDishes);
	return { seed, setting, dish, mapSize: numTilesFromSeed(seed) };
}

export function getAllWeeklyCardPaths() {
	const { seed, setting, dish, mapSize: _ } = getWeeklyConfig();
	let queue = [[setting, dish]];

	const g = new FindNewUnlocks(seed);
	let days = [3, 5, 6, 9, 12];
	while (days.length) {
		const d = days.shift() as number;
		let newQueue: Unlock[][] = [];
		while (queue.length) {
			const startingCards = queue.shift() as Unlock[];
			g.cards = startingCards;
			const opts = g.getUnlockOptions(d);
			opts.forEach((o) => newQueue.push([...startingCards, o]));
		}
		queue = newQueue;
	}
	return queue;
}
function getWeeklySeed() {
	const [year, week] = getWeekOfYear();
	return generateInGameSeed(200 * year + week);
}
function generateInGameSeed(randomSource: number) {
	const r = new Random(randomSource);
	let seed: string = "";
	for (let i = 0; i < 8; i++) {
		seed += IN_GAME_SEED_CHARS[r.range(0, IN_GAME_SEED_CHARS.length)];
	}
	return seed;
}

function numTilesFromSeed(seed: string): [number, number] {
	const fsc = new FixedSeedContext(seed, 5078598);
	const index = fsc.useSubcontext(0).random.range(0, 8);
	switch (index) {
		case 0:
			// one of the duo layouts? might have them flipped...
			return [2, 84];
		case 4:
			return [2, 70];
		case 1:
		case 5:
			return [1, 60];
		case 2:
		case 6:
			return [3, 9 * 13];
		case 3:
		case 7:
			return [4, 16 * 12];
		default:
			throw new Error("Layout index out of bounds");
	}
}
