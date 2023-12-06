import { render } from "preact";
import { useState } from "preact/compat";
import "./index.css";
import { RerollConfig, Shop } from "./reverse-engineered/shop.ts";
import { Unlocks } from "./db/unlocks.ts";
import Appliances from "./db/appliances.ts";
export const playerInsides = [true, false];
export const spawnInsides: [true, false] = [true, false];

function getRerollCapFromDay(day: number) {
	// return [2, 4, 6, 7, 8, 10, 11, 13, 15, 16, 18, 20, 22, 24, 26][day - 1] + 1;
	return (
		[5, 8, 10, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25][day - 1] + 1
	);
}
/*
Columns: Different Spawn Configs x different reroll configs
Rows: assume reroll config stays the same, and number of blueprints rerolled stays the same, reroll N times, showing 2x ghost blueprints


Backend:
Convert from a reroll path into an id-- exactly how many times I need to advance the prng before running the blueprint search.
Separate function that takes the seed, day, id, runs the prng, and spits out the blueprints 
	(or just the blueprint arrays? And have a separte function handle which blueprints are legal to spawn?)

*/
export const weeklyCards = [
	"Breakfast",
	,
	,
	"Breakfast Eggs",
	,
	"Exclusive",
	"Breakfast Extras",
	,
	,
	"Breakfast Beans",
	,
	,
	"Pumpkin Seed",
];
const Weekly = ({
	seed,
	day = 1,
	blueprintCount,
	upgradeChance,
	ownedAppliances,
	cardsByDay,
}: {
	seed: string;
	day: number;
	blueprintCount: number;
	upgradeChance: number;
	ownedAppliances: { [applianceName: string]: boolean };
	cardsByDay: (string | undefined)[];
}) => {
	console.log({ ownedAppliances });
	const shop = new Shop(seed, upgradeChance);
	for (let i = 0; i <= day; i++) {
		if (cardsByDay[i]) {
			const card = Unlocks.filter((u) => u.Name === cardsByDay[i])[0];
			card && shop.addCard(card);
		}
	}
	const ownedApplianceObjects = Object.entries(ownedAppliances)
		.filter((a) => a[1])
		.map((a) => a[0])
		.map((n) => Appliances.filter((a) => a.Name === n)[0]);
	for (const a of ownedApplianceObjects) {
		a && shop.OwnedAppliances.push(a);
	}
	console.log(shop.OwnedAppliances);
	let spawnConfigs: RerollConfig[] = [];
	for (const spawnInside of spawnInsides) {
		for (const playerInside of playerInsides) {
			spawnConfigs.push({
				spawnInside,
				playerInside: spawnInside ? undefined : playerInside,
				blueprintCount,
			} as RerollConfig);
			if (spawnInside) break;
		}
	}
	const rerollConfigs: RerollConfig[][] = [];
	let headerConfigs: { run: number; val?: boolean }[][] = [[], [], [], []];
	// spawnConfigs.map(a => ([a]));
	for (let i = 0; i < spawnConfigs.length; i++) {
		for (let j = 0; j < spawnConfigs.length; j++) {
			rerollConfigs.push([spawnConfigs[i], spawnConfigs[j]]);
			const headerVals = [
				spawnConfigs[i].spawnInside,
				spawnConfigs[i].playerInside,
				spawnConfigs[j].spawnInside,
				spawnConfigs[j].playerInside,
			];
			for (let h = 0; h < headerVals.length; h++) {
				if (
					headerConfigs[h].length &&
					// @ts-expect-error
					headerConfigs[h].at(-1).val === headerVals[h]
				) {
					// @ts-expect-error
					headerConfigs[h].at(-1).run += 1;
				} else {
					headerConfigs[h].push({
						val: headerVals[h],
						run: 1,
					});
				}
			}
		}
	}
	let bps = [];
	const NORMAL_BLUEPRINT_COUNT = blueprintCount;
	const GHOST_BLUEPRINT_COUNT = 4;
	const CAP = getRerollCapFromDay(day);
	console.log({ day, CAP });
	for (let rerollNumber = 0; rerollNumber < CAP; rerollNumber++) {
		const rerollBPs = [];
		for (const config of rerollNumber
			? rerollConfigs
			: rerollConfigs.map((a) => [a[0]])) {
			const configWithGhostPrints: RerollConfig[] = [...config];
			rerollNumber &&
				configWithGhostPrints.splice(-1, 1, {
					...(configWithGhostPrints.at(-1) as RerollConfig),
					blueprintCount: NORMAL_BLUEPRINT_COUNT + GHOST_BLUEPRINT_COUNT,
				});
			rerollBPs.push(
				shop.getAppliances(configWithGhostPrints, day).map((a) => a.Name)
			);
		}
		bps.push(rerollBPs);
		if (rerollNumber) {
			for (let i = 0; i < rerollConfigs.length; i++) {
				rerollConfigs[i].push(rerollConfigs[i][rerollConfigs[i].length - 1]);
			}
		}
	}
	const getHeaderTitle = (index: number, val?: boolean) => {
		switch (index) {
			case 0:
				return val ? "Spawn Inside" : "Spawn Outside";
			case 1:
				return val === undefined
					? ""
					: val
					? "Stand Inside at End of Day"
					: "Everyone Outside at End of Day";
			case 2:
				return val ? "Spawn Inside for Rerolls" : "Spawn Outside for Rerolls";
			case 3:
				return val === undefined
					? ""
					: val
					? "Someone Inside when Rerolling"
					: "Everyone Outside when Rerolling";
			default:
				throw new Error("Too Many Headers");
		}
	};
	return (
		<table>
			<thead>
				{headerConfigs.map((headerConfigs, i) => {
					return (
						<tr>
							{!i && (
								<th colSpan={1} rowSpan={4}>
									Reroll #
								</th>
							)}
							{headerConfigs.map(
								(c) =>
									c.val !== undefined && (
										<th
											colSpan={c.run}
											rowSpan={
												getHeaderTitle(i, c.val).indexOf("Spawn Inside") > -1
													? 2
													: 1
											}
											scope="colgroup"
										>
											{getHeaderTitle(i, c.val)}
										</th>
									)
							)}
						</tr>
					);
				})}
			</thead>
			{bps.map((b, i) => {
				return (
					<tr>
						<th>{i ? i : `Spawn`}</th>
						{!i ? (
							<td style="text-align:center;" colSpan={16}>
								{b[0].join(", ")}
							</td>
						) : (
							b.map((bps) => (
								<td colspan={1}>
									{bps.map((bp, i) => (
										<span class={i < NORMAL_BLUEPRINT_COUNT ? "" : "ghost"}>
											{bp + (i < bps.length - 1 ? ", " : "")}
										</span>
									))}
								</td>
							))
						)}
					</tr>
				);
			})}
		</table>
	);
};
const StapleWhenMissingBPs = ["Blueprint Cabinet", "Plates", "Research Desk"];

