// @ts-nocheck
import { useState } from "preact/hooks";

const CourseOrders = () => {
	const [starters, setStarters] = useState(0);
	const [mains, setMains] = useState(1);
	const [sides, setSides] = useState(0);
	const [desserts, setDesserts] = useState(0);
	const [ayce, setAYCE] = useState(0); // 0 for nothing, 1 for AYCE, 2 for AYCE + Double Helpings

	const groups =
		0.85 ** (desserts + sides + mains + starters - 1) /
		(1 + (desserts ? 0.25 : 0) + (starters ? 0.25 : 0));
	const baseOrderFailChance = 1 - 0.25 * (ayce === 2 ? 1.5 : 1);
	return (
		<>
			<div>
				<label for="starters">Number of Starters</label>
				<input
					id="starters"
					type="number"
					onChange={(e) => {
						const target = e.target as HTMLInputElement;
						let value = target.value;
						if (value !== target.value) target.value = value;
						setStarters(Number(value));
					}}
					defaultValue="0"
				/>
				<label for="mains">Number of Mains</label>
				<input
					id="mains"
					type="number"
					onChange={(e) => {
						const target = e.target as HTMLInputElement;
						let value = target.value;
						if (value !== target.value) target.value = value;
						setMains(Number(value));
					}}
					defaultValue="1"
				/>
				<label for="sides">Number of Sides</label>
				<input
					id="sides"
					type="number"
					onChange={(e) => {
						const target = e.target as HTMLInputElement;
						let value = target.value;
						if (value !== target.value) target.value = value;
						setSides(Number(value));
					}}
					defaultValue="0"
				/>
				<label for="desserts">Number of Desserts</label>
				<input
					id="desserts"
					type="number"
					onChange={(e) => {
						const target = e.target as HTMLInputElement;
						let value = target.value;
						if (value !== target.value) target.value = value;
						setDesserts(Number(value));
					}}
					defaultValue="0"
				/>
			</div>
			<div>
				Reductions:{" "}
				{desserts + sides + mains + starters + ayce + (ayce ? 1 : 0)}
				Proportion of reduction-less groups: {groups}
				Expected Starters Ordered:{" "}
				{groups + (groups / 2) * (1 - baseOrderFailChance ** starters)}
				Expected Sides Ordered:{" "}
				{groups * 1.5 * (1 - baseOrderFailChance ** sides)}
				<table>
					<thead>
						<tr>
							<td>Expected Number of</td>
							<td>Courses</td>
							<td>Dishes</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Starters</th>
							<td>{starters ? groups : 0}</td>
							<td>
								{starters
									? groups +
									  (groups / 2) * (1 - baseOrderFailChance ** starters)
									: 0}
							</td>{" "}
						</tr>
						<tr>
							<th>Sides</th>
							<td>N/A</td>
							<td>{groups * 1.5 * (1 - baseOrderFailChance ** sides)}</td>
						</tr>
						<tr>
							<th>Dessert</th>
							<td>
								{desserts
									? mains
										? groups * (1 - baseOrderFailChance ** desserts)
										: 1
									: 0}
							</td>
							<td>{groups * 1.5 * (1 - baseOrderFailChance ** desserts)}</td>
						</tr>
					</tbody>
				</table>
				Total Courses:{" "}
				{groups *
					((starters ? 1 : 0) +
						(mains ? 1 : 0) +
						(1 - baseOrderFailChance ** desserts))}
			</div>
		</>
	);
};

export default CourseOrders;
/*
() => {
	return (
		<>
			<label for="$1">Number of \U$2$3</label>
			<input
				id="$1"
				type="number"
				onChange={(e) => {
					const target = e.target as HTMLInputElement;
					let value = target.value;
					if (value !== target.value) target.value = value;
					set\U$2$3(Number(value));
				}}
				defaultValue="0"
			/>
		</>
	);
};

//*/
