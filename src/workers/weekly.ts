import { Unlock } from "../kitchenTypes";
import { RestaurantSettings, SpeedrunDishes } from "./db/unlocks";
import { FindNewUnlocks } from "./reverse-engineered/cards";
import { FixedSeedContext, Random } from "./reverse-engineered/prng";

function getWeekOfYear(t: number | undefined = undefined) {
	const today = t ? new Date(t) : new Date();
	const year = today.getUTCFullYear();
	const newYear = t ? new Date(t) : new Date();
	newYear.setUTCMonth(0);
	newYear.setUTCDate(1);
	newYear.setUTCHours(0, 0, 0, 0);
	let weekOffset = (newYear.getUTCDay() + 6) % 7;
	const weeks =
		(weekOffset ? 1 : 0) +
		Math.floor(
			(today.valueOf() - newYear.valueOf() + weekOffset * 24 * 60 * 60 * 1000) /
				(7 * 24 * 60 * 60 * 1000)
		);
	console.log({ today, year, newYear, weekOffset, weeks });
	console.log(`${year}, ${weeks}`);
	// [Info   :MyFirstPlugin] (2023, 52)
	return [year, weeks];
}
export function getWeeklyConfig() {
	const seed = getWeeklySeed();
	const r = new FixedSeedContext(seed, 8853129);
	let settingIndex = r.useSubcontext(0).random.range(0, 5);
	const setting = RestaurantSettings[settingIndex];
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

const IN_GAME_SEED_CHARS = "bdghjmqrtvwxy346789";
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
