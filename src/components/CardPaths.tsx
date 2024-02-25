import { useEffect, useState } from "preact/hooks";
import { FindNewUnlocks } from "../workers/reverse-engineered/cards";
import { Unlock } from "../kitchenTypes";
import { getCardPaths } from "../utils/getCardPaths";
import { GoalCardConfig } from "../workers/seedSearchWorker";
interface CardPathProps {
	chooseCardPath?: boolean;
	onSelectCardPath?: (selectedPath: Unlock[], index: number) => void;
	highlightCardPath?: number;
	seed: string;
	startingCards: Unlock[];
}
const noop = () => {};
export const CardPaths = ({
	chooseCardPath = false,
	onSelectCardPath = noop,
	highlightCardPath,
	seed,
	startingCards,
}: CardPathProps) => {
	const [cardPaths, setCardPaths] = useState<Unlock[][]>([]);
	useEffect(() => {
		const c = new FindNewUnlocks(seed);
		if (startingCards.length) debugger;
		let queue: Unlock[][] = getCardPaths(c, startingCards, false);
		setCardPaths(queue);
	}, [seed, startingCards]);
	let rows = [[<></>]];
	rows.shift();
	for (let day = 0; day < cardPaths[0]?.length; day++) {
		if (!cardPaths.length) break;
		let current: string = "";
		let n = 0;
		let highlight = highlightCardPath === 0;
		let rowIndex = 0;
		for (let branch = 0; branch < cardPaths.length; branch++) {
			if (!cardPaths[branch] || !cardPaths[branch][day]) debugger;
			if (cardPaths[branch][day].Name === current) {
				if (highlightCardPath === branch) highlight = true;
				n++;
			} else {
				if (current) {
					if (!rows[rowIndex]) rows[rowIndex] = [];
					rows[rowIndex].push(
						cell(
							n,
							current,
							rowIndex,
							highlight,
							chooseCardPath,
							day,
							cardPaths,
							highlightCardPath,
							branch - 1,
							onSelectCardPath
						)
					);
				}
				current = cardPaths[branch][day].Name;
				rowIndex += n;
				n = 1;
				highlight = branch === highlightCardPath;
			}
		}
		if (!rows[rowIndex]) rows[rowIndex] = [];
		rows[rowIndex].push(
			cell(
				n,
				current,
				rowIndex,
				highlight,
				chooseCardPath,
				day,
				cardPaths,
				highlightCardPath,
				cardPaths.length - 1,
				onSelectCardPath
			)
		);
		// render.push(<tr>{row}</tr>);
	}

	return (
		<>
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
export const defaultConfig: GoalCardConfig = { include: true, cards: [] };
function cell(
	n: number,
	current: string,
	rowIndex: number,
	highlight: boolean,
	chooseCardPath: boolean,
	day: number,
	cardPaths: Unlock[][],
	highlightCardPath: number | undefined,
	branch: number,
	onSelectCardPath: (selectedPath: Unlock[], index: number) => void
) {
	return (
		<td rowSpan={n}>
			<label for={current + rowIndex}>
				{highlight ? <b>{current}</b> : current}
			</label>
			{/* {current} */}
			{chooseCardPath && day === cardPaths[0].length - 1 && (
				<>
					<input
						id={current + rowIndex}
						type="checkbox"
						checked={highlightCardPath === branch}
						onChange={(e) => {
							e.preventDefault();
							onSelectCardPath(cardPaths[branch], branch);
						}}
					/>
				</>
			)}
		</td>
	);
}
