import { render } from "preact";
import "./index.css";
import { usePersistentState } from "./hooks/usePersistentState";
import { useEffect, useState } from "preact/hooks";
import { FindNewUnlocks } from "./workers/reverse-engineered/cards";
import { Unlock } from "./kitchenTypes";
import { getCardPaths } from "./getCardPaths";

const CardPaths = () => {
	const [seed, setSeed] = usePersistentState("", "CARD_PATHS_SEED");
	const [cardPaths, setCardPaths] = useState<Unlock[][]>([]);
	useEffect(() => {
		const c = new FindNewUnlocks(seed);
		let queue: Unlock[][] = getCardPaths(c, undefined, false);
		setCardPaths(queue);
	}, [seed]);
	let rows = [[<></>]];
	rows.shift();
	for (let day = 0; day < cardPaths[0]?.length; day++) {
		if (!cardPaths.length) break;
		let current: string = "";
		let n = 0;
		let rowIndex = 0;
		for (let branch = 0; branch < cardPaths.length; branch++) {
			if (!cardPaths[branch] || !cardPaths[branch][day]) debugger;
			if (cardPaths[branch][day].Name === current) {
				n++;
			} else {
				if (current) {
					if (!rows[rowIndex]) rows[rowIndex] = [];
					rows[rowIndex].push(<td rowSpan={n}>{current}</td>);
				}
				current = cardPaths[branch][day].Name;
				rowIndex += n;
				n = 1;
			}
		}
		if (!rows[rowIndex]) rows[rowIndex] = [];
		rows[rowIndex].push(<td rowSpan={n}>{current}</td>);
		// render.push(<tr>{row}</tr>);
	}
	return (
		<>
			<input
				onChange={(e) => setSeed((e.target as HTMLInputElement).value)}
				value={seed}
			/>
			<table>
				<thead>
					<tr>
						<th>{seed}</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((a) => (
						<tr>{a}</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

render(
	<CardPaths />,
	// <SeedSearcher defaultSeed={"t4tmhm8r"} />,
	document.getElementById("app")!
);
