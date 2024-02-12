// @ts-nocheck
import { render, FunctionComponent, VNode } from "preact";
import { useEffect, useState } from "preact/compat";
import "./index.css";
import { hash } from "./workers/reverse-engineered/prng";
import { usePersistentState } from "./hooks/usePersistentState";
import { Run } from "./workers/reverse-engineered/run";
import { randomAZSeed } from "./utils/utils";
import { Shop } from "./workers/reverse-engineered/shop";
import { FindNewUnlocks } from "./workers/reverse-engineered/cards";
import { Unlocks } from "./workers/db/unlocks";
import { sowpods } from "./sowpods";
let w: Worker | undefined = undefined;
type FlowerInfo = number[][];
let flowerCache: { [key: string]: [number, FlowerInfo] } = {};
const defaultFlowerDays = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14];
const Scratch = () => {
	const [result, setResult] = usePersistentState<any[]>([], "SCRATCH_RESULTS");
	useEffect(() => {
		if (true) {
			return;
			if (w === undefined) {
				w = new Worker(
					// new URL("./workers/seedSearchWorker.ts", import.meta.url),
					new URL("./scratchworker2.ts", import.meta.url),
					{
						type: "module",
					}
				);
			}
			w.onmessage = (res: { data: any }) => {
				setResult((a) => [...a, res.data]);
			};
		} else {
			setResult(
				[
					11.2, 12, 222,
					// , 18, 19, 22, 23, 24, 32, 64
				].map((a) => {
					flowerCache = {};
					return blackFlower(true, a);
				})
			);
		}
	}, []);
	return <>{JSON.stringify(result, null, 2)}</>;
};
render(<Scratch />, document.getElementById("app")!);
function blackFlower(
	researchForFreezer: boolean,
	cookTimePerDish: number,
	flowerDays: number[] = defaultFlowerDays,
	dessertDay: number = 6,
	starterDay: number = 3
) {
	// Stir Fry Autumn
	const groups = [2, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1];
	let baseGroupSize = 1.5;
	const moneyPerCustomer = 10;

	const scumTime = 20;
	// goal: minimize average time
	// state: day, money, flower pots
	/**
	 *
	 * @param day
	 * @param money
	 * @param flowerPots
	 * @returns {[number,number[]]} [time to complete run, goal flowers]
	 */
	function helper(
		day: number,
		money: number,
		flowerPots: number,
		freezerFlowers: number,
		cabinetFlowers: number
	): [number, FlowerInfo] {
		if (day > 15) return [0, []];
		const key = `${day},${money},${flowerPots},${freezerFlowers},${cabinetFlowers}`;
		let res = flowerCache[key];
		if (res !== undefined) return res;

		let flowerCost = 60;
		{
			if (!cabinetFlowers && !flowerDays.includes(day)) {
				// need to roll once per flower pot
				flowerCost = Infinity;
				for (let i = 0; i <= flowerPots; i++) {
					flowerCost += 10 * i;
				}
			}
		}
		const groupCount = groups[day - 1];
		const customersPerGroup = baseGroupSize + Math.floor((day - 1) / 3);
		let courses = 1;
		if (day > starterDay) courses++;
		// if (day > dessertDay) courses += 0.25;
		if (day > dessertDay) courses += 0.3;
		let ps = [];
		for (
			let goal = 0;
			goal < Math.min(flowerPots, groupCount + (1 - freezerFlowers));
			goal++
		) {
			ps.push(binom(goal, flowerPots));
		}
		ps.push(1 - ps.reduce((a, b) => a + b, 0));
		let futureTimes: [number, FlowerInfo][] = []; // for each number of black flowers rolled, what's the average time I can get if I play out the day with an optimal strategy?
		for (
			let blackFlowersGrown = 0;
			blackFlowersGrown <=
			Math.min(flowerPots, groupCount + (1 - freezerFlowers));
			blackFlowersGrown++
		) {
			let bestStrat: [number, FlowerInfo] = [Infinity, []];
			let bestCusts = Infinity;
			for (
				let flowersUsed = 0;
				flowersUsed <= Math.min(groupCount, freezerFlowers + blackFlowersGrown);
				flowersUsed++
			) {
				const groupsServed = groupCount - flowersUsed;
				const nextFreezer = Math.min(
					1,
					blackFlowersGrown + freezerFlowers - flowersUsed
				);
				let servingTime =
					customersPerGroup * courses * cookTimePerDish * groupsServed;
				let nextMoney =
					money +
					1.25 * // solo money bonus
						(moneyPerCustomer * groupsServed * customersPerGroup + // serving money
							(2 + Math.floor(day / 2)) * groupCount); // booking desk money
				let nextFlowers = flowerPots;
				let nextCabinet = cabinetFlowers;
				if (nextMoney >= flowerCost) {
					nextFlowers++;
					if (!flowerDays.includes(day) && cabinetFlowers) nextCabinet--;
					nextMoney -= flowerCost;
				} else {
					if (flowerDays.includes(day) && day > 1) nextCabinet = 1;
				}
				let futureTime = helper(
					day + 1,
					nextMoney,
					nextFlowers,
					nextFreezer,
					nextCabinet
				);
				const copyTime: [number, FlowerInfo] = [...futureTime];
				copyTime[0] += servingTime;
				if (copyTime[0] < bestStrat[0]) {
					bestStrat = copyTime;
					bestCusts = groupsServed;
				}
			}
			futureTimes.push([...bestStrat, bestCusts]);
		}

		// at which black flower counts should I be restarting the day?
		let bestStratTime = Infinity;
		let bestMinFlowers = -1;
		let p = 1;
		for (let minFlowers = 0; minFlowers < futureTimes.length; minFlowers++) {
			// if (minFlowers) debugger;
			let rerollTime = ((1 - p) / p) * scumTime;
			for (let i = minFlowers; i < ps.length; i++) {
				rerollTime += (futureTimes[i][0] * ps[i]) / p;
			}
			if (rerollTime <= bestStratTime) {
				bestStratTime = rerollTime;
				bestMinFlowers = minFlowers;
			}
			p -= ps[minFlowers];
		}

		// res = [bestStratTime, [bestMinFlowers, ...futureTimes[bestMinFlowers][1]]];
		// let others = compress(futureTimes.slice(bestMinFlowers).map((a) => a[1]));

		res = [
			bestStratTime,
			[
				Math.max(...futureTimes.slice(bestMinFlowers).map((a) => a[2])),
				...futureTimes[bestMinFlowers][1],
				// bestMinFlowers,
				// flowerPots,
				// others,
			],
		];
		flowerCache[key] = res;
		if (!Number.isFinite(res[0])) debugger;
		return res;
	}

	const r = helper(1, -40 + (researchForFreezer ? -60 : 0), 0, 0, 0);
	console.log({ flowerCache });
	return r;
}

