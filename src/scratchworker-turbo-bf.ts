// @ts-nocheck
import { DishType } from "./kitchenEnums";
import { Unlock } from "./kitchenTypes";
import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "./workers/db/unlocks";
import { FindNewUnlocks } from "./workers/reverse-engineered/cards";
import { Run } from "./workers/reverse-engineered/run";
import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
console.log("a");
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
let seedHashes: (number | undefined)[] = [];
let size = 0;
// @ts-ignore
const worker = self as Worker;

function checkAndSaveHash(h: number): boolean {
	// const uintHash = Number.parseInt(
	// 	Array.from((h >>> 0).toString(2).padStart(32, "0"))
	// 		.reverse()
	// 		.join(""),
	// 	2
	// ); // reverse the binary
	const uintHash = h >>> 0;
	const bucket = Math.floor(uintHash / 32);
	const shift = uintHash % 32;
	const a = seedHashes[bucket];
	let has = a && (a & (1 << shift)) !== 0;
	if (!has) size++;
	const save = (a ?? 0) | (1 << shift);
	seedHashes[bucket] = save;
	return !!has;
}
console.log("scratchworker2");
// let retestSeeds: string[] = ["az3mcw3m"];
const prevSoloLocalStorages: string[] = [];

// duo
let prevLocalStorages: string[] = [];
console.log({ prevLocalStorages });
// prevLocalStorages = [];
let retestSeeds: string[] = [
	"azo5m58s",
	"azrtmgk2",
	"az8jt64i",
	"azr2qxsq",
	"azfig8y2",
	"azjext4d",
	"az885jm2",
	"azafae8r",
	"aznb292v",
	"azxlxtif",
	"az6eu138",
	"azeo8nwt",
	"az7ucfuy",
	"azatjj6m",
	"azyvrtsb",
	"azh2z8sv",
	"aztc95u6",
	"azzwyvo8",
	"azswz5i2",
	"azs9887b",
	"azhhjpyj",
	"azwkr92m",
	"azf98hkb",
	"azc9w39e",
	"azsrym64",
	"aznv6sfu",
	"az39yy8b",
	"azj2q8qx",
	"az79hyg6",
	"azassup8",
	"azro8vcs",
	"az2qntz6",
	"azso4frg",
	"azywuqmh",
	"azjhu8ex",
	"aztzkfsd",
	"azx1nz2z",
	"azpb7vsy",
	"azwvdpal",
	"azwmonpj",
	"azqi2pza",
	"az7ooci6",
	"azmhuj6r",
	"azc1nfbq",
	"azu9ul8g",
	"azlbutzr",
	"az4obb7v",
	"azgd8ryz",
	"azeto2at",
	"azvom277",
	"azdm341o",
	"azf2mzng",
	"azxiyjgq",
	"azgd6t9o",
	"azru9w99",
	"azgtlv3b",
	"az9jklg5",
	"az8jxdjo",
	"aze9acuw",
	"az3rsmny",
	"az3zdy2i",
	"azfalh64",
	"azmu25dj",
	"azxqrl7b",
	"az1ijfdm",
	"aztsw61k",
	"azf7567x",
	"azpqwsgv",
	"azhumqka",
	"azeff1mb",
	"azhrwv9l",
	"azlra8eb",
	"azxgdpf1",
	"az93k1ng",
	"azeyphj4",
	"az8gikzj",
	"azzadpol",
	"azlt19ei",
	"azmv7544",
	"azpytju7",
	"azkmeh84",
	"azg76phd",
	"azxjp6rm",
	"azfr4g5s",
	"az1loj58",
	"aza2q2un",
	"azql5wql",
	"aze7ussz",
	"azcqrox9",
	"azh3m289",
	"azh5q83m",
	"azxc5b4j",
	"azy8v6jg",
	"az9v6li8",
	"aziblz9y",
	"azkybr7n",
	"azyzajwv",
	"azivynwg",
	"azbpanhd",
	"az91duf2",
	"azgurkhj",
	"azkwrg66",
	"az1nxc7e",
	"az4q4cku",
	"azdltzvm",
	"az5uli12",
	"az3qshuf",
	"azpeb4lh",
	"az32xd9c",
	"aze9wvzv",
	"azgkviic",
	"azdqnyp8",
	"azjes2xe",
	"az2ou4to",
	"az3bb7ff",
	"az2f2fc6",
	"azi6nbbc",
	"az2u9ldc",
	"az5c94gr",
	"azxjm2tm",
	"az8awsjn",
	"az1484yn",
	"az5bqfal",
	"aztfqu3t",
	"azfhujha",
	"aznc963x",
	"az7633bb",
	"azrte18y",
	"aziuavxq",
	"azsk9gqa",
	"azch6xb7",
	"azdgbaya",
	"az9fc69s",
	"azopgnzy",
	"azpisudd",
	"azs119ga",
	"az3lena1",
	"azmb3rn5",
	"azmx1xh7",
	"azfifhwj",
	"azouiq4t",
	"azxy3jx2",
	"azd8rfeg",
	"azqd7jyl",
	"azgazji6",
	"az7puta2",
	"aztcor5c",
	"az9c5ox5",
	"azhla6r3",
	"azxftkck",
	"azxog92q",
	"azzz81jt",
	"az8q5ys5",
	"azujyb3p",
	"aztlimp7",
	"az8xkhkf",
	"azq9gjd5",
	"azj4nu2n",
	"az966jyx",
	"azd62m4t",
	"azf49shm",
	"azh8ivio",
	"azogvdq9",
	"azrbkchi",
	"azcxrgju",
	"azeqznxw",
	"azbrdc3o",
	"azzfsgzn",
	"aze9dx1x",
	"azsp9h62",
	"azztyhi3",
	"az5y2y63",
	"az8wydf5",
	"az4x2qhd",
	"azsgx5zl",
	"azbywu5k",
	"az1j1n3s",
	"azy4ttsb",
	"azywvcl7",
	"azynk6c3",
	"azswkyzc",
	"az5wabmj",
	"azeo68kf",
	"azomdd1i",
	"azr888tb",
	"az98zmhy",
	"azev6tm4",
	"azx2qt1e",
	"azk7wpxj",
	"azp44e6k",
	"azi139fh",
	"az6aeel9",
	"azqwj9ye",
	"azpcyhc1",
	"azmbgida",
	"aze5uq12",
	"az37qj6k",
	"azigizf6",
	"azztsd7h",
	"azd4njpi",
	"az5whweb",
	"azqeagyh",
	"azcosfon",
	"azirdwmj",
	"azxjffac",
	"azz6o8lt",
	"azjv28cp",
	"azmjec57",
	"azsri8gf",
	"az5eb8h9",
	"azb2wvfp",
	"azu325ed",
	"azmp7jzl",
	"az21lpmg",
	"azo96dk3",
	"azu6zhiy",
	"azx74wws",
	"aza3tpza",
	"az9x9qwi",
	"azhuysqq",
	"az9c8bf6",
	"azu9jayz",
	"az5jd4sy",
	"azsghxyh",
	"az7z64dx",
	"azpzodus",
	"azdrjtxf",
	"az9dowjb",
	"azr6j496",
	"azdrpsj3",
	"aza7n1qe",
	"azz7vtgr",
	"azaihsba",
	"azbhc32e",
	"azj4tab6",
	"az5vrzk8",
	"az3g2bpi",
	"azkpyhd9",
	"azoi9fs4",
	"aznc2o67",
	"azkhj4mz",
	"azeerz2p",
	"azpbwefl",
	"azpyj2sd",
	"az43mwab",
	"az5zrx29",
	"azyhdgkh",
	"az68ni7g",
	"azaidxfk",
	"az8zgtyy",
	"az1o6z8p",
	"azurbm8n",
	"azyveg4d",
	"azcjz6c8",
	"azo7tn3r",
	"az68qkmp",
	"az1bcsh9",
	"azli3ms3",
	"azmf7anh",
	"az4583vq",
	"azvpac8g",
	"azembmkq",
	"az3rib4a",
	"azp5xx2y",
	"az13ykvz",
	"azexmtxa",
	"azqhj1on",
	"azkfus17",
	"azf1dlcd",
	"azprck6d",
	"azwvfocb",
	"azmf17fz",
	"azlgs6i3",
	"azgoqtw2",
	"az8ink9g",
	"azhg4wdp",
	"azx2f71x",
	"az1xl7mg",
	"azy6lq3q",
	"azhu1u8l",
	"azacdenh",
	"azr2vmi7",
	"azszse6u",
	"azbo2i1j",
	"az6qrp87",
	"az2x9xnk",
	"azmdhwp8",
	"azfytss9",
	"azoulikg",
	"azv6icpr",
	"azdi1dxb",
	"azujed63",
	"azaqn14r",
	"azria9r6",
	"azbqltkz",
	"azg4rvmd",
	"azcsy3cd",
	"azn4yzf4",
	"az4hzbpo",
	"az14z8a1",
	"az1wqbnp",
	"azwf84zs",
	"az1jgq5h",
	"azl2aajx",
	"az9e69cb",
	"az1z499j",
	"az3enexa",
	"azqmmzoz",
	"aztkqzyj",
	"az7dxjt4",
	"azk4t5g7",
	"azzjqvuq",
	"azloqpya",
	"azlg2ke4",
	"az2sp9vf",
	"azq8g4w3",
	"az6mq91j",
	"azvt4u5x",
	"az44nikl",
	"az849m1u",
	"azhk4zub",
	"az84fm5u",
	"az6poep2",
	"azy6kjly",
	"azgulqz9",
	"azzy4swo",
	"azuo7k9j",
	"aznarlrs",
	"azb9gtti",
	"azp6xhei",
	"az3oc2dk",
	"az43o8s3",
	"azlnycl2",
	"azync7nn",
	"az8n5pfi",
	"az66525l",
	"azxbnwv1",
	"azc9k4sb",
	"azn6n3gf",
	"azjy8j7y",
	"azdo7pjw",
	"azb82281",
	"azywr2xm",
	"azfpsuwh",
	"az922p1d",
	"azcfeeor",
	"azk4zfmh",
	"azgc3u4h",
	"azr4nzq5",
	"az8k453g",
	"azxoackt",
	"azfextje",
	"az4pplms",
	"azojhltr",
	"az4b4w1i",
	"azz44bua",
	"azvqerq1",
	"azt7a3d5",
	"azu5gj71",
	"azdzyjlr",
	"azo1pz4f",
	"azgsxpc4",
	"azzpqxju",
	"az1nwuh3",
	"azgjkgxz",
	"az83qf5x",
	"az36rbh1",
	"azjm4qao",
	"azswuax5",
	"azavkq48",
	"azc3q7sg",
	"azf5mshn",
	"azq7m5gq",
	"az56m1fu",
	"azo6eqsu",
	"azxiue7p",
	"azdl3qie",
	"az7eii65",
	"azdlmchr",
	"az6r5sfu",
	"azhqwdoz",
	"azlglwv9",
	"az7jakst",
	"az62np5b",
	"azvf9ijq",
	"azbgpgzk",
	"azn4mjb2",
	"azswubzq",
	"azpr61za",
	"azwrjm6u",
	"azg69pjl",
	"az6kmqfa",
	"azceeulq",
	"azlz9xyp",
	"azpc56yh",
	"az8rtu2p",
	"azzkump7",
	"az2gtfjb",
	"azgnnw5u",
	"azenctxy",
	"azajudzj",
	"azvgtyha",
	"az5nk7ek",
	"azw1v875",
	"azue8mu3",
	"az8qwayn",
	"azn8ahbs",
	"az3h2m61",
	"azza4dam",
	"azh5ot7z",
	"azpwi8ku",
	"az5thuc5",
	"aznn81iv",
	"azjhckta",
	"aztaohnl",
	"azpxnugq",
	"az7yx6h3",
	"azk7245m",
	"azniwfde",
	"azmxk6tt",
	"az8z9wvn",
	"azr5hbna",
	"az26rrpz",
	"az77ywm2",
	"azjnttct",
	"azqcfxl6",
	"az2f89ct",
	"az2how1f",
	"azi8jrv3",
	"azmiwj2y",
	"azezxle8",
	"azp8n9pd",
	"az5nsa1z",
	"azxszsw3",
	"az5j83za",
	"azwcwa1c",
	"azhirvyy",
	"azvf1nx9",
	"azccyg79",
	"azog3ndj",
	"azyyc88i",
	"azb5gb2c",
	"azr5r3f3",
	"aze2xxik",
	"azopbb3o",
	"az7oncc5",
	"azbfn6nw",
	"az29xzez",
	"azj4hsj6",
	"az4ljmgg",
	"azfindoe",
	"azjgdz9x",
	"azo6nqbz",
	"azz69569",
	"azaxqorf",
	"az9qjwsl",
	"azkg32oo",
	"azmw6llt",
	"az9iofkm",
];

