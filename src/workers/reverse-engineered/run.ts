import { SeedConfig } from "../../SeedConfigForm";
import { DishType } from "../../kitchenEnums";
import { Unlock } from "../../kitchenTypes";
import { InfoByCourse, SimulateCourses } from "../../utils/averageCourses";
import { average } from "../../utils/utils";
import { FixedSeedContext, Random, RestaurantSystemSeed } from "./prng";
// TODO roll Shop and FindNewUnlocks into Run
export type LayoutProfileName =
	| "Diner (1)"
	| "Small (2)"
	| "Medium (2)"
	| "Large (3)"
	| "Huge (4)";

const profileNameToTables = {
	"Diner (1)": 1,
	"Small (2)": 2,
	"Medium (2)": 2,
	"Large (3)": 3,
	"Huge (4)": 4,
};
export class Run {
	seed: string;
	mapSize: LayoutProfileName;
	frontDoor: number;
	startingCards: readonly Unlock[];
	cards: Unlock[];
	playerCount: number;
	turbo: boolean;
	constructor(
		seed: string,
		startingCards: Unlock[] = [],
		cards: Unlock[] = []
	) {
		this.seed = seed;
		this.mapSize = this.getMapSize();
		this.frontDoor = this.getDoorInfo();
		this.startingCards = startingCards;
		this.cards = cards;
		this.playerCount = profileNameToTables[this.mapSize];
		this.turbo = this.startingCards.some((a) => {
			if (a === undefined) {
				console.log({ startingCards });
				debugger;
			}
			return a.Name === "Turbo";
		});
	}

	guessMoney(day: number): number {
		if (day === 0) {
			if (this.turbo) return 30;
			return 0;
		}
		const currentCards = this.getCardsByDay(day);
		const groups = this.getGroupSizes(day);
		let AYCE = false;
		let DH = false;
		let starterCount = 0;
		let starterCosts = [];
		let mainCosts = [];
		let dessertCount = 0;
		let dessertCosts = [];
		let sideCount = 0;
		let sideCosts = [];
		for (const c of currentCards) {
			if (c.Name === "All You Can Eat") AYCE = true;
			if (c.Name === "Double Helpings") {
				DH = true;
			}
			switch (c.DishType) {
				case DishType.Dessert:
					dessertCount++;
					c.DishValue && dessertCosts.push(c.DishValue);
					break;
				case DishType.Starter:
					c.DishValue && starterCosts.push(c.DishValue);
					starterCount++;
					break;
				case DishType.Side:
					c.DishValue && sideCosts.push(c.DishValue);
					sideCount++;
					break;
				case DishType.Main:
				case DishType.Base:
					if (c.Name === "Tacos") {
						mainCosts.push(2);
						mainCosts.push(3);
					} else {
						c.DishValue && mainCosts.push(c.DishValue);
					}
			}
		}
		let doubleOrderChance = DH ? 0.5 : AYCE ? 0.25 : 0;
		let costs = [0, 0, 0, 0]; // starter, main, dessert, side
		costs[0] = average(starterCosts);
		costs[1] = average(mainCosts);
		costs[2] = average(dessertCosts);
		costs[3] = average(sideCosts);
		if (DH) {
			// secret double helpings bonus money, doesn't apply to sides
			for (let i = 0; i < 3; i++) {
				if (costs[i]) {
					costs[i] += 3;
				}
			}
		}
		const [_, orders] = InfoByCourse({
			starters: starterCount,
			main: !!costs[1],
			doubleOrderChance,
			desserts: dessertCount,
			sides: sideCount,
			groupSizes: groups,
		});
		let foodMoney = 0;
		for (let i = 0; i < orders.length; i++) {
			foodMoney += orders[i] * costs[i];
		}

		const bonusMoney = getPlayerCountMoneyBonus(this.playerCount);
		const bookingDeskTimes = this.getBookingDeskCount(day);
		const bookingDeskMoney = this.getBookingDeskMoney(day);
		return bonusMoney * (foodMoney + bookingDeskTimes * bookingDeskMoney);
	}