function compress(a: [...number[], number[]][]) {
	if (a.length === 1) {
		while (Array.isArray(a) && a.length <= 1) {
			a = a[0];
		}
		return a;
	}
	if (a[0].length === 0) return [];
	if (a.some((a) => Array.isArray(a[0]))) return a;
	let res = [];
	let prev = null;
	let start = -1;
	for (let i = 0; i < a.length; i++) {
		if (deepFirst(a[i]) === prev) {
		} else {
			if (start > -1) {
				res.push([prev, ...compress(a.slice(start, i).map((a) => a.slice(1)))]);
			}
			start = i;
			prev = deepFirst(a[i]);
		}
	}
	if (start > -1)
		res.push([prev, ...compress(a.slice(start).map((a) => a.slice(1)))]);
	// if (res.length === 1 && Array.isArray(res[0])) return res[0];
	return res;
}
type DeepNumber = number | DeepNumber[];
function deepFirst(n: DeepNumber) {
	if (typeof n === "number") return n;
	return deepFirst(n[0]);
}
function deepEqual(a: DeepNumber, b: DeepNumber) {
	if (!Array.isArray(a) || !Array.isArray(b)) return a === b;
	if (a.length === 0 && b.length === 0) return true;
	// both arrays
	if (!deepEqual(a[0], b[0])) return false;
	return deepEqual(a.slice(1), b.slice(1));
}

function binom(k: number, n: number) {
	let res = 0.1 ** k * 0.9 ** (n - k);
	// n choose k * 0.1 ^ k * 0.9 ^ (n-k)
	for (let i = 1; i <= k; i++) {
		res *= (n - i + 1) / i;
	}
	return res;
}

