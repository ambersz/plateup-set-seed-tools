import { render } from "preact";
// test Leisurely Eating, Affordable, all 3 coffee extras: azz5tpcu
function getAverageEatingTime(base: number, n: number) {
	// base - base eating time
	// n - max number of extra orders
	let averageEatingTime =
		(n
			? (1 - Math.exp((-n / 5) * 4 * base)) *
			  (base + (5 / n - (4 * base) / (Math.exp((n * 4 * base) / 5) - 1)))
			: 0) +
		Math.exp((-n / 5) * 4 * base) * 4 * base;
	let p = 1;
	for (let i = n - 1; i >= 1; i--) {
		p *= 1 - Math.exp((-i / 5) * base);
		averageEatingTime += p * (5 / i - base / (Math.exp((i * base) / 5) - 1));
	}
	return averageEatingTime;
}
function binomialCoefficient(k: number, n: number) {
	// n choose k?
	let res = 1;
	for (let i = 0; i < k; i++) {
		res *= (n - i) / (k - i);
	}
	return res;
}
const BranchingRerolls = () => {
	let res: number[][] = [];
	const baseEatingTimes = [0.75, 1.5, 3, 6, 12];
	for (let n = 1; n <= 6; n++) {
		res[n - 1] = [];
		for (let indexX = 0; indexX < baseEatingTimes.length; indexX++) {
			const base = baseEatingTimes[indexX];
			for (let extraTypes = 0; extraTypes <= 3; extraTypes++) {
				const p = 1 - 0.5 ** extraTypes;
				let avgEatingTime = 0;
				let totalP = 0;
				for (let orderedExtras = 0; orderedExtras <= n; orderedExtras++) {
					const probabilityOfExtras =
						p ** orderedExtras *
						(1 - p) ** (n - orderedExtras) *
						binomialCoefficient(orderedExtras, n);
					totalP += probabilityOfExtras;

					avgEatingTime +=
						probabilityOfExtras * getAverageEatingTime(base, orderedExtras);
				}
				if (totalP !== 1) {
					console.log("!");
					debugger;
				}
				res[n - 1].push(avgEatingTime);
			}
		}
	}
	console.log({ res });
	return res.map((l) => l.join(",")).join(";");
};

render(<BranchingRerolls />, document.getElementById("app")!);