	simulateMoney(day: number): number {
		if (day === 0) {
			if (this.turbo) return 30;
			return 0;
		}
		const currentCards = this.getCardsByDay(day);
		const groups = this.getGroupSizes(day);
		let AYCE = false;
		let DH = false;
		let costs: [number[], number[], number[], number[]] = [[], [], [], []];
		for (const c of currentCards) {
			if (c.Name === "All You Can Eat") AYCE = true;
			if (c.Name === "Double Helpings") {
				DH = true;
			}
			switch (c.DishType) {
				case DishType.Dessert:
					c.DishValue && costs[2].push(c.DishValue);
					break;
				case DishType.Starter:
					c.DishValue && costs[0].push(c.DishValue);
					break;
				case DishType.Side:
					c.DishValue && costs[3].push(c.DishValue);
					break;
				case DishType.Main:
				case DishType.Base:
					if (c.Name === "Tacos") {
						// TODO AZ: not technically correct if you get more mains since the sim will order this twice as much as expected
						costs[1].push(2);
						costs[1].push(3);
					} else {
						c.DishValue && costs[1].push(c.DishValue);
					}
			}
		}
		let doubleOrderChance = DH ? 0.5 : AYCE ? 0.25 : 0;
		let dishBonusMoney = 0;
		if (DH) dishBonusMoney += 3;
		const [_, orders] = SimulateCourses({
			starters: costs[0].length,
			main: !!costs[1].length,
			doubleOrderChance,
			desserts: costs[2].length,
			sides: costs[3].length,
			groupSizes: groups,
		});
		let foodMoney = 0;
		for (let i = 0; i < orders.length; i++) {
			let count = orders[i];
			while (count--) {
				if (i < 3) {
					// starters, mains, desserts get bonus dish money from double helpings
					foodMoney += dishBonusMoney;
				}
				foodMoney += costs[i][Math.floor(Math.random() * costs[i].length)];
			}
		}

		const bonusMoney = getPlayerCountMoneyBonus(this.playerCount);
		const bookingDeskTimes = this.getBookingDeskCount(day);
		const bookingDeskMoney = this.getBookingDeskMoney(day);
		return bonusMoney * (foodMoney + bookingDeskTimes * bookingDeskMoney);
	}
	getBookingDeskMoney(day: number) {
		return Math.ceil((day + 1) / 2) + 2;
	}

