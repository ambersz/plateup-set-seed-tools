import { useState } from "preact/hooks";
import "./SaveScumCabinetLayouts.css";
import { ShuffleInPlace } from "../utils/utils";
const ORDER = [
	[6, 2, 5],
	[3, 0, 1],
	[8, 4, 7],
];
const RAND_CABS = new Array(8).fill(false);
RAND_CABS[0] = true;
RAND_CABS[1] = true;
ShuffleInPlace(RAND_CABS);
RAND_CABS.splice(0, 0, false);

const CalculateLayouts = () => {
	const [cabLocations, setCabLocations] = useState<boolean[]>(RAND_CABS);
	const p: number[] = new Array(8).fill(1);
	const min = cabLocations.reduce((m, cab, i) => {
		if (cab) return Math.min(m, i);
		return m;
	}, Infinity);
	for (let i = 0; i < p.length; i++) {
		if (!cabLocations[((i + min) % p.length) + 1]) {
			p[(i + min + 1) % p.length] += p[(i + min) % p.length];
			p[(i + min) % p.length] = 0;
		}
	}

	return (
		<div>
			<hr />
			<h3>Cabinet Probability Calculator</h3>
			<ul style={{ marginTop: -15 }}>
				AKA{" "}
				<i>I want to use my own layout-- just tell me which cabinet to use</i>
			</ul>

			<div>
				<table>
					{ORDER.map((r) => {
						return (
							<tr>
								{r.map((i) => {
									if (i === 0) {
										// research desk location
										return <td>R</td>;
									}
									return (
										<td style={{ minWidth: "2lh" }}>
											{((p[i - 1] / 8) * 100).toString().slice(0, 4)}%
											<br />
											<input
												type="checkbox"
												checked={!!cabLocations[i]}
												onChange={(e) => {
													const target = e.target as HTMLInputElement;
													setCabLocations((a) => {
														const copy = [...a];
														copy[i] = target.checked;
														return copy;
													});
												}}
											/>
										</td>
									);
								})}
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};
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
			<div>R: Research Desk</div>
			<div>T: Scum Target(s)</div>
			<div>C: Any other cabinets that contain researchable blueprints</div>
			<div>{res}</div>
		</div>
	);
}
const SaveScumCabinetLayouts = () => {
	const [cabinets, setCabinets] = useState(2);
	const [targets, setTargets] = useState(1);
	return (
		<div>
			<h3>Optimal Layouts</h3>
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
			<CalculateLayouts />
		</div>
	);
};

export default SaveScumCabinetLayouts;
