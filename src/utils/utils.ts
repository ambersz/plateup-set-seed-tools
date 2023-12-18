import { Random } from "../workers/reverse-engineered/prng";

export function ShuffleInPlace<T>(array: T[], Random: Random): T[] {
	// This advances PRNG by array.length-1
	let i = array.length;
	while (i-- > 1) {
		let swapIndex = Random.range(0, i + 1);
		[array[i], array[swapIndex]] = [array[swapIndex], array[i]];
	}
	return array;
}
