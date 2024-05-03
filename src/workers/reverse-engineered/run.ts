import { DishType } from "../../kitchenEnums";
import { Unlock } from "../../kitchenTypes";
import { FixedSeedContext, Random, RestaurantSystemSeed } from "./prng";
// TODO roll Shop and FindNewUnlocks into Run

export class Run {
	seed: string;
	mapSize: number;
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
		this.playerCount = this.mapSize;
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

		const custs = this.getCustomerCount(day);
		let cost = this.startingCards.reduce((a, b) => a + b.DishValue, 0);
		if (this.getCardsByDay(day).some((a) => a.Name === "Double Helpings"))
			cost += 3;
		if (Number.isNaN(custs)) debugger;
		if (Number.isNaN(cost)) debugger;

		return (
			getPlayerCountMoneyBonus(this.playerCount) *
			(custs * cost +
				this.getBookingDeskCount(day) * this.getBookingDeskMoney(day))
		);
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
			// debugger;
			console.log(
				`Day ${day} has ${this._cardsByDay[day].map((a) => a.Name).join(", ")}`
			);
		}
		return this._cardsByDay[day];
	}
	getBookingDeskCount(day: number): number {
		return (
			Math.ceil(
				this.getExpectedCustomers(day) / this.getExpectedGroupSize(day)
			) +
			(this.turbo
				? 3
				: this.getCardsByDay(day).filter((a) => a.Name.includes(" Rush"))
						.length)
		);
	}
	getGroupCount(day: number): number {
		const custs = this.getExpectedCustomers(day);
		const closingTimeAdjust =
			this.getCardsByDay(day).filter((a) => a.Name === "Closing Time?").length *
			0.2;
		const avgGroupSize = this.getExpectedGroupSize(day);
		const goalGroups = (custs * (1 + closingTimeAdjust)) / avgGroupSize;
		console.log({ custs, closingTimeAdjust, avgGroupSize, goalGroups });
		return Math.ceil(goalGroups);
	}
	getCustomerCount(day: number): number {
		return this.getGroupSizes(day).reduce((a, b) => a + b, 0);
	}
	getGroupSizes(day: number): number[] {
		const random = RestaurantSystemSeed(1997821, day, this.seed).random;
		const gc = this.getGroupCount(day);
		const herd = this.getCardsByDay(day).some(
			(a) => a.Name === "Herd Mentality"
		);
		let g = gc;
		let groups: number[] = [];
		let [min, max] = this.getGroupSizeRange(day);
		console.log({ min, max, gc, herd });
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
		console.log({ totalRushGroups });
		while (totalRushGroups--) {
			groups.push(random.range(min, max + 1));
		}
		console.log({ groups });
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
		console.log({
			reductions,
			dayLength,
			playerModifier,
			courseModifier,
			dayRate,
			kitchenParamCustomers,
			advertising,
			res,
		});
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
		if (cards.some((a) => a.DishType === DishType.Dessert)) modifier += 0.25;
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
	getMapSize() {
		const r = new FixedSeedContext(this.seed, 5078598);
		const roll = r.useSubcontext(0).random.range(0, 4);
		let mapSize: number;
		switch (roll) {
			case 0:
				mapSize = 2;
				break;
			case 1:
				mapSize = 1;
				break;
			case 2:
				mapSize = 3;
				break;
			case 3:
				mapSize = 4;
				break;
			default:
				throw new Error();
				break;
		}
		return mapSize;
	}
	getDoorInfo() {
		if (this.mapSize !== 1) {
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
