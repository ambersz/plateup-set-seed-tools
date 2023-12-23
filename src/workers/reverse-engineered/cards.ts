import { getUnblockedCards } from "../db/unlocks";
import { Unlock } from "../../kitchenTypes";
import { UnlockGroup } from "../../kitchenEnums";
import { FixedSeedContext, Random } from "./prng";

interface UnlockPack {
	GetOptions: (
		cards: Unlock[],
		day: number,
		fsc: FixedSeedContext
	) => [Unlock, Unlock];
}
class TurboUnlockPack {
	encourageGroups: UnlockGroup[] = [UnlockGroup.Special];
	constructor() {}
	GetOptions(
		cards: Unlock[],
		day: number,
		fsc: FixedSeedContext
	): [Unlock, Unlock] {
		const random = fsc.random;
		let candidates = getUnblockedCards(cards);
		let pad = getUnblockedCards(cards, false).length + 1;
		console.log({ autumn: candidates.length, non: pad - 1 });
		// console.log(
		// 	getUnblockedCards(cards, false)
		// 		.map((a) => a.Name)
		// 		.join(",")
		// );
		if (cards.some((a) => a.Name === "Turbo")) {
			if (day !== 5) pad += candidates.length + 1;
		} else if (cards.some((a) => a.Name === "Community")) {
			// Autumn
			if (day === 5) {
				pad += candidates.length + 2;
				// pad = 0;
				// console.log(
				// 	sort(getUnblockedCards(cards, false), random)
				// 		.map((a) => a.Name)
				// 		.join(",")
				// );
				// random.value;
				// console.log(
				// 	sort(getUnblockedCards(cards, true), random)
				// 		.map((a) => a.Name)
				// 		.join(",")
				// );
				// random.value;
				// random.value;
				// // console.log(sort(getUnblockedCards(cards, true), random));
				// // console.log(sort(getUnblockedCards(cards, false),random))
				// candidates = getUnblockedCards(cards, false);
			}
		} else {
			console.error("This Setting is not implemented yet");
		}
		console.log({ pad });
		while (pad--) {
			random.value;
		}
		let sortedCards = sort(candidates, random);
		// debugger;
		console.log(sortedCards.map((a) => a.Name).join(", "));

		const preferPriority =
			random.valueFloat < (cards.some((a) => a.Name === "Turbo") ? 0.1 : 0.5);
		// console.log({
		// 	sortedCards: sortedCards.map((a) => a.Name),
		// 	preferPriority,
		// });
		// console.log(sortedCards.map((a) => a.Name).join(", "));
		const preferRequire =
			!cards.some((a) => a.Name === "Community") || day === 5;
		if (preferPriority) {
			console.log("Prefer Priority");
			sortedCards.sort((a, b) => {
				let order = 0;
				if (
					(preferRequire && a.Requires.length) ||
					this.encourageGroups.includes(a.UnlockGroup)
				)
					order--;
				if (
					(preferRequire && b.Requires.length) ||
					this.encourageGroups.includes(b.UnlockGroup)
				)
					order++;
				return order;
			});
		}
		const firstUnlockGroup =
			day === 5 ? UnlockGroup.PrimaryTheme : UnlockGroup.Dish;
		const secondUnlockGroup =
			day === 5
				? UnlockGroup.PrimaryTheme
				: cards.some((a) => a.Name === "Community")
				? UnlockGroup.Dish
				: UnlockGroup.Generic;
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
}
function sort(cards: Unlock[], Random: Random): Unlock[] {
	const res = cards
		.map((c) => [c, Random.valueFloat] as [Unlock, number])
		.sort((a, b) => a[1] - b[1]);
	// console.log(res.map(([a, b]) => [a.Name, b].join(",")).join("\n"));
	return res.map((c) => c[0]);
}
export class FindNewUnlocks {
	cards: Unlock[];
	unlockPack: UnlockPack;
	seed: string;
	constructor(seed: string) {
		this.cards = [];
		this.unlockPack = new TurboUnlockPack(); // TODO ???
		this.seed = seed;
	}
	addCard(card: Unlock) {
		if (card === undefined) return;
		this.cards.push(card);
	}

	getUnlockOptions(day: number) {
		const context = Seed(848292, day, this.seed);
		const forPack = context.useSubcontext(1);
		const options = this.unlockPack.GetOptions(this.cards, day, forPack);
		return options;
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
