import { render } from "preact";
import "./index.css";
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
const CoffeeEatingTime = () => {
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
	const coffeeExtras = [
		<>
			<th style="border-bottom-width:2px">0</th>
			<th style="border-bottom-width:2px">1</th>
			<th style="border-bottom-width:2px">2</th>
			<th style="border-right-width:2px;border-bottom-width:2px">3</th>
		</>,
	];
	const render = [
		<thead>
			<tr>
				<th rowSpan={4} style="border-bottom-width:2px">
					Group Size
				</th>
				<th colspan={25}>Base Eating Time (s)</th>
			</tr>
			<tr>
				<th colspan={4}>0.75 (Affordable + Sharp Cutlery)</th>
				<th colspan={4}>1.5 (Affordable / Sharp Cutlery)</th>
				<th colspan={4}>3 (Base)</th>
				<th colspan={4}>6 (Leisurely + (Affordable/Sharp Cutlery))</th>
				<th colspan={4}>12 (Leisurely)</th>
			</tr>
			<tr>
				<th colspan={25}>Number of Coffee Extras</th>
			</tr>
			<tr>
				{coffeeExtras}
				{coffeeExtras}
				{coffeeExtras}
				{coffeeExtras}
				{coffeeExtras}
			</tr>
		</thead>,
	];
	for (let g = 0; g < res.length; g++) {
		render.push(
			<tr>
				<th>{g + 1}</th>
				{res[g].map((n, i) => (
					<td style={i % 4 ? "" : "border-left-width:2px;"}>
						{parseFloat(n.toFixed(3))}
					</td>
				))}
			</tr>
		);
	}
	console.log({ res });
	return (
		<>
			<h2>Average Total Eating Time (s)</h2>
			<table>{render}</table>
			<div>
				After a customer receives an extra, their eating time gets reset to base
				eating time. Because Coffee's eating time is 4x base eating time, to
				reduce Coffee eating time, you want:
				<ol>
					<li>
						the group to order their first extra as quickly as possible to
						switch from the 4x eating time into 1x eating time.
					</li>
					<li>
						the group to order extras as slowly as possible so that they finish
						eating before someone else decides to order an extra and reset the
						eating time back to the full 1x
					</li>
				</ol>
				Most of the time #1 wins out in importance, so you want as many extras
				as possible to increase the chance-per-second that they will order an
				extra, but when you get to larger group sizes getting additional extras
				may slightly increase the expected eating time.
			</div>
			<div>
				Assumptions:
				<ul>Infinite frame rate</ul>
				<ul>
					Instant service of extras (i.e. does not take into account reaction
					time to serve the extra)
				</ul>
			</div>
		</>
	);
	// return <>{res.map((l) => l.join(",")).join(";")}</>;
};

render(<CoffeeEatingTime />, document.getElementById("app")!);
