import { useState } from "preact/hooks";
import "./SaveScumCabinetLayouts.css";
const ORDER = [
	[6, 2, 5],
	[3, 0, 1],
	[8, 4, 7],
];
function getLayouts(
	cabinets: number,
	targets: number
): import("preact").ComponentChildren {
	const p = 8 - cabinets + targets;
	const minp = 8 - cabinets + 1;
	let minEst = 100;
	for (let i = 0; i < targets; i++) {
		minEst *= (minp + i) / 8;
	}
	let res = [];
	for (let offset = 0; offset < 8; offset++) {
		res.push(
			<>
				<table>
					<tbody>
						{ORDER.map((row) => (
							<tr>
								{row
									.map((i) => {
										if (!i) return "R";
										const j = (i + offset) % 8;
										// if (!j) return p.toString();
										if (j < targets) return "T";
										if (j < cabinets) return "C";
										return "\xa0";
										// return <>&nbsp;</>;
									})
									.map((a) => (
										<td>{a}</td>
									))}
							</tr>
						))}
					</tbody>
				</table>
				{/* <br /> */}
			</>
		);
	}
	return (
		<div>
			{targets > 1 ? (
				<>
					{minEst.toFixed(2)}-{((p / 8) ** targets * 100).toFixed(2)}% chance of
					researching all the scum targets before researching other cabinets.
					(Range because I can't be bothered to figure out the actual
					probability)
				</>
			) : (
				<>
					{((p / 8) * 100).toFixed(2)}% chance of researching the scum target
					first.
				</>
			)}
			<div>{res}</div>
		</div>
	);
}
const SaveScumCabinetLayouts = () => {
	const [cabinets, setCabinets] = useState(2);
	const [targets, setTargets] = useState(1);
	return (
		<div>
			<label for="cabinets">Number of Blueprint Cabinets: </label>
			<input
				type="number"
				id="cabinets"
				defaultValue={cabinets.toString()}
				onChange={(e) => {
					const target = e.target as HTMLInputElement;
					const orig = Number(target.value);
					const clamped = Math.min(7, Math.max(targets + 1, orig));
					setCabinets(clamped);
					if (clamped !== orig) target.value = clamped.toString();
				}}
			/>
			<br />
			<label for="targets">Number of scum targets: </label>
			<input
				type="number"
				id="targets"
				defaultValue={targets.toString()}
				onChange={(e) => {
					const target = e.target as HTMLInputElement;
					const orig = Number(target.value);
					const clamped = Math.min(cabinets - 1, Math.max(1, orig));
					setTargets(clamped);
					if (clamped !== orig) target.value = clamped.toString();
				}}
			/>
			<div>{getLayouts(cabinets, targets)}</div>
		</div>
	);
};

export default SaveScumCabinetLayouts;
