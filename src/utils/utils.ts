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

// export const chars = "abcdefghijklmnopqruvyz12569"; // collision-free on 3 char strings
export const chars = "abcdefghijklmnopqrstuvwxyz123456789";
export const IN_GAME_SEED_CHARS = "bdghjmqrtvwxy346789";

const hashCollisionPairs =
	"1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(
		","
	);
export const hashCollisionPairMap: { [pair: string]: boolean } = {};
for (const pair of hashCollisionPairs) {
	hashCollisionPairMap[pair] = true;
}

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

export function average(numbers: number[]) {
	if (!numbers.length) return 0;
	return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export function choose(n: number, k: number) {
	let res = 1;
	for (let i = 1; i <= k; i++) {
		res *= (n - i + 1) / i;
	}
	return res;
}
