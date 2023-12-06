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
	rangeFloat(min = 0, max = 1) {
		if (max < min) {
			[min, max] = [max, min];
		}
		return (
			(max - min) * (1 - (((this.value >>> 0) << 9) >>> 0) / 0xffffffff) + min
		);
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

const testSeeds = [
	"azq7nnr5",
	"aztyybbn",
	"azzl75ps",
	"azfrpdtn",
	"azx7du9f",
	"azuk8x3h",
	"azfrioyp",
	"azsjncr5",
	"azx1pdvg",
	"az3dvf9n",
	"azogzs1j",
	"azdrxikt",
	"azor2ecm",
	"azv3vjqc",
	"azm79wsl",
	"az4gzho1",
	"az4rdcny",
	"azc6txsh",
	"aza892mm",
	"az4s7okx",
	"az9jyczp",
	"az8ys73s",
	"azo2i2cw",
	"azrhwuox",
	"azeuphhl",
	"azoizg49",
	"az2xqai6",
	"az2ylrdd",
	"az5xnena",
	"az29g4uu",
	"azjnc9s9",
	"azmq4vw5",
	"azkeqani",
	"azqey8eg",
];
console.log(testSeeds.map((s) => hash(s)).join(","));
