// @ts-nocheck
import { DishType } from "../kitchenEnums";
import { Unlock } from "../kitchenTypes";
import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "../workers/db/unlocks";
import { Appliance } from "../workers/db/appliances";
import { FindNewUnlocks } from "../workers/reverse-engineered/cards";
import { hash } from "../workers/reverse-engineered/prng";
import { Run } from "../workers/reverse-engineered/run";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
console.log("a");
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
let seedHashes: (number | undefined)[] = [];
let size = 0;
// @ts-ignore
const worker = self as Worker;
console.log("scratchworker2");
// let retestSeeds: string[] = ["az3mcw3m"];
const prevSoloLocalStorages: string[] = [];

// duo
let prevLocalStorages: string[] = [];
console.log({ prevLocalStorages });
// prevLocalStorages = [];
let retestSeeds: string[] = [
	"azv5yzbo",
	"azrnld4q",
	"azavjy5r",
	"az2xjecb",
	"azb3yip7",
	"azxdmpog",
	"azft9fl4",
	"az6iivhs",
	"azpzwhay",
	"azho2yzo",
	"azozsbjh",
	"azl1x6jn",
	"azjqqzyy",
	"azppx3eo",
	"azzytkfa",
	"az9r5in3",
	"aziw1odh",
	"azmwt14t",
	"azmcdiz5",
	"azgj2wyv",
	"azgzyom8",
	"az2adxae",
	"az9kfngj",
	"azu4wpwx",
	"az6x8u8z",
	"az675efr",
	"azeqn9sd",
	"azsls4hm",
	"azbarx9n",
	"azwrm87s",
	"aznanvzq",
	"azvjs3xv",
	"az9b57qc",
	"azelkbp1",
	"azmwe6zi",
	"azf2splo",
	"azer4jrv",
	"azuzmhbe",
	"azb9isnn",
	"azh5muez",
	"azm4lk33",
	"azixrkob",
	"azmeiob6",
	"azg6pf8l",
	"azmupf6h",
	"aza1lwdy",
	"aza1lwdy",
	"azm3rf6h",
	"azcvapia",
	"az9cx7g6",
	"aza1lwdy",
	"azasjwdy",
	"azi1gt1v",
	"az4al7df",
	"azpsxysc",
	"azh1pqyc",
]
	.concat([
		"az92f4vn",
		"azsxfvwt",
		"azcfv9zq",
		"az5it2lv",
		"az3ld8i3",
		"azv5yzbo",
		"azrnld4q",
		"azavjy5r",
		"az2xjecb",
		"azb3yip7",
		"azxdmpog",
		"azft9fl4",
		"az6iivhs",
		"azpzwhay",
		"azho2yzo",
		"azozsbjh",
		"azl1x6jn",
		"azjqqzyy",
		"azppx3eo",
		"azzytkfa",
		"az9r5in3",
		"aziw1odh",
		"azmwt14t",
		"azmcdiz5",
		"azgj2wyv",
		"azgzyom8",
		"az2adxae",
		"az9kfngj",
		"azu4wpwx",
		"az6x8u8z",
		"az675efr",
		"azeqn9sd",
		"azsls4hm",
		"azbarx9n",
		"azwrm87s",
		"aznanvzq",
		"azvjs3xv",
		"az9b57qc",
		"azelkbp1",
		"azmwe6zi",
		"azf2splo",
		"azer4jrv",
		"azuzmhbe",
		"azb9isnn",
		"azh5muez",
		"azm4lk33",
		"azixrkob",
		"azmeiob6",
		"azg6pf8l",
		"azmupf6h",
		"aza1lwdy",
		"aza1lwdy",
		"azm3rf6h",
		"azcvapia",
		"az9cx7g6",
		"aza1lwdy",
		"azasjwdy",
		"azaofin5",
		"azluphle",
		"azaofin5",
		"az3hianp",
	])
	.concat([
		"azpsxysc",
		"azft9fl4",
		"azgj2wyv",
		"azrnld4q",
		"azgzyom8",
		"az6x8u8z",
		"az2adxae",
		"azho2yzo",
		"azmwt14t",
		"azeqn9sd",
		"az2xjecb",
		"azavjy5r",
		"az4al7df",
		"azi1gt1v",
		"azu4wpwx",
		"azpzwhay",
		"azv5yzbo",
		"azozsbjh",
		"az3hianp",
		"azm3rf6h",
		"az9cx7g6",
		"azcvapia",
		"aza1lwdy",
		"azluphle",
		"azg6pf8l",
		"azaofin5",
		"azcfv9zq",
		"azsxfvwt",
		"az92f4vn",
		"azro2eh8",
		"aze2hfhm",
		"azgw3a23",
		"az9cxye6",
		"az3lhzi7",
	]);