const checkSeeds = [
	{
		seed: "az51gpw9",
		spawnDays: [9, 11, 13, 14],
		daysLate: 332,
		courses: [9, 3],
		validCardPaths: [
			"Community,Stir Fry,Bread,Formal,Dumplings,Pumpkin Pies,Turkey",
			"Community,Stir Fry,Bread,Formal,Dumplings,Pumpkin Pies,Pumpkin Soup",
			"Community,Stir Fry,Bread,Exclusive,Dumplings,Pumpkin Pies,Turkey",
			"Community,Stir Fry,Bread,Exclusive,Dumplings,Pumpkin Pies,Pumpkin Soup",
		],
	},
	{
		seed: "azxpoqg5",
		spawnDays: [3, 11, 13, 14],
		daysLate: 326,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Apple Pies,Formal,Mandarin Starter,Pumpkin Soup,Dumplings",
		],
	},
	{
		seed: "azvrs3a2",
		spawnDays: [3, 6, 13, 14],
		daysLate: 321,
		courses: [6, 9],

		validCardPaths: [
			"Community,Stir Fry,Dumplings,Exclusive,Cheese Board,Pumpkin Seed,Bamboo Stir Fry",
			"Community,Stir Fry,Dumplings,Exclusive,Cheese Board,Pumpkin Seed,Hot Dogs",
		],
	},
	{
		seed: "azkmc4ba",
		spawnDays: [1, 3, 9, 14],
		daysLate: 313,
		courses: [3, 9],

		validCardPaths: [
			"Community,Stir Fry,Ice Cream,Formal,Onion Rings,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Ice Cream,Formal,Cheese Board,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Ice Cream,Exclusive,Onion Rings,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Ice Cream,Exclusive,Cheese Board,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Pumpkin Seed,Formal,Cheese Board,Stir Fry - Soy Sauce,Dumplings",
			"Community,Stir Fry,Pumpkin Seed,Formal,Cheese Board,Broccoli,Dumplings",
			"Community,Stir Fry,Pumpkin Seed,Exclusive,Cheese Board,Stir Fry - Soy Sauce,Dumplings",
			"Community,Stir Fry,Pumpkin Seed,Exclusive,Cheese Board,Broccoli,Dumplings",
		],
	},
	{
		seed: "azyh5xa9",
		spawnDays: [3, 4, 8, 12, 13, 14],
		daysLate: 121,
		courses: [3, 3],
		validCardPaths: [
			"Community,Stir Fry,Bamboo Stir Fry,Affordable,Cherry Pie,Carrot Soup,Dumplings",
			"Community,Stir Fry,Bamboo Stir Fry,Formal,Cherry Pie,Carrot Soup,Dumplings",
		],
	},
	{
		seed: "azrr9ta5",
		spawnDays: [3, 4, 8, 12, 13],
		daysLate: 218,
		courses: [6, 3],
		validCardPaths: [
			"Community,Stir Fry,Meat Soup,Formal,Apple Pies,Dumplings,Corn on the Cob",
			"Community,Stir Fry,Meat Soup,Formal,Apple Pies,Dumplings,Broccoli Cheese Soup",
			"Community,Stir Fry,Meat Soup,Charming,Apple Pies,Dumplings,Roast Potato",
			"Community,Stir Fry,Meat Soup,Charming,Apple Pies,Dumplings,Broccoli",
		],
	},
	{
		seed: "azy6ghh2",
		spawnDays: [3, 4, 6, 12, 14],
		daysLate: 217,
		courses: [9, 3],
		validCardPaths: [
			"Community,Stir Fry,Broccoli Cheese Soup,Affordable,Roast Potato,Ice Cream,Dumplings",
			"Community,Stir Fry,Broccoli Cheese Soup,Exclusive,Roast Potato,Ice Cream,Dumplings",
		],
	},
	{
		seed: "azuric38",
		spawnDays: [1, 4, 6, 7, 12],
		daysLate: 209,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Ice Cream,Charming,Apple Pies,Mandarin Starter,Dumplings",
		],
	},
	{
		seed: "azefr7gm",
		spawnDays: [4, 6, 7, 9, 13],
		daysLate: 217,
		courses: [6, 9],
		validCardPaths: [
			"Community,Stir Fry,Dumplings,Exclusive,Cheese Board,Bread,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Exclusive,Cheese Board,Bread,Breakfast",
			"Community,Stir Fry,Dumplings,Formal,Cheese Board,Bread,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Formal,Cheese Board,Bread,Breakfast",
		],
	},
	{
		seed: "az72nhoq",
		spawnDays: [2, 6, 7, 13, 14],
		daysLate: 220,
		courses: [6, 3],
		validCardPaths: [
			"Community,Stir Fry,Pumpkin Soup,Charming,Pumpkin Pies,Dumplings,Onion Rings",
			"Community,Stir Fry,Pumpkin Soup,Charming,Pumpkin Pies,Dumplings,Pies",
		],
	},
	{
		seed: "az1lfgax",
		spawnDays: [1, 4, 6, 11, 12],
		daysLate: 213,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cheese Board,Affordable,Onion Rings,Bread,Dumplings",
			"Community,Stir Fry,Cheese Board,Affordable,Steak Stir Fry,Bread,Dumplings",
			"Community,Stir Fry,Cheese Board,Formal,Steak Stir Fry,Bread,Dumplings",
		],
	},
	{
		seed: "azegikh3",
		spawnDays: [1, 2, 6, 9, 12],
		daysLate: 210,
		courses: [6, 3],
		validCardPaths: [
			"Community,Stir Fry,Carrot Soup,Affordable,Cheese Board,Dumplings,Ice Cream",
			"Community,Stir Fry,Carrot Soup,Affordable,Cheese Board,Dumplings,Mandarin Starter",
		],
	},
	{
		seed: "az5x9s4h",
		spawnDays: [6, 7, 8, 9, 12, 13],
		daysLate: 122,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Ice Cream,Affordable,Steak Stir Fry,Carrot Soup,Dumplings",
			"Community,Stir Fry,Tomato Soup,Formal,Burgers,Cherry Pie,Dumplings",
		],
	},
	{
		seed: "azqa3khv",
		spawnDays: [1, 3, 7, 9, 13],
		daysLate: 212,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cherry Pie,Charming,Pizza,Tomato Soup,Dumplings",
		],
	},
	{
		seed: "az32wkme",
		spawnDays: [3, 4, 7, 8, 11],
		daysLate: 211,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Apple Pies,Affordable,Broccoli Cheese Soup,Dumplings,Stir Fry - Soy Sauce",
			"Community,Stir Fry,Apple Pies,Affordable,Broccoli Cheese Soup,Dumplings,Corn on the Cob",
		],
	},
	{
		seed: "azvpcgpj",
		spawnDays: [1, 4, 8, 11, 12],
		daysLate: 215,
		courses: [6, 3],
		validCardPaths: [
			"Community,Stir Fry,Bread,Charming,Cherry Pie,Dumplings,Black Coffee",
			"Community,Stir Fry,Bread,Charming,Cherry Pie,Dumplings,Stir Fry - Soy Sauce",
		],
	},
	{
		seed: "azkwy91o",
		spawnDays: [1, 3, 6, 8, 9],
		daysLate: 206,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cherry Pie,Charming,Fish,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Cherry Pie,Affordable,Hot Dogs,Pumpkin Seed,Dumplings",
		],
	},
	{
		seed: "azgvgyu6",
		spawnDays: [2, 4, 7, 12, 13],
		daysLate: 216,
		courses: [9, 3],
		validCardPaths: [
			"Community,Stir Fry,Pumpkin Seed,Charming,Corn on the Cob,Cheese Board,Dumplings",
		],
	},
	{
		seed: "azclwlhd",
		spawnDays: [3, 6, 7, 8, 13],
		daysLate: 215,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cheese Board,Exclusive,Dumplings,Mandarin Starter,Bread",
			"Community,Stir Fry,Cheese Board,Exclusive,Dumplings,Mandarin Starter,Meat Soup",
		],
	},
	{
		seed: "azysbhbj",
		spawnDays: [2, 6, 8, 11, 14],
		daysLate: 219,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cherry Pie,Charming,Broccoli Cheese Soup,Onion Rings,Dumplings",
			"Community,Stir Fry,Cherry Pie,Exclusive,Bamboo,Pumpkin Seed,Dumplings",
		],
	},
	{
		seed: "azag41pd",
		spawnDays: [1, 6, 9, 11, 14],
		daysLate: 220,
		courses: [9, 6],
		validCardPaths: [
			"Community,Stir Fry,Dumplings,Exclusive,Carrot Soup,Ice Cream,Fish",
			"Community,Stir Fry,Dumplings,Exclusive,Carrot Soup,Ice Cream,Onion Rings",
		],
	},
	{
		seed: "az5ayckl",
		spawnDays: [1, 4, 7, 8, 11],
		daysLate: 210,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Pumpkin Seed,Charming,Cheese Board,Dumplings,Dumpling - Soy Sauce",
			"Community,Stir Fry,Pumpkin Seed,Charming,Cheese Board,Dumplings,Broccoli",
			"Community,Stir Fry,Cherry Pie,Affordable,Dumplings,Meat Soup,Onion Rings",
			"Community,Stir Fry,Cherry Pie,Affordable,Dumplings,Meat Soup,Pumpkin Seed",
			"Community,Stir Fry,Cherry Pie,Formal,Dumplings,Meat Soup,Dumpling - Soy Sauce",
			"Community,Stir Fry,Cherry Pie,Formal,Dumplings,Meat Soup,Pumpkin Seed",
		],
	},
	{
		seed: "az8qdbvm",
		spawnDays: [1, 6, 7, 8, 13, 14],
		daysLate: 117,
		courses: [3, 3],
		validCardPaths: [
			"Community,Stir Fry,Mashed Potato,Charming,Apple Pies,Mandarin Starter,Dumplings",
		],
	},
	{
		seed: "azz6po8l",
		spawnDays: [1, 3, 6, 11, 14],
		daysLate: 214,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Cheese Board,Formal,Meat Soup,Ice Cream,Dumplings",
			"Community,Stir Fry,Cheese Board,Formal,Meat Soup,Pumpkin Pies,Dumplings",
		],
	},
	{
		seed: "azho29zv",
		spawnDays: [1, 7, 8, 9, 12],
		daysLate: 216,
		courses: [6, 3],
		validCardPaths: [
			"Community,Stir Fry,Bread,Charming,Cherry Pie,Dumplings,Bamboo Stir Fry",
			"Community,Stir Fry,Bread,Charming,Cherry Pie,Dumplings,Pumpkin Soup",
		],
	},
	{
		seed: "azih6h2o",
		spawnDays: [3, 4, 7, 8, 11],
		daysLate: 211,
		courses: [9, 6],
		validCardPaths: [
			"Community,Stir Fry,Dumplings,Formal,Tomato Soup,Cherry Pie,Pumpkin Seed",
			"Community,Stir Fry,Dumplings,Formal,Tomato Soup,Cherry Pie,Seaweed",
			"Community,Stir Fry,Dumplings,Exclusive,Tomato Soup,Cherry Pie,Pumpkin Seed",
			"Community,Stir Fry,Dumplings,Exclusive,Tomato Soup,Cherry Pie,Seaweed",
		],
	},
	{
		seed: "azyo7gr7",
		spawnDays: [1, 3, 6, 9, 11],
		daysLate: 209,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cheese Board,Affordable,Hot Dogs,Tomato Soup,Dumplings",
		],
	},
	{
		seed: "azzfr15d",
		spawnDays: [2, 6, 7, 9, 11],
		daysLate: 213,
		courses: [9, 6],
		validCardPaths: [
			"Community,Stir Fry,Dumplings,Exclusive,Tomato Soup,Pumpkin Pies,Carrot Soup",
			"Community,Stir Fry,Dumplings,Exclusive,Tomato Soup,Pumpkin Pies,Turkey",
			"Community,Stir Fry,Dumplings,Exclusive,Carrot Soup,Ice Cream,Pumpkin Soup",
			"Community,Stir Fry,Dumplings,Exclusive,Carrot Soup,Ice Cream,Mushroom Stir Fry",
			"Community,Stir Fry,Dumplings,Affordable,Tomato Soup,Pumpkin Pies,Carrot Soup",
			"Community,Stir Fry,Dumplings,Affordable,Tomato Soup,Pumpkin Pies,Turkey",
			"Community,Stir Fry,Dumplings,Affordable,Carrot Soup,Ice Cream,Pumpkin Soup",
			"Community,Stir Fry,Dumplings,Affordable,Carrot Soup,Ice Cream,Mushroom Stir Fry",
		],
	},
	{
		seed: "azyv1uvu",
		spawnDays: [2, 4, 6, 8, 13],
		daysLate: 211,
		courses: [9, 3],
		validCardPaths: [
			"Community,Stir Fry,Mandarin Starter,Exclusive,Bamboo,Pumpkin Pies,Dumplings",
			"Community,Stir Fry,Mandarin Starter,Affordable,Cherry Pie,Pumpkin Pies,Dumplings",
		],
	},
	{
		seed: "azr7up51",
		spawnDays: [3, 6, 7, 9, 12],
		daysLate: 215,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Cheese Board,Exclusive,Bread,Bamboo Stir Fry,Dumplings",
		],
	},
	{
		seed: "azo4a5kt",
		spawnDays: [2, 3, 4, 6, 7, 9],
		daysLate: 100,
		courses: [9, 3],
		validCardPaths: [
			"Community,Stir Fry,Mandarin Starter,Charming,Dumplings,Apple Pies,Fish",
			"Community,Stir Fry,Mandarin Starter,Charming,Dumplings,Apple Pies,Black Coffee",
		],
	},
	{
		seed: "azmi1i5u",
		spawnDays: [1, 2, 3, 11, 12, 13],
		daysLate: 112,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Apple Pies,Affordable,Mandarin Starter,Chips,Dumplings",
			"Community,Stir Fry,Apple Pies,Affordable,Mandarin Starter,Cheese Board,Dumplings",
		],
	},
	{
		seed: "aztvz4er",
		spawnDays: [4, 6, 7, 11, 13, 14],
		daysLate: 122,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Apple Pies,Charming,Bread,Tomato Soup,Dumplings",
			"Community,Stir Fry,Apple Pies,Charming,Bread,Cherry Pie,Dumplings",
			"Community,Stir Fry,Carrot Soup,Formal,Ice Cream,Pizza,Dumplings",
			"Community,Stir Fry,Carrot Soup,Exclusive,Ice Cream,Pizza,Dumplings",
		],
	},
	{
		seed: "azzoif4d",
		spawnDays: [1, 3, 4, 7, 8, 12, 13],
		daysLate: 3,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cherry Pie,Formal,Pies,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Cherry Pie,Formal,Carrot Soup,Turkey,Dumplings",
			"Community,Stir Fry,Cherry Pie,Exclusive,Pies,Pumpkin Seed,Dumplings",
			"Community,Stir Fry,Cherry Pie,Exclusive,Carrot Soup,Turkey,Dumplings",
		],
	},
	{
		seed: "az3bgqwx",
		spawnDays: [2, 4, 6, 9, 11, 12, 14],
		daysLate: 11,
		courses: [3, 9],
		validCardPaths: [
			"Community,Stir Fry,Cherry Pie,Formal,Dumplings,Pumpkin Soup,Seaweed",
			"Community,Stir Fry,Cherry Pie,Formal,Dumplings,Pumpkin Soup,Onion Rings",
		],
	},
	{
		seed: "azb4whwx",
		spawnDays: [2, 6, 7, 8, 11, 13, 14],
		daysLate: 14,
		courses: [3, 3],
		validCardPaths: [
			"Community,Stir Fry,Stir Fry - Soy Sauce,Formal,Cheese Board,Bread,Dumplings",
			"Community,Stir Fry,Stir Fry - Soy Sauce,Formal,Cheese Board,Carrot Soup,Dumplings",
		],
	},
	{
		seed: "azqgzzd1",
		spawnDays: [2, 3, 4, 6, 7, 13],
		daysLate: 102,
		courses: [9, 6],
		validCardPaths: [
			"Community,Stir Fry,Dumplings,Exclusive,Broccoli Cheese Soup,Cheese Board,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Exclusive,Broccoli Cheese Soup,Cheese Board,Apple Pies",
			"Community,Stir Fry,Dumplings,Exclusive,Meat Soup,Cheese Board,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Exclusive,Meat Soup,Cheese Board,Apple Pies",
			"Community,Stir Fry,Dumplings,Formal,Broccoli Cheese Soup,Cheese Board,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Formal,Broccoli Cheese Soup,Cheese Board,Apple Pies",
			"Community,Stir Fry,Dumplings,Formal,Meat Soup,Cheese Board,Mandarin Starter",
			"Community,Stir Fry,Dumplings,Formal,Meat Soup,Cheese Board,Apple Pies",
		],
	},
	{
		seed: "aztda8av",
		spawnDays: [1, 2, 4, 6, 9, 11],
		daysLate: 102,
		courses: [3, 6],
		validCardPaths: [
			"Community,Stir Fry,Pumpkin Pies,Charming,Mandarin Starter,Bread,Dumplings",
			"Community,Stir Fry,Pumpkin Pies,Charming,Mandarin Starter,Carrot Soup,Dumplings",
		],
	},
];

