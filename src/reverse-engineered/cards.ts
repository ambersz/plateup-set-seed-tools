import { Unlock } from "../kitchenTypes";
import { FixedSeedContext } from "./prng";

export class FindNewUnlocks {
	day: number;
	cards: Unlock[];
	unlockPack: UnlockPack;
	seed: string;
	constructor() {
		this.day = 1;
		this.cards = [];
		this.unlockPack = {}; // TODO ???
		this.seed = "az123456";
	}

	getUnlockOptions() {
		const context = Seed(848292, this.day, this.seed);
		const forPack = context.useSubcontext(1);
		const options = this.unlockPack.GetOptions(this.cards, this.day, forPack);
		this.day++;
	}
}

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
		list = list.filter(c => !this.ShouldBlockCard(c, cards, day));
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

function Seed(category_seed: number, instance: number, seed: string) {
	return new FixedSeedContext(seed, category_seed * 1231231 + instance);
}