const defaultOwnedAppliances: { [applianceName: string]: boolean } = {};
for (const a of StapleWhenMissingBPs) {
	defaultOwnedAppliances[a] = false;
}
defaultOwnedAppliances["Blueprint Cabinet"] = true;

// const seedD = "az95tz5z";
const seedD = "t4tmhm8r";
const WeeklyForm = () => {
	// const seed = "azjugbno";
	const [seed, setSeed] = useState(seedD);
	const [day, setDay] = useState(1);
	const [ownedAppliances, setOwnedAppliances] = useState(
		defaultOwnedAppliances
	);
	let cardsByDay: (string | undefined)[] = [];
	switch (seed) {
		case "az95tz5z":
			cardsByDay = [
				"Stir Fry",
				"Broccoli",
				"Steak Stir Fry",
				"Mashed Potato",
				"Mushroom Stir Fry",
				"Affordable",
				"Ice Cream",
				"Herd Mentality",
				"Roast Potato",
				"Health and Safety",
				"Victorian Standards",
				"Instant Service",
				"All You Can Eat",
				"Bamboo",
				"Chips",
			];
			break;
		case "t4tmhm8r":
			cardsByDay = weeklyCards;
			break;
		default:
			cardsByDay = [];
			break;
	}
	const props = {
		seed,
		day,
		upgradeChance: 0,
		blueprintCount: 5,
		ownedAppliances,
		cardsByDay,
	};
	const handleInputChange: HTMLInputElement["onchange"] = (e) => {
		setDay(Number((e.target as HTMLInputElement).value));
	};
	const handleSeedChange: HTMLInputElement["onchange"] = (e) => {
		setSeed((e.target as HTMLInputElement).value);
	};
	const handleCheckChange: HTMLInputElement["onchange"] = (e) => {
		const target = e.target as HTMLInputElement;
		setOwnedAppliances((p) => ({ ...p, [target.id]: target.checked }));
	};
	return (
		<>
			<h3>
				Seed: <input value={seed} disabled onChange={handleSeedChange} />
			</h3>
			<label>Shop after completing day </label>
			<input
				style="border:none;width:2.5em"
				type={"number"}
				value={day}
				onChange={handleInputChange}
			/>
			<div>
				{StapleWhenMissingBPs.map((a) => {
					return (
						<div style="margin:5	px">
							<label for={a}>Own {a}?</label>
							<input
								type="checkbox"
								checked={ownedAppliances[a]}
								id={a}
								onChange={handleCheckChange}
							/>
						</div>
					);
				})}
			</div>
			<Weekly {...props} />
		</>
	);
};

render(<WeeklyForm />, document.getElementById("app")!);