worker.onmessage = (messageEvent: MessageEvent) => {
	console.log("received message");
	const prevLocalStorages: { seed: string }[] = messageEvent.data;
	console.log({ prevLocalStorages });
	// @ts-ignore
	retestSeeds = retestSeeds
		.concat(prevLocalStorages.flatMap((a) => JSON.parse(a).map((a) => a.seed)))
		.sort(() => Math.random() - 0.5);

	{
		const dupeSeeds: { [a: string]: boolean } = {};
		retestSeeds = retestSeeds
			.filter((a) => {
				if (dupeSeeds[a]) return false;
				dupeSeeds[a] = true;
				return true;
			})
			.sort(() => Math.random() - 0.5);
		console.log(JSON.stringify(retestSeeds));
	}
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
		"Large Groups",
	];
	const turbo = RestaurantSettings.filter((a) => a.Name === "Turbo")[0];
	// const cardDays = [3, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // autumn
	const cardDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	const expectedCustsByDay = [
		12.375, 16.2, 21.9375, 25.9875, 30.375, 42.12, 48.195, 54.675, 71.82,
		80.325, 89.3025, 112.86, 124.2, 136.08, 167.0625,
	];
	// "best" case scenario, if we ignore how long it takes to cook everything in the early days
	const minGroupsByDay = [12, 10, 10, 10, 9, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9]; // dumplings, medium, dessert, ayce, starter, large, 1-reductions
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
		{ name: "Dumplings", r: 2 },
		// { name: "Burgers", r: -2 },
		{ name: "Turkey", r: 1 },
		{ name: "Spaghetti", r: 1 },
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
	let bestN = Math.min(5, REQUIRED_CARDS.length);
	let runCount = 0;
	let logThresh = 1;
	out: while (maxRuns--) {
		runCount++;
		if (runCount > logThresh) {
			logThresh *= 2;
			console.log(`Tested ${runCount} seeds so far at ${new Date()}`);
		}
		const seed = randomOrRetestSeed();
		let r = new Run(seed);
		if (r.mapSize < 3) continue; // probably only enough room to even attempt turbo black flowers on trio/quad maps
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
					if (day === 7) {
						if (
							!cards.cards.some(
								(a) =>
									a.Name === "Carrot Soup" ||
									a.Name === "Broccoli Cheese Soup" ||
									a.Name === "Meat Soup"
							)
						)
							continue;
					}
					const newConf = {
						...conf,
						cards: [...cards.cards, o],
					};
					if (newConf.req + cardDays.length - i < bestN)
						// if (newConf.req + cardDays.length - i < REQUIRED_CARDS.length)
						continue; // can't get all the cards I want anyway
					switch (o.DishType) {
						case DishType.Starter:
							// if (!conf.starter) r++;
							newConf.starter = true;
							if (
								!cards.cards.some(
									(a) => a.Name === "Ice Cream" || a.Name === "Cheese Board"
								)
							)
								continue;
							break;
						case DishType.Dessert:
							// if (!conf.dessert) r++;
							newConf.dessert = true;
							break;
						case DishType.Null:
							switch (o.Name) {
								case "All You Can Eat":
									r++;
									break;
								case "Medium Groups":
									newConf.averageGroupSize += 1.5;
									r--;
									break;
								case "Large Groups":
									newConf.averageGroupSize += 2;
									r--;
									break;
								case "Individual Dining":
									continue; // that just increases group count though?
									newConf.averageGroupSize -= 0.5;
									r--;
									break;
								case "Double Helpings":
								case "Leisurely Eating":
									break;
								default:
									if (day !== 5) continue; // I should just focus on max reductions, blank card is not good enough
									r--; // all other customer cards have no reduction
									break;
							}
							break;
						default:
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
							// early on you actually have to feed people, so count customers instead of groups
							newConf.excessGroups +=
								(feedGroups * Math.floor(newConf.averageGroupSize)) / 100;

							newConf.excessGroups += (groups - minGroupsByDay[d]) ** 3;
							// newConf.excessGroups += groups - minGroupsByDay[d];
							// Math.max(0, groups - minGroupsByDay[d]) ** 3;
						}
					}
					if (bestN === REQUIRED_CARDS.length) {
						if (
							// } &&
							newConf.excessGroups > Math.max(0, bestMetric) // 8 is the best you can get without Stuffing and Turkey is really hard to get on Autumn so..... let's include those even though it's not technically optimal-- let it go to 10 for a possible soy sauce on day 3
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
			if (candMetric === 0) debugger;
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
