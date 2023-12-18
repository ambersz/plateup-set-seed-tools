type int = number;

export class FixedSeedContext {
	fixedSeed: int;
	instance: int;
	constructor(seed: int | string, instance: int) {
		if (typeof seed === "string") {
			seed = hash(seed);
		}
		this.fixedSeed = seed;
		this.instance = instance;
		this.random = new Random(seed + Math.imul(124192293, instance));
	}
	useSubcontext(context: int) {
		return new FixedSeedContext(
			this.fixedSeed,
			124192293 * context + this.instance
		);
	}
	random: Random;
}
export class Random {
	constructor(initState: int) {
		const nextSeed = (initState: number) =>
			(Math.imul(1812433253, initState) + 1) >> 0;
		const firstSeed = initState >> 0,
			secondSeed = nextSeed(firstSeed),
			thirdSeed = nextSeed(secondSeed),
			fourthSeed = nextSeed(thirdSeed);
		this.seed = [firstSeed, secondSeed, thirdSeed, fourthSeed];
	}
	seed: [number, number, number, number];

	get value(): number {
		let x = this.seed.shift() as number;
		let y = this.seed[2];
		x ^= x << 11;
		x ^= x >>> 8;
		y ^= y >>> 19;
		y = (y ^ x) >> 0;
		this.seed.push(y);
		return y;
	}

	range(lowInclusive: number, highExclusive: number): number {
		// TODO: have not confirmed this yet
		return ((this.value >>> 0) % (highExclusive - lowInclusive)) + lowInclusive;
	}
	get valueFloat(): number {
		return ((this.value << 9) >>> 0) / 0xffffffff;
	}
}

function hash(seed: string): number {
	let utf8Encode = new TextEncoder();
	const bytes = utf8Encode.encode(seed);
	let num = 5381;
	let i = bytes.length;
	while (i > 0) {
		let n3 = --i;
		num = (num << 5) + num + bytes[n3];
	}

	return num >> 0;
}
