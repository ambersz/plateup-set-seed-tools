export type ObjectiveComparison<T> = (a: T, b: T) => number; // returns a negative number if a is better than b, 0 if they are equal, and a positive number if b is better than a.

export class ParetoSet<T> {
	array: T[];
	objectiveFunctions: readonly ObjectiveComparison<T>[];
	constructor(
		items: T[],
		objectiveFunctions: readonly ObjectiveComparison<T>[]
	) {
		this.array = initializeParetoSet(items, objectiveFunctions);
		this.objectiveFunctions = objectiveFunctions;
	}
	clear() {
		this.array = [];
	}
	/**
	 *
	 * @param element
	 * @returns true if the element was added to the set, false if the element was not added to the set
	 */
	add(element: T): boolean {
		let i = this.array.length;
		while (i--) {
			let { better, worse } = partialOrder(
				element,
				this.array[i],
				this.objectiveFunctions
			);

			if (worse) {
				return false;
			}
			if (better) {
				// console.log(`removed:`, this.array.splice(i, 1));
				this.array.splice(i, 1);
			}
		}

		this.array.push(element);
		return true;
	}
}
export function initializeParetoSet<T>(
	items: T[],
	objectiveFunctions: readonly ObjectiveComparison<T>[]
): T[] {
	if (!items.length) return items;
	const copiedItems = [...items]; // don't need to sort first because I can always remove the earlier added items when I see that they are suboptimal
	let paretoArray: T[] = [];
	paretoArray.push(copiedItems.pop()!);
	candidates: while (copiedItems.length) {
		const cand = copiedItems.pop()!;
		let i = paretoArray.length;
		while (i--) {
			let { better, worse } = partialOrder(
				cand,
				paretoArray[i],
				objectiveFunctions
			);
			if (worse) {
				// the pareto-optimal set contains something which is strictly better
				continue candidates;
			}
			if (better) {
				// something in the pareto array is strictly worse than the current candidate
				paretoArray.splice(i, 1);
			}
		}
		// if I made it here, I wasn't able to find something strictly better than the candidate.
		paretoArray.push(cand);
	}

	return paretoArray;
}

function partialOrder<T>(
	a: T,
	b: T,
	objectiveFunctions: readonly ObjectiveComparison<T>[]
): { better: boolean; worse: boolean } {
	let better = true;
	let worse = true;
	let i = 0;
	while ((better || worse) && i < objectiveFunctions.length) {
		const diff = objectiveFunctions[i](a, b);
		if (diff < 0) {
			// a is better in one aspect, so it can't be worse than b
			worse = false;
		} else if (diff > 0) {
			// a is worse in one aspect, so it can't be better than b
			better = false;
		}
		i++;
	}
	return { better, worse };
}