	private _cardsByDay: Unlock[][] = [];
	getCardsByDay(day: number) {
		if (this._cardsByDay[day] === undefined) {
			let n: number;
			if (this.turbo) {
				n = day - 1;
			} else {
				n = Math.max(0, Math.floor((day - 1) / 3));
				if (day > 5) n++;
			}
			this._cardsByDay[day] = [
				...this.startingCards,
				...this.cards.slice(0, n),
			];
		}
		return this._cardsByDay[day];
	}
	getBookingDeskCount(day: number, bookingDeskDuration: number = 1): number {
		const normalGroups = Math.ceil(
			this.getExpectedCustomers(day) / this.getExpectedGroupSize(day)
		);
		if (this.getCardsByDay(day).some((a) => a.Name === "Herd Mentality"))
			return Math.min(normalGroups, 3) + 1;
		const rushTimes: number[] = [];
		const cards = this.getCardsByDay(day);
		let calls = 1; // end of day call
		if (this.turbo || cards.some((a) => a.Name === "Morning Rush")) {
			rushTimes.push(0.2);
			calls++;
		}
		if (this.turbo || cards.some((a) => a.Name === "Lunch Rush")) {
			rushTimes.push(0.5);
			calls++;
		}
		if (this.turbo || cards.some((a) => a.Name === "Dinner Rush")) {
			rushTimes.push(0.8);
			calls++;
		}
		const callWiggle = bookingDeskDuration / this.getDayLength(day);
		const scheduleWiggle = 0.1 / normalGroups;
		for (let i = 1; i < normalGroups; i++) {
			const mid = i / normalGroups;
			const min = mid - scheduleWiggle - callWiggle;
			const max = mid + scheduleWiggle + callWiggle;
			let possibleConflict = false;
			for (const r of rushTimes) {
				if (min <= r && max >= r) {
					possibleConflict = true;
					break;
				}
			}
			if (!possibleConflict) calls++;
		}
		return calls;
	}
	getNonRushGroupCount(day: number): number {
		const custs = this.getExpectedCustomers(day);
		const closingTimeAdjust =
			this.getCardsByDay(day).filter((a) => a.Name === "Closing Time?").length *
			0.2;
		const avgGroupSize = this.getExpectedGroupSize(day);
		const goalGroups = (custs * (1 + closingTimeAdjust)) / avgGroupSize;
		return Math.ceil(goalGroups);
	}
	getCustomerCount(day: number): number {
		return this.getGroupSizes(day).reduce((a, b) => a + b, 0);
	}
	getGroupSizes(day: number): number[] {
		const random = RestaurantSystemSeed(1997821, day, this.seed).random;
		const gc = this.getNonRushGroupCount(day);
		const herd = this.getCardsByDay(day).some(
			(a) => a.Name === "Herd Mentality"
		);
		let g = gc;
		let groups: number[] = [];
		let [min, max] = this.getGroupSizeRange(day);
		{
			let i = g - 1;
			// shuffle group types-- actually need to implement this if I want to support Romantic
			while (i--) {
				random.value;
			}
		}
		while (g--) {
			groups.push(random.range(min, max + 1));
			if (!herd && g !== gc - 1) {
				random.value; // schedules the exact time of arrival... might want to implement later but I don't think runners generally care too much about the exact time
			}
		}
		// rushes
		let rushCount = this.turbo
			? 3
			: this.getCardsByDay(day).filter((a) => a.Name.includes(" Rush")).length;
		const rushGroups = Math.ceil(
			Math.max(1, this.getExpectedCustomers(day) * 0.15)
		);
		let totalRushGroups = rushCount * rushGroups;
		while (totalRushGroups--) {
			groups.push(random.range(min, max + 1));
		}
		return groups;
	}
	getExpectedGroupSize(day: number) {
		const s = this.getGroupSizeRange(day);
		return (s[0] + s[1]) / 2;
	}
	getGroupSizeRange(day: number): [number, number] {
		let min = 1;
		let max = 2;
		for (const c of this.getCardsByDay(day)) {
			switch (c.Name) {
				case "Individual Dining":
					max--;
					break;
				case "Medium Groups":
					min++;
					max += 2;
					break;
				case "Large Groups":
					min += 2;
					max += 2;
					break;
				case "Flexible Dining":
					min--;
					max++;
					break;
				case "Community":
					const increases = Math.floor((day - 1) / 3);
					min += increases;
					max += increases;
					break;
				default:
					break;
			}
		}
		return [min, max];
	}

