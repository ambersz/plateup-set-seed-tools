import { getUnblockedCards } from "../db/unlocks";
import { Unlock } from "../../kitchenTypes";
import { DishType, UnlockGroup } from "../../kitchenEnums";
import { FixedSeedContext, Random } from "./prng";
interface IUnlockPack {
	GetOptions: (
		cards: Unlock[],
		day: number,
		fsc: FixedSeedContext
	) => [Unlock, Unlock];
	getPad: (cards: Unlock[], day: number) => number;
	sortCandidates: (cards: Unlock[], day: number, random: Random) => Unlock[];
	getUnlockGroups: (day: number) => [UnlockGroup, UnlockGroup];
}

class UnlockPack implements IUnlockPack {
	encourageGroups: UnlockGroup[] = [UnlockGroup.Special];
	constructor() {}
	GetOptions(
		cards: Unlock[],
		day: number,
		fsc: FixedSeedContext
	): [Unlock, Unlock] {
		const random = fsc.random;
		let pad = 0;
		if (day !== 15) pad = this.getPad(cards, day);
		while (pad--) {
			random.value;
		}

		let sortedCards = this.sortCandidates(cards, day, fsc.random);
		// if (day === 5)
		// console.log(sortedCards.map((a) => a.Name).join(","));
		const [firstUnlockGroup, secondUnlockGroup] = this.getUnlockGroups(day);
		let first = null;
		let second = null;
		for (const c of sortedCards) {
			if (
				c.UnlockGroup !== firstUnlockGroup &&
				c.UnlockGroup !== secondUnlockGroup
			)
				continue;
			if (
				first === null ||
				(first.UnlockGroup !== firstUnlockGroup &&
					c.UnlockGroup === firstUnlockGroup)
			) {
				first = c;
			} else if (
				second === null ||
				(second.UnlockGroup !== secondUnlockGroup &&
					c.UnlockGroup === secondUnlockGroup)
			) {
				second = c;
			}
			if (
				first &&
				first.UnlockGroup === firstUnlockGroup &&
				second &&
				second.UnlockGroup === secondUnlockGroup
			)
				break;
		}
		return [first, second] as [Unlock, Unlock];
	}
	getPad(cards: Unlock[], day: number) {
		if (day === 15) return 0;
		let pad = getUnblockedCards(cards).length + 1;
		if (day === 5) pad *= 2;
		return pad;
	}
	sortCandidates(cards: Unlock[], _day: number, random: Random): Unlock[] {
		let candidates = getUnblockedCards(cards);
		let sortedCards = sort(candidates, random);
		const preferPriority = random.valueFloat < 0.5;
		if (preferPriority) {
			sortedCards.sort((a, b) => {
				let order = 0;
				if (genericPriority(a)) order--;
				if (genericPriority(b)) order++;
				return order;
			});
		}
		return sortedCards;
	}
	getUnlockGroups(day: number): [UnlockGroup, UnlockGroup] {
		if (day === 15) return [UnlockGroup.Franchise, UnlockGroup.Franchise];
		if (day === 5) return [UnlockGroup.PrimaryTheme, UnlockGroup.PrimaryTheme];
		return [UnlockGroup.Dish, UnlockGroup.Generic];
	}
}

class TurboUnlockPack extends UnlockPack {
	override getPad(cards: Unlock[], day: number) {
		let pad = getUnblockedCards(cards, false).length + 1;
		if (day !== 5) pad *= 2;
		return pad;
	}
	override sortCandidates(
		cards: Unlock[],
		_day: number,
		random: Random
	): Unlock[] {
		let candidates = getUnblockedCards(cards);
		let sortedCards = sort(candidates, random);
		const priorityRng = random.valueFloat;
		const preferPriority = priorityRng < 0.1;
		if (preferPriority) {
			sortedCards.sort((a, b) => {
				let order = 0;
				if (a.Requires.length) order--;
				if (b.Requires.length) order++;
				return order;
			});
		}
		return sortedCards;
	}
}

class AutumnUnlockPack extends UnlockPack {
	override getPad(cards: Unlock[], day: number) {
		if (day === 15) return 0;
		let pad = getUnblockedCards(cards, false).length + 1; // cards, not respecting autumn (for the franchise pack)
		// console.log({ autumnCand: candidates.length, franchisePad: pad - 1 });
		if (day === 5) {
			let candidates = getUnblockedCards(cards); // cards, respecting autumn allowing base dishes
			pad += candidates.length + 2; // once for prioritized sort by dependencies, once for prioritized sort by Turkey/Nut Roast
		}
		// console.log({ pad });
		return pad;
	}
	private readonly ThanksgivingCards = ["Turkey", "Nut Roast"];

