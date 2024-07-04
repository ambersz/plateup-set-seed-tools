// @ts-nocheck
const grid = [
	[1, 1],
	[1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
];

const allCoords = grid.flatMap((row, rowNumber) => {
	return row.map((column, columnNumber) => {
		// return `${rowNumber},${columnNumber}`;
		return [rowNumber, columnNumber];
	});
});

export function maximalAdjacencies() {
	// goal - what's the maximum number of seats I can fit in two separate tables?
	let queue = [];
}

function getAdjacencies(coords: [number, number][]) {
	let all = new Set<string>();
	for (const coord of coords) {
		for (const r of getAdjacentCoords(coord)) {
			all.add(r);
		}
	}
	for (const [x, y] of coords) {
		all.delete(`${x},${y}`);
	}
	return all.keys();
}
function getAdjacentCoords(coord: [number, number]) {
	const [x, y] = coord;
	let res: string[] = [];
	for (let i = x - 1; i <= x + 1; i++) {
		if (grid[i] === undefined) continue;
		for (let j = y - 1; j <= y + 1; j++) {
			if (!grid[i][j]) continue;
			res.push(`${i},${j}`);
		}
	}
	return res;
}
