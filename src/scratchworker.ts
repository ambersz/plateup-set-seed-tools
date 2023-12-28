import { hash } from "./workers/reverse-engineered/prng";
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
let seedHashes: (number | undefined)[] = [];
let size = 0;
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
let unique = 0;
let numAttempts = 0;
console.log("working");
const testGenerator = () => {
	return randomAZSeed();
	// return randomSeed(5, 5);
};
let order = 1;
while (true) {
	numAttempts++;
	if (!checkAndSaveHash(hash(testGenerator()))) {
		unique++;
	} else {
		postMessage({
			unique,
			numAttempts,
			p: unique / numAttempts,
		});
	}
}

function randomAZSeed() {
	let seed = "";
	while (seed.length < 6) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
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
