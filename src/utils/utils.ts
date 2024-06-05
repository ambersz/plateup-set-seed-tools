import { Random } from "../workers/reverse-engineered/prng";
function jsRandomRange(min: number, maxExclusive: number) {
	return Math.floor(Math.random() * (maxExclusive - min)) + min;
}
export function ShuffleInPlace<T>(array: T[], Random?: Random): T[] {
	// This advances PRNG by array.length-1
	let i = array.length;
	while (i-- > 1) {
		let swapIndex =
			Random === undefined ? jsRandomRange(0, i + 1) : Random.range(0, i + 1);
		[array[i], array[swapIndex]] = [array[swapIndex], array[i]];
	}
	return array;
}

export const chars = "abcdefghijklmnopqruvyz12569"; // collision-free on 3 char strings
// export const chars = "abcdefghijklmnopqrstuvwxyz123456789";
export const IN_GAME_SEED_CHARS = "bdghjmqrtvwxy346789";

export function randomAZSeed() {
	let seed = "";
	while (seed.length < 6) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
	return "az" + seed;
}

export function randomInGameSeed() {
	let seed = "";
	while (seed.length < 8) {
		seed +=
			IN_GAME_SEED_CHARS[Math.floor(Math.random() * IN_GAME_SEED_CHARS.length)];
	}
	return seed;
}
