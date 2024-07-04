// @ts-nocheck
import { useCallback, useState } from "preact/hooks";
import "preact";
import "./PolyaBiome.css";
const width = 10;
const height = 10;
const defaultBucket = [1, 1, 1];
const defaultBuckets = new Array(width * height).fill(defaultBucket);
const PolyaBiome = () => {
	const [buckets, setBuckets] =
		useState<[number, number, number][]>(defaultBuckets);
	const [colors, setColors] = useState([<></>]);
	const handleRefreshBiomes = useCallback(() => {
		let newBuckets = buckets;
		newBuckets = JSON.parse(JSON.stringify(buckets));
		const polyaUpdate = (i: number, j: number, k: number, color: number) => {
			const iteration = buckets[k].reduce((a, b) => a + b);
			let min = Infinity;
			let minC = -1;
			const source = normalize(buckets[k]);
			for (let c = 0; c < 3; c++) {
				if (c === color) continue;
				if (source[c] < min) {
					minC = c;
					min = source[c];
				}
			}
			for (let I = i - 1; I <= i + 1; I++) {
				if (I < 0) continue;
				if (I >= width) continue;
				for (let J = j - 1; J <= j + 1; J++) {
					if (J < 0) continue;
					if (J >= height) continue;
					const K = width * I + J;
					if (I === i && J === j) {
						newBuckets[K][color]++;
					} else {
						newBuckets[K][minC] += 10;
					}
				}
			}
		};
		let k = 0;
		let res = [<></>];
		for (let i = 0; i < width; i++) {
			let row = [];
			for (let j = 0; j < height; j++) {
				const total = buckets[k].reduce((a, b) => a + b);
				let r = Math.random() * total;
				let color = -1;
				while (r > 0) {
					color++;
					r -= buckets[k][color];
				}
				polyaUpdate(i, j, k, color);
				let colorString = "red";
				switch (color) {
					case 0:
						break;
					case 1:
						colorString = "green";
						break;
					case 2:
						colorString = "blue";
						break;
					default:
						throw new Error("out of bounds color");
				}
				row.push(
					<td style={{ backgroundColor: colorString }}>
						{normalize(buckets[k])
							.map((a) => a.toFixed(0))
							.join(",")}
					</td>
				);
				k++;
			}
			res.push(<tr>{row}</tr>);
		}
		setColors(res);
		setBuckets(newBuckets);
		debugger;
	}, [buckets]);
	return (
		<div>
			<button onClick={handleRefreshBiomes}>Refresh Biomes</button>
			<table>{colors}</table>
		</div>
	);
};

function normalize(b: [number, number, number]) {
	let total = b[0] + b[1] + b[2];
	let res = b.map((a) => (a / total) * 100);
	return res;
}
export default PolyaBiome;