	getExpectedCustomers(day: number): number {
		const reductions = this.getReductions(day);
		const dayLength = this.getDayLength(day);
		const playerModifier = this.getPlayerModifier();
		const courseModifier = this.getCourseModifier(day);
		const dayRate = this.getDayRate(day);
		const kitchenParamCustomers = this.getCustomersPerHour(day);
		const advertising = this.getAdvertisingModifier(day);

		const res =
			((0.85 ** reductions * ((dayLength / 25) * dayRate * playerModifier)) /
				courseModifier) *
			kitchenParamCustomers *
			advertising;
		return res;
	}
	getAdvertisingModifier(day: number) {
		const cards = this.getCardsByDay(day);
		return 1 + 0.25 * cards.filter((a) => a.Name === "Advertising").length;
	}
	getDayRate(day: number) {
		let dayRate = 1;
		switch (day) {
			case 1:
				dayRate = 1.25;
				break;
			case 2:
				dayRate = 1.5;
				break;
			default:
				dayRate = 1.5 + 0.15 * (day - 3);
				break;
		}
		if (day > 15) dayRate += (this.turbo ? 0.1 : 0) * (day - 15) ** 1.5;
		return dayRate;
	}
	getCourseModifier(day: number) {
		let modifier = 1; // this is bugged if the restaurant has no mains, but the actual game is bugged like that so... successful reverse engineer?
		const cards = this.getCardsByDay(day);
		if (
			cards.some(
				(a) =>
					a.DishType === DishType.Dessert ||
					a.Name === "Black Coffee" ||
					a.Name === "Cakes"
			)
		)
			modifier += 0.25;
		if (cards.some((a) => a.DishType === DishType.Starter)) modifier += 0.25;
		return modifier;
	}
	getPlayerModifier() {
		let result: number;
		switch (this.playerCount) {
			case 0:
				result = 1;
				break;
			case 1:
				result = 0.8;
				break;
			case 2:
				result = 1;
				break;
			case 3:
				result = 1.25;
				break;
			default:
				result = 1.5;
				break;
		}
		return result;
	}
	getDayLength(day: number) {
		return 100 + Math.floor(day / 3) * 25;
	}
	getCustomersPerHour(day: number) {
		let r = 1;
		if (this.turbo) {
			r = 1.5;
			r *= 1 + day / 10;
		}
		return r;
	}
	getReductions(day: number): number {
		const cards = this.getCardsByDay(day);
		return cards.reduce((a, b) => a + b.CustomerMultiplier, 0);
	}
	getMapSize(): LayoutProfileName {
		const r = new FixedSeedContext(this.seed, 5078598);
		const roll = r.useSubcontext(0).random.range(0, 8);
		let mapSize: LayoutProfileName;
		switch (roll) {
			case 0:
				mapSize = "Small (2)";
				break;
			case 4:
				mapSize = "Medium (2)";
				break;
			case 1:
			case 5:
				mapSize = "Diner (1)";
				break;
			case 2:
			case 6:
				mapSize = "Large (3)";
				break;
			case 3:
			case 7:
				mapSize = "Huge (4)";
				break;
			default:
				throw new Error();
				break;
		}
		return mapSize;
	}
	/**
	 *
	 * @returns [map size, num tiles]
	 */
	getLayoutInfo(): [number, number] {
		const r = new FixedSeedContext(this.seed, 5078598);
		const roll = r.useSubcontext(0).random.range(0, 8);
		let mapSize: number;
		let numTiles: number;
		switch (roll) {
			case 0:
				numTiles = 70;
				mapSize = 2;
				break;
			case 4:
				numTiles = 84;
				mapSize = 2;
				break;
			case 1:
			case 5:
				numTiles = 60;
				mapSize = 1;
				break;
			case 2:
			case 6:
				numTiles = 9 * 13;
				mapSize = 3;
				break;
			case 3:
			case 7:
				numTiles = 12 * 16;
				mapSize = 4;
				break;
			default:
				throw new Error();
				break;
		}
		return [mapSize, numTiles];
	}
	getDoorInfo() {
		if (this.mapSize !== "Diner (1)") {
			return -1; // not implemented for non-diner
		}
		let r = new Random(
			new FixedSeedContext(this.seed, 98234234).useSubcontext(0).random.value
		);
		let padding = 23;
		while (padding--) {
			r.value;
		}
		return r.range(0, 4);
	}
}

function getPlayerCountMoneyBonus(players: number) {
	switch (players) {
		case 1:
			return 1.25;
		case 2:
			return 1.1;
		default:
			return 1;
	}
}
export function getRunMoneyInfo(
	config: SeedConfig,
	numStarting: number,
	startingCards: Unlock[],
	playerCount: number
) {
	let expectedMoneyByDay: number[] = [];
	let expectedBookingDesksByDay: number[] = [];
	const duringRunCards = config.cards.slice(numStarting);
	let run = new Run(config.seed, startingCards, duringRunCards);
	run.playerCount = playerCount;
	for (let i = 1; i <= 15; i++) {
		expectedMoneyByDay.push(run.guessMoney(i));
		expectedBookingDesksByDay.push(run.getBookingDeskCount(i));
	}
	expectedMoneyByDay[0] += run.guessMoney(0);
	return { expectedMoneyByDay, expectedBookingDesksByDay };
}
export const tables: LayoutProfileName[] = [
	"Diner (1)",
	"Small (2)",
	"Medium (2)",
	"Large (3)",
	"Huge (4)",
];