	override sortCandidates(
		cards: Unlock[],
		day: number,
		random: Random
	): Unlock[] {
		let candidates =
			day === 5 || day === 15
				? getUnblockedCards(cards, false)
				: getUnblockedCards(cards);
		let sortedCards = sort(candidates, random);
		// console.log(sortedCards.map((a) => a.Name).join(","));

		const valueFloat = random.valueFloat;
		const preferPriority = valueFloat < 0.5;
		// console.log({ valueFloat, preferPriority });
		if (preferPriority) {
			// console.log({ preferPriority });
			sortedCards.sort((a, b) => {
				let order = 0;
				if (genericPriority(a, false)) order--;
				if (genericPriority(b, false)) order++;
				return order;
			});
		}

		if (day !== 5 && day !== 15) {
			// 25% of the time, the game will bury Turkey and Nut Roast. Probably a bug
			// technically this doesn't matter since this can't mess up the relative orders of the themes, and there's nothing depending on the prng state after this, but just in case....
			const hateThanksgiving = random.valueFloat < 0.25;
			if (hateThanksgiving) {
				sortedCards.sort((a, b) => {
					let order = 0;
					if (this.ThanksgivingCards.includes(a.Name)) order++;
					if (this.ThanksgivingCards.includes(b.Name)) order--;
					return order;
				});
			}
		}
		// console.log({ preferPriority, preferThanksgiving });
		return sortedCards;
	}
	override getUnlockGroups(day: number): [UnlockGroup, UnlockGroup] {
		if (day === 15) return [UnlockGroup.Franchise, UnlockGroup.Franchise];
		if (day === 5) return [UnlockGroup.PrimaryTheme, UnlockGroup.PrimaryTheme];
		return [UnlockGroup.Dish, UnlockGroup.Dish];
	}
}

function sort(cards: Unlock[], random: Random): Unlock[] {
	const res = cards
		.map((c) => [c, random.valueFloat] as [Unlock, number])
		.sort((a, b) => a[1] - b[1]);
	// console.log(res.map(([a, b]) => [a.Name, b].join(",")).join("\n"));
	return res.map((c) => c[0]);
}

export class FindNewUnlocks {
	cards: Unlock[];
	unlockPack: IUnlockPack;
	seed: string;
	constructor(seed: string) {
		this.cards = [];
		// this.unlockPack = new TurboUnlockPack(); // TODO ???
		this.unlockPack = new UnlockPack();
		this.seed = seed;
	}

	addCard(card: Unlock) {
		if (card === undefined) return;
		switch (card.Name) {
			case "Community":
				// console.log("use Autumn Unlock Pack");
				this.unlockPack = new AutumnUnlockPack();
				break;
			case "Turbo":
				this.unlockPack = new TurboUnlockPack();
				break;
			default:
				break;
		}
		this.cards.push(card);
	}

	getUnlockOptions(day: number) {
		const context = Seed(848292, day, this.seed);
		const forPack = context.useSubcontext(1);
		const options = this.unlockPack.GetOptions(this.cards, day, forPack);
		return options;
	}

	getCustomers(day: number, _players: number = 1): number[] {
		return []; // TODO AZ: not implemented yet!
		// @ts-expect-error
		let reductions = this.cards.reduce((a, b) => a + (b.Reductions ?? 0), 0);
		// @ts-expect-error
		const [minGroup, maxGroup] = this.getGroupSizeRange(day);
		let dayModifier: number;
		switch (day) {
			case 0:
				dayModifier = 1;
				break;
			case 1:
				dayModifier = 1.25;
				break;
			case 2:
				dayModifier = 1.5;
				break;

			default:
				dayModifier = 1.1 ** day;
				if (this.cards.some((a) => a.Name === "Turbo")) {
					dayModifier *= 1.5;
					dayModifier *= 1.1 ** day;
				}
				break;
		}
	}

	getGroupSizeRange(day: number): [number, number] {
		const community = this.cards.some((a) => a.Name === "Community");
		if (community) {
			const m = Math.floor((day - 1) / 3);
			return [m + 1, m + 2];
		}
		let min = 1;
		let max = 2;
		if (this.cards.some((a) => a.Name === "Individual Dining")) return [1, 1];
		if (this.cards.some((a) => a.Name === "Medium Groups")) {
			min++;
			max += 2;
		}
		if (this.cards.some((a) => a.Name === "Large Groups")) {
			min += 2;
			max += 4;
		}
		if (this.cards.some((a) => a.Name === "Flexible Groups")) {
			min--;
			max++;
		}
		return [min, max];
	}
}
/*
class UnlockPack {
	Sets: UnlockSet[];
	Filter: UnlockFilter[];
	Sorters: UnlockSorter[];
	ConditionalOptions: ConditionalOptions[];

	constructor() {
		this.Sets = [];
		this.Filter = [];
		this.Sorters = [];
		this.ConditionalOptions = [];
	}

	GetOptions(cards: Unlock[], day: number, randomContext: FixedSeedContext) {
		let list = this.GetCardSet(day);
		list = list.filter((c) => !this.ShouldBlockCard(c, cards, day));
	}
	GetCardSet(day: number) {
		let res: UnlockSet[] = [];
		for (const set of this.Sets) {
			res = res.concat(set);
		}
		return res.sort((a, b) => a.ID - b.ID);
	}
	ShouldBlockCard(c: Unlock, currentCards: Unlock[], day: number) {
		// maybe this handles the blockers-- like Salad blocks that one burning card?
		return false; // TODO: does anything actually use this...?
	}
}
//*/

function Seed(category_seed: number, instance: number, seed: string) {
	return new FixedSeedContext(seed, category_seed * 1231231 + instance);
}

function genericPriority(a: Unlock, prioritiseRequirements: boolean = true) {
	if (a.UnlockGroup === UnlockGroup.Special) return true;
	if (a.DishType === DishType.Main || a.DishType === DishType.Extra)
		return true;
	if (prioritiseRequirements) {
		return !!a.Requires.length;
	}
	return false;
}
