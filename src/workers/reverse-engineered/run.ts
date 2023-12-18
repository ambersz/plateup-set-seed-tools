import { FixedSeedContext } from "./prng";
// TODO roll Shop and FindNewUnlocks into Run
export class Run {
	seed: string;
	mapSize: number;
	constructor(seed: string) {
		this.seed = seed;
		this.mapSize = this.getMapSize();
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
}
