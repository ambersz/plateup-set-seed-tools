type order = {
	name: string;
	scoops: [number, number] | [number, number, number];
	p: number;
};
const names = "VCS";
function constructOrder(...scoops: number[]): order {
	let p = 0.5;
	const unique = new Set(scoops).size;
	switch (scoops.length) {
		case 2:
			p /= 9 * 8;
			switch (unique) {
				case 1:
					p *= (6 * 3) / 3;
					break;
				case 2:
					p *= (9 * 6) / 3;
					break;
				default:
					throw new Error("Math is broken");
			}
			break;
		case 3:
			p /= 9 * 8 * 7;
			switch (unique) {
				case 1:
					p *= (6 * 3) / 3;
					break;
				case 2:
					p *= (9 * (6 * 4 + 2 * 6)) / 6;
					break;
				case 3:
					p *= 9 * 6 * 3;
					break;
			}
			break;
		default:
			throw new Error("wrong number of scoops");
	}
	return {
		name: scoops
			.map((a) => names[a])
			.sort((a, b) => (a < b ? -1 : 1))
			.join(""),
		// @ts-ignore
		scoops,
		p,
	};
}
const IceCreamActions = () => {
	const orders: order[] = [];
	for (let s = 2; s <= 3; s++) {
		for (let i = 0; i < 3; i++) {
			for (let j = i; j < 3; j++) {
				if (s === 3) {
					for (let k = j; k < 3; k++) {
						orders.push(constructOrder(i, j, k));
					}
				} else {
					orders.push(constructOrder(i, j));
				}
			}
		}
	}
	let averageSwitches = 0;
	function getOptimalSwitches(a: order, b: order): [number, number] {
		const base = a.scoops.length + b.scoops.length;
		// a then b
		let sa = Math.max(...a.scoops);
		let sab = Math.max(...b.scoops.map((bs) => (bs - sa + 3) % 3));
		// b then a
		let sb = Math.max(...b.scoops);
		let sba = Math.max(...a.scoops.map((as) => (as - sb + 3) % 3));
		return [sa + sab + base, sb + sba + base];
	}

	const soloAverage = orders.reduce(
		(a, b) => a + b.p * (b.scoops.length + Math.max(...b.scoops)),
		0
	);
	function minimumPresses(b: order) {
		let res = Infinity;
		for (let i = 0; i < 3; i++) {
			const cand =
				Math.max(...b.scoops.map((a) => (a - i + 3) % 3)) + b.scoops.length;
			if (cand < res) res = cand;
		}
		return res;
	}

	return (
		<div>
			<div>
				Assumptions:
				<ul>
					<li>One table</li>
					{/* <li>Only duo groups</li> */}
					<li>No display stands</li>
				</ul>
			</div>
			<div>Flavors are symmetric, so WLOG machine starts on Vanilla</div>
			<table>
				<thead>
					<tr>
						<th scope="col"></th>
						{orders.map((order) => (
							<th scope="col">{order.name}</th>
						))}
					</tr>
					<tr>
						<th scope="row">Probability</th>
						{orders.map((o) => (
							<td>{(o.p * 100).toFixed(2)}%</td>
						))}
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						const rows = [<th scope="row">{order.name}</th>];
						for (let i = 0; i < orders.length; i++) {
							const switches = getOptimalSwitches(order, orders[i]);
							// const diff = Math.abs(switches[0] - switches[1]);

							const optimalSwitches = Math.min(...switches);
							averageSwitches += optimalSwitches * order.p * orders[i].p;
							rows.push(<td>{optimalSwitches}</td>);
						}
						return <tr>{rows}</tr>;
					})}
				</tbody>
			</table>
			<div>
				Expected optimal button presses to serve a solo ice cream order:{" "}
				{soloAverage.toFixed(3)}
			</div>
			<div>
				Expected optimal button presses to serve a duo ice cream order:{" "}
				{averageSwitches.toFixed(3)}
			</div>
			<div>
				Average button presses for 2x solo groups:{" "}
				{(soloAverage * 2).toFixed(3)}
			</div>
			<div>
				Percent reduction in button presses for optimal duo vs 2 solos:{" "}
				{(
					((soloAverage * 2 - averageSwitches) / soloAverage / 2) *
					100
				).toFixed(3)}
				%
			</div>
			<div>
				Theoretical minimum button presses per customer if ~Inf tables & all
				orders taken at once:{" "}
				{orders.reduce((a, b) => a + minimumPresses(b) * b.p, 0).toFixed(3)}
			</div>
			<div>
				{" "}
				Theoretical minimum normalized to duos:{" "}
				{(orders.reduce((a, b) => a + minimumPresses(b) * b.p, 0) * 2).toFixed(
					3
				)}
			</div>
		</div>
	);
};
export default IceCreamActions;