if (false) {
	const checkRes = checkSeeds
		.map((s) => {
			flowerCache = {};
			const freezerRes = blackFlower(true, 20, s.spawnDays, ...s.courses);
			const freezerTime = freezerRes[0];
			const freezerDecisionTree = flowerCache;
			flowerCache = {};
			const straightTime = blackFlower(false, 20, s.spawnDays, ...s.courses)[0];
			return {
				...s,
				time: Math.min(freezerTime, straightTime),
				// time: freezerTime >= straightTime ? Infinity : freezerTime,
				freezerTime,
				freezerRes,
				freezerDecisionTree,
				straightTime,
			};
		})
		.sort((a, b) => a.time - b.time);
	console.log({ checkRes });
}

function diners() {
	const chars = "aosz";
	let queue = [""];
	let dinersFound = 0;
	while (dinersFound < 32) {
		const newQueue = [];
		while (queue.length) {
			const pre = queue.pop();
			for (const char of chars) {
				const candSeed = pre + char;
				const r = new Run(candSeed);
				if (r.mapSize === 1) {
					dinersFound++;
					console.log(candSeed);
				}
				newQueue.push(candSeed);
			}
		}
		queue = newQueue;
	}
}

const cardDays = [3, 6, 9, 12];
function averageEXP() {
	let i = 20000;
	const c = new FindNewUnlocks("");
	const startingDish = Unlocks.filter((a) => a.Name === "Salad")[0];
	let totalEXP = 0;
	let datapoints = 0;
	let perRun = [0, 0, 0, 0, 0]; // 0,1,2,3,4 cards with 200XP
	let detailed = {}; // key is comma-separated XP values per card
	out: while (i--) {
		const seed = randomAZSeed();
		c.seed = seed;
		c.cards = [startingDish];
		let totalRunXP = 0;
		let xpOrder = [];
		// select right (customer card) for four days, count how many exp on each day
		for (const day of cardDays) {
			const cards = c.getUnlockOptions(day);
			const customerCard = cards[1];
			const recipe = cards[0];
			let chosen = customerCard;
			let xp = 100;
			switch (customerCard.Name) {
				case "Medium Groups":
				case "Victorian Standards":
				case "Large Groups":
				case "Flexible Groups":
					xp = 200;
					break;
				case "Individual Dining":
				case "All You Can Eat":
				case "Advertising":
					chosen = recipe;
					break;
				default:
					break;
					chosen = recipe;
			}
			if (day === 3 && xp !== 200) continue out;
			c.addCard(chosen);
			totalRunXP += xp;
			xpOrder.push(xp);
		}
		const key = xpOrder.join(",");
		if (detailed[key] === undefined) detailed[key] = 0;
		detailed[key]++;
		totalEXP += totalRunXP * 2 + 250 - Math.min(...xpOrder);
		datapoints++;
		const i = (totalRunXP - 400) / 100;
		perRun[i]++;
	}
	console.log({ totalEXP, datapoints, perRun, detailed });
}

function wordNumberSeeds() {
	const tables = { "": 1, "2": 2, "3": 3, "4": 4 };
	let ws = { "": true };
	let cands = {};
	let sowpodCopy = [...sowpods];
	for (let i = 0; i < 2; i++) {
		sowpodCopy = sowpodCopy.filter((a) => a.length <= 7 - 2 * i);
		// max 3 words to stay under 7 letters
		const pres = Object.keys(ws);
		ws = {};
		for (const pre of pres) {
			if (pre.length > 5) continue; // no matter what the next word is it would push this over
			wordLoop: for (const post of sowpodCopy) {
				const w = pre + post;
				// debugger;
				if (w.length > 7) continue;
				if (i === 0) ws[w] = true;
				for (const [t, n] of Object.entries(tables)) {
					const r = new Run(w + t);
					if (r.mapSize !== n) continue wordLoop;
				}
				// console.log(w);
				cands[w] = true;
			}
		}
		console.log(Object.keys(cands).join(","));
	}
}

wordNumberSeeds();