const dedupeRetestSeeds = (prevLocalStorages: { seed: string }[]) => {
	retestSeeds = retestSeeds
		.concat(prevLocalStorages.flatMap((a) => JSON.parse(a).map((a) => a.seed)))
		.sort(() => Math.random() - 0.5);

	{
		const dupeSeeds: { [a: string]: boolean } = {};
		retestSeeds = retestSeeds
			.filter((seed) => {
				let a = hash(seed);
				if (dupeSeeds[a]) return false;
				dupeSeeds[a] = true;
				return true;
			})
			.sort(() => Math.random() - 0.5);
		console.log(JSON.stringify(retestSeeds));
	}
};
dedupeRetestSeeds([]);

worker.onmessage = (messageEvent: MessageEvent) => {
	console.log("received message");
	const prevLocalStorages: { seed: string }[] = messageEvent.data;
	console.log({ prevLocalStorages });
	// @ts-ignore
	dedupeRetestSeeds(prevLocalStorages);
};

function randomOrRetestSeed(): string {
	if (retestSeeds.length) return retestSeeds.shift() as string;
	return randomAZSeed();
}
let sent = 1;
type QueueType = {
	excessGroups: number;
	starter: boolean;
	dessert: boolean;
	cards: Unlock[];
	reduction: number;
	req: number;
	averageGroupSize: number;
}[];
const spawnConfigs: RerollConfig[][] = [
	[{ spawnInside: true, blueprintCount: 5 }],
	[{ spawnInside: false, playerInside: true, blueprintCount: 5 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 5 }],
];
const soloRerollConfigs: RerollConfig[][] = [
	[{ spawnInside: true, blueprintCount: 3 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 3 }],
	[{ spawnInside: true, blueprintCount: 4 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 4 }],
	[{ spawnInside: true, blueprintCount: 5 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 5 }],
	[{ spawnInside: true, blueprintCount: 6 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 6 }],
	[{ spawnInside: true, blueprintCount: 7 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 7 }],
];
const finalRerollConfig: RerollConfig = {
	spawnInside: true,
	blueprintCount: 6,
};
{
	// const CUSTOMER_INCREASING_CARDS = [
	// 	"Burgers",
	// 	// "Hot Dogs",
	// 	// "Breakfast",
	// 	"Steak",
	// 	"Salad",
	// 	"Pizza",
	// 	"Black Coffee",
	// ];
	const CUSTOMER_INCREASING_CARDS = {
		Burgers: -2,
		"Hot Dogs": -1,
		Breakfast: 0,
		Steak: 0,
		Salad: -1,
		Pizza: 0,
		"Black Coffee": -2,
		Advertising: -1, // not really, but let's pretend
		"Closing Time?": -1,
	};
	const DOUBLE_REDUCTION_CARDS = [
		"Dumplings",
		"Turkey - Stuffing",
		"Apple Salad",
		"Potato Salad",
	];
	const REQUIRED_CARDS: string[] = [
		// "Fish",
		// "Pies",
		// "Stir Fry",
		// "Breakfast",
		// "Hot Dogs",
		// "Dumplings",
		// "Turkey - Stuffing",
		// "Turkey",
		// "Medium Groups",
		// "Large Groups",
		"Bamboo",
		"Broccoli",
		"Chips",
		"Corn on the Cob",
		"Mashed Potato",
		"Onion Rings",
		"Roast Potato",
		"Instant Service",
		"Ice Cream",
		"All You Can Eat",
		"Affordable",
	];
	const turbo = RestaurantSettings.filter((a) => a.Name === "Turbo")[0];
	// const cardDays = [3, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // autumn
	const cardDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	const expectedCustsByDay = [
		6.6, 6.912, 9.36, 11.088, 12.96, 17.9712, 20.5632, 23.328, 30.6432, 34.272,
		38.1024, 48.1536, 52.992, 58.0608, 71.28,
	];
	// "best" case scenario, if we ignore how long it takes to cook everything in the early days
	const minGroupsByDay = [7, 7, 7, 7, 7, 11, 8, 8, 11, 11, 8, 12, 12, 13, 14]; // ice cream, ayce, all sides
	const averageExcessGroupsByCardDay: number[] = [];
	const dataPointsPerCardDay: number[] = cardDays.map(() => 0);
	let maxRuns = Infinity;
	const cards = new FindNewUnlocks("");
	const shop = new Shop("");
	shop.addCard(turbo);
	cards.addCard(turbo);
	const lastDay = Math.min(30, cardDays.at(-1)!);
	const defaultStartingCards: QueueType = [
		// { name: "Steak", r: 0 },
		// { name: "Salad", r: -1 },
		// { name: "Pizza", r: 0 },
		// { name: "Dumplings", r: 2 },
		// { name: "Burgers", r: -2 },
		{ name: "Turkey", r: 1 },
		// { name: "Spaghetti", r: 1 },
	].map((b): QueueType[0] => ({
		req: REQUIRED_CARDS.includes(b.name) ? 1 : 0,
		starter: false,
		dessert: false,
		reduction: b.r,
		excessGroups:
			expectedCustsByDay
				.slice(0, 3)
				.map(
					(estGroups, i) =>
						Math.ceil(estGroups * 0.85 ** b.r) - minGroupsByDay[i]
				)
				.reduce((a, b) => a + b, 0) * 0,
		cards: [turbo, StartingDishes.filter((a) => a.Name === b.name)[0]],
		averageGroupSize: 1.5,
	}));
	// let bestMetric = REQUIRED_CARDS.length - 2;
	let bestMetric = Infinity;
	let bestN = Math.min(11, REQUIRED_CARDS.length);
	let runCount = 0;
	let logThresh = 1;
	out: while (retestSeeds.length) {
		// only use this to find optimal loadout, not for searching through new seeds
		runCount++;
		if (runCount > logThresh) {
			logThresh *= 2;
			console.log(`Tested ${runCount} seeds so far at ${new Date()}`);
		}
		const seed = randomOrRetestSeed();
		let r = new Run(seed);
		if (r.mapSize !== 1) continue; // solo maps only
		cards.seed = seed;
		shop.seed = seed;

		let queue: QueueType = [...defaultStartingCards];
		// goal is to get all the mains that are unlocked later, plus maximum reductions
		// fish, pie, stir fry ; breakfast, hot dogs
		// try all card paths on a seed, really helpful if you find a good card early, you should try both decor instead of randomly doing one and giving up on the seed once you don't find what you want
		// will the queue balloon too much if I allow anything...?
		let prevDesks = 0;
		if (false)
			for (const day of [6, 7]) {
				const goalDesks = 2;
				// I want 2 desks in the rerolls, ideally 1 discount to buy immediately, and 1 discount/copy to research and discount for tomorrow
				let foundDesks = 0;
				let spawnDesks = shop
					.getAppliances(spawnConfigs[0], day)
					.filter((a) => a.Name !== "Research Desk")
					.filter((a) => a.Name.includes("Desk")).length;
				rerolls: for (const conf of spawnConfigs) {
					let rerollOneDesks = shop
						.getAppliances([...conf, finalRerollConfig], day)
						.filter((a) => a.Name !== "Research Desk")
						.filter((a) => a.Name.includes("Desk")).length;
					foundDesks = Math.max(
						spawnDesks + rerollOneDesks + prevDesks,
						foundDesks
					);
					if (foundDesks >= goalDesks) {
						break rerolls;
					}
					for (const r of soloRerollConfigs) {
						let rerollTwoDesks = shop
							.getAppliances([...conf, ...r, finalRerollConfig], day)
							.filter((a) => a.Name.includes("Desk")).length;
						// foundDesks = Math.max(
						// 	spawnDesks + rerollOneDesks + rerollTwoDesks,
						// 	foundDesks + prevDesks
						// );
						if (spawnDesks + rerollOneDesks + rerollTwoDesks >= goalDesks) {
							foundDesks = goalDesks;
							break rerolls;
						}
					}
				}
				prevDesks = foundDesks;
				if (foundDesks < goalDesks) continue out;
			}
		for (let i = 0; i < cardDays.length; i++) {
			const day = cardDays[i];

			const newQueue: QueueType = [];
			const checked: { [key: string]: number[] } = {};
			while (queue.length) {
				const conf = queue.pop()!;
				cards.cards = conf?.cards ?? [];
				const options = cards.getUnlockOptions(day);
				for (const o of options) {
					let r = day === 5 || day === 15 ? 0 : 1; // no reduction from theme and franchise cards
					const newConf = {
						...conf,
						cards: [...cards.cards, o],
					};
					if (newConf.req + cardDays.length - i < bestN)
						// if (newConf.req + cardDays.length - i < REQUIRED_CARDS.length)
						continue; // can't get all the cards I want anyway
					switch (o.DishType) {
						case DishType.Starter:
							if (o.Name !== "Christmas Crackers") continue;
							if (
								!conf.cards.some((a) => a.Name === "Ice Cream") ||
								!conf.cards.some((a) => a.Name === "Instant Service")
							)
								continue;
							newConf.starter = true;
							if (!newConf.dessert) continue; // dessert before starter
							break;
						case DishType.Dessert:
							// if (!conf.dessert) r++;
							if (o.Name !== "Ice Cream") continue;
							newConf.dessert = true;
							break;
						case DishType.Null:
							switch (o.Name) {
								case "All You Can Eat":
									r++;
									break;
								case "Medium Groups":
									continue;
									newConf.averageGroupSize += 1.5;
									r--;
									break;
								case "Large Groups":
									continue;
									newConf.averageGroupSize += 2;
									r--;
									break;
								case "Individual Dining":
									newConf.averageGroupSize -= 0.5;
									r--;
									break;
								case "Leisurely Eating":
									continue;
								case "Double Helpings":
									r -= 1.26; // with 3 courses, almost guaranteed 4th course
									break;
								case "Instant Service":
									r += 0.5;
									// r -= 0.5; // not reaaaaally a reduction, but I want the searcher to prioritize getting it earlier, so let's count it as half a reduction
									break;
								case "Sedate Atmosphere":
									continue;
									// r -= 1.5 // walking slower in outside service
									break;
								default:
									r--; // all other customer cards have no reduction
									break;
							}
							break;
						case DishType.Side:
							// ok because metal tables
							break;
						default:
							// console.log(`quitting on ${o.Name}`);
							continue; // not a side or reasonable dessert/starter/purple card, give up
							break;
					}
					if (DOUBLE_REDUCTION_CARDS.includes(o.Name)) r++;
					if (REQUIRED_CARDS.includes(o.Name)) {
						newConf.req++;
					}
					// @ts-ignore
					const m = CUSTOMER_INCREASING_CARDS[o.Name];
					if (m !== undefined) {
						r = m;
						if (conf.req === newConf.req) continue; // not breakfast or hot dogs, just abandon now
					}
					newConf.reduction += r;
					let courseReduction =
						1 + (newConf.starter ? 0.25 : 0) + (newConf.dessert ? 0.25 : 0);
					const D = Math.min(30, cardDays[i + 1] ?? 0);
					if (true) {
						// if (day > 18 - 1) {
						// if (day >= 9) {
						// don't care as much about early reductions, since I'll be cooking and it depends a lot on difficult of the dishes-- after day 9-ish I should be using flower pots much more and the number of groups is directly related to how long I spend rerolling
						for (let d = day; d < D; d++) {
							if (newConf.req === REQUIRED_CARDS.length && d === 29) continue; // don't need to do OT15 if completed all achievements already

							const goalCustomer =
								(expectedCustsByDay[d] * 0.85 ** newConf.reduction) /
								courseReduction;
							const normalGroups = Math.ceil(
								goalCustomer / newConf.averageGroupSize
							);
							const rushGroups = Math.ceil(goalCustomer * 0.15) * 3;
							const groups = normalGroups + rushGroups;
							// if (groups < minGroupsByDay[d]) debugger;
							const feedGroups = Math.max(0, groups - (d * (d - 1)) / 2 / 10);
							// // early on you actually have to feed people, so count customers instead of groups
							// newConf.excessGroups +=
							// 	(feedGroups * Math.floor(newConf.averageGroupSize)) / 100;

							newConf.excessGroups += groups - minGroupsByDay[d];
							// newConf.excessGroups += groups - minGroupsByDay[d];
							// Math.max(0, groups - minGroupsByDay[d]) ** 3;
						}
					}
					if (bestN === REQUIRED_CARDS.length) {
						if (
							// } &&
							newConf.excessGroups > Math.max(0, bestMetric + 1) // 8 is the best you can get without Stuffing and Turkey is really hard to get on Autumn so..... let's include those even though it's not technically optimal-- let it go to 10 for a possible soy sauce on day 3
						)
							continue; // even if I get double reductions for the rest of the run I wouldn't be able to catch up
						if (false) {
							if (averageExcessGroupsByCardDay[i] === undefined) {
								averageExcessGroupsByCardDay[i] = 0;
							}
							averageExcessGroupsByCardDay[i] += newConf.excessGroups;
							dataPointsPerCardDay[i]++;
							const average =
								averageExcessGroupsByCardDay[i] / dataPointsPerCardDay[i];
							if (
								dataPointsPerCardDay[i] > 100 &&
								day !== 5 &&
								day !== 15 &&
								newConf.excessGroups > average + 10
							) {
								// debugger;
								continue;
							}
						}
					}

					if (true) {
						// need to do this a little more.... smartly? if I want to not throw away a bunch of seeds because the first time I saw a particular card path I got the smaller reductions first, and then threw away the path with better reductions for being redundant, and then threw away the path with worse reductions because it couldn't match up with my goals lol
						const key = [...cards.cards, o]
							.map((a) => a.Name)
							.sort()
							.join(",");
						if (!checked[key]) checked[key] = [];
						checked[key].push(newQueue.length);
					}
					newQueue.push(newConf);
				}
			}
			// newQueue.sort((a, b) => a.metric - b.metric);
			// newQueue.sort((a, b) => a.req - b.req);
			{
				// remove suboptimal path duplicates
				const newNewQueue = [];
				const classes = Object.values(checked);
				for (const indices of classes) {
					if (indices.length === 1) {
						// no dupes
						newNewQueue.push(newQueue[indices[0]]);
						continue;
					}
					let leastExcessGroups = Infinity;
					let chosenIndex = -1;
					for (const i of indices) {
						if (newQueue[i].excessGroups < leastExcessGroups) {
							chosenIndex = i;
							leastExcessGroups = newQueue[i].excessGroups;
						}
					}
					if (chosenIndex === -1) throw new Error();
					if (chosenIndex > newQueue.length - 1) throw new Error();
					newNewQueue.push(newQueue[chosenIndex]);
				}
				queue = newNewQueue;
			}
			// queue = newQueue;
			// queue = newQueue.slice(Math.floor(newQueue.length / 3));
		}
		queue = queue.filter((p) => p.req >= bestN);
		let candBestN = Math.max(...queue.map((a) => a.req));
		queue = queue.filter((a) => a.req === candBestN);
		queue.sort((a, b) => a.excessGroups - b.excessGroups);
		if (queue.length) {
			const candMetric = queue[0].excessGroups!;
			// if (candMetric === 0) debugger;
			// debugger;
			{
				if (candBestN > bestN || candMetric <= bestMetric) {
					bestMetric = candMetric;
					bestN = candBestN;
				}
				const res = {
					seed,
					b: queue[0].cards.map((a) => a.Name).join(","),
					n: queue.length,
					bestN,
					candMetric,
					bestMetric,
				};
				if (true && queue.length > 1 && queue.length < 5)
					// @ts-ignore
					res.paths = queue.map((a) => a.cards.map((a) => a.Name).join(","));
				postMessage(res);
			}
		}
	}
	console.log("done!");
}

function randomAZSeed() {
	let seed = "";
	while (seed.length < 6) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
	return "az" + seed;
	if (Math.random() < 0.5) return "az" + seed;
	return seed + "az";
}

function randomSeed(min: number, max: number) {
	let p = [];
	for (let i = 0; i <= max - min; i++) {
		p.push(chars.length ** i);
	}
	let r = Math.floor(Math.random() * p.reduce((a, b) => a + b));
	let d = 0;
	// let g = p.shift() ?? Infinity;
	while (r > 0) {
		r -= p.shift() ?? Infinity;
		// g = p.shift() ?? Infinity;
		d++;
	}
	const length = d + min;
	let seed = "";
	while (seed.length < length) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
	return seed;
}
