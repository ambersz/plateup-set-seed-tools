import { render } from "preact";
import "./index.css";
import { usePersistentState } from "./hooks/usePersistentState";
import { useEffect, useState } from "preact/hooks";
import { FindNewUnlocks } from "./workers/reverse-engineered/cards";
import { Unlock } from "./kitchenTypes";
import { DishType } from "./kitchenEnums";
import { getCardPaths } from "./getCardPaths";
import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
const candidates = JSON.parse(
	'[{"seed":"azqmd3mv","spawnDays":[1,4,6,8,13,14]},{"seed":"az9iy1h6","spawnDays":[3,4,7,8,9,14]},{"seed":"azifeibc","spawnDays":[2,4,6,8,14]},{"seed":"aznmaxml","spawnDays":[3,6,7,8,11]},{"seed":"azaery2b","spawnDays":[2,3,6,9,13]},{"seed":"aziwnlgv","spawnDays":[2,4,6,8,14]},{"seed":"azsuteq7","spawnDays":[1,3,4,7,8]},{"seed":"azv871pt","spawnDays":[3,4,6,9,11]},{"seed":"azkegtpt","spawnDays":[1,3,4,6,11,13]},{"seed":"azt5ub4p","spawnDays":[1,2,3,6,9,11]},{"seed":"az5ig7hw","spawnDays":[1,2,4,6,11,12]},{"seed":"aznxv1d2","spawnDays":[1,2,6,7,9,13]},{"seed":"azjgfb6v","spawnDays":[1,2,3,6,11,12]},{"seed":"azqe41xe","spawnDays":[1,2,4,6,8,11]},{"seed":"az3dns74","spawnDays":[1,3,6,7,8,14]},{"seed":"az1ocsth","spawnDays":[2,3,4,7,8,12]},{"seed":"azcrgmjt","spawnDays":[1,3,4,6,7,14]},{"seed":"az6iiakx","spawnDays":[1,2,4,6,8,11,13,14]},{"seed":"azcv3xuo","spawnDays":[1,2,3,6,7,9]},{"seed":"azrf6rd9","spawnDays":[3,4,6,7,8,14]},{"seed":"azeotcjl","spawnDays":[2,4,6,7,9,13,14]},{"seed":"azqs1mjy","spawnDays":[1,4,6,7,9,12]},{"seed":"az1iy7mv","spawnDays":[3,4,6,7,11,12]},{"seed":"azyteerr","spawnDays":[1,3,4,6,9,13]},{"seed":"azeo2ejl","spawnDays":[2,4,6,7,9,13,14]},{"seed":"azaaslq6","spawnDays":[1,4,6,7,8,12]},{"seed":"azrurmhd","spawnDays":[],"daysLate":700},{"seed":"aziqkgrn","spawnDays":[6,11],"daysLate":512},{"seed":"az7swpsp","spawnDays":[2,11],"daysLate":508},{"seed":"azlnb82l","spawnDays":[6,8,14],"daysLate":419},{"seed":"aziesq3h","spawnDays":[6,7,9],"daysLate":413},{"seed":"azwqvz39","spawnDays":[4,7,9,13],"daysLate":318},{"seed":"az87f418","spawnDays":[1,4,8,11,12],"daysLate":215},{"seed":"azlw2zws","spawnDays":[1,6,8,9,11],"daysLate":214},{"seed":"az4p6spc","spawnDays":[3,6,7,8,11],"daysLate":213},{"seed":"az1yx897","spawnDays":[2,3,4,11,12],"daysLate":210},{"seed":"azizbqz8","spawnDays":[1,2,3,9,12],"daysLate":208},{"seed":"azczy5qi","spawnDays":[1,4,7,8,11,12],"daysLate":111},{"seed":"az4gu2gs","spawnDays":[1,3,4,7,11,13],"daysLate":107},{"seed":"azqh4c26","spawnDays":[1,2,4,6,8,13,14],"daysLate":3},{"seed":"az9twbb8","spawnDays":[1,3,7,8,13,14],"daysLate":114},{"seed":"azyllyz6","spawnDays":[2,6,7,11,13,14],"daysLate":120},{"seed":"azss62bw","spawnDays":[1,6,9,11,12,14],"daysLate":121},{"seed":"aznef8xm","spawnDays":[1,3,4,9,13,14],"daysLate":112},{"seed":"azi12msu","spawnDays":[6,7,8,11,12,13],"daysLate":124},{"seed":"azpi1b3e","spawnDays":[1,6,8,9,11,13,14],"daysLate":16},{"seed":"azjexncw","spawnDays":[2,4,7,9,13,14],"daysLate":116},{"seed":"az17hnan","spawnDays":[4,6,7,9,11,12],"daysLate":116},{"seed":"az4b45qz","spawnDays":[2,3,4,9,11,12],"daysLate":108},{"seed":"az62q64c","spawnDays":[1,6,7,8,11,14],"daysLate":115},{"seed":"azbztz8d","spawnDays":[2,4,7,8,11,12],"daysLate":111},{"seed":"azhajvpn","spawnDays":[1,4,6,8,13,14],"daysLate":114},{"seed":"azr6a2pt","spawnDays":[1,2,6,9,12,14],"daysLate":113},{"seed":"azozb3yf","spawnDays":[1,6,7,8,11,14],"daysLate":115},{"seed":"aznqdis3","spawnDays":[1,6,8,9,11,12],"daysLate":115},{"seed":"azbz6hj6","spawnDays":[3,4,6,7,8,9],"daysLate":106},{"seed":"azv8fcoh","spawnDays":[2,3,4,8,9,12],"daysLate":105},{"seed":"az2tbxr1","spawnDays":[1,2,3,9,11,14],"daysLate":110},{"seed":"azxyivvf","spawnDays":[3,6,7,9,11,13],"daysLate":116},{"seed":"azmvq2j9","spawnDays":[2,4,6,7,8,12],"daysLate":106},{"seed":"azy6mf42","spawnDays":[1,3,4,9,11,12],"daysLate":108},{"seed":"azv5nfad","spawnDays":[3,4,6,9,11,14],"daysLate":114},{"seed":"azjy6bdp","spawnDays":[2,4,6,8,11,14],"daysLate":112},{"seed":"az45t8sp","spawnDays":[1,2,6,8,11,12],"daysLate":109},{"seed":"azjhv2xz","spawnDays":[1,3,4,7,8,11,12],"daysLate":2},{"seed":"azrqb6d5","spawnDays":[1,8,9,11,12,13,14],"daysLate":22},{"seed":"az685yp2","spawnDays":[1,4,6,8,9,11,13],"daysLate":7},{"seed":"az5x9zmf","spawnDays":[2,3,4,6,7,13],"daysLate":102},{"seed":"azrd8izb","spawnDays":[4,6,7,11,12,13,14],"daysLate":20},{"seed":"azbzwiau","spawnDays":[3,4,8,11,12,13,14],"daysLate":18},{"seed":"azcfolhs","spawnDays":[1,3,4,11,12,13,14],"daysLate":12},{"seed":"azrjqg6f","spawnDays":[3,4,6,8,9,12,14],"daysLate":9},{"seed":"azahbsxk","spawnDays":[1,2,6,8,9,13,14],"daysLate":8},{"seed":"az27ubvn","spawnDays":[1,2,3,6,9,11],"daysLate":102},{"seed":"az96ushd","spawnDays":[1,2,3,4,6,7],"daysLate":100}, { "seed": "azo4ji4y", "spawnDays": [ 1, 3, 4, 6, 7, 13, 14 ], "daysLate": 2 }, { "seed": "az37lbkc", "spawnDays": [ 3, 4, 6, 9, 11, 12, 14 ], "daysLate": 12 }, { "seed": "azubdmhy", "spawnDays": [ 2, 4, 6, 7, 12, 13, 14 ], "daysLate": 11 }, { "seed": "az8qifvb", "spawnDays": [ 1, 3, 4, 7, 8, 12, 13 ], "daysLate": 3 }, { "seed": "azf7ax9k", "spawnDays": [ 1, 2, 3, 6, 8, 9, 12 ], "daysLate": 1 }, { "seed": "azzredvp", "spawnDays": [ 1, 2, 4, 9, 11, 12, 14 ], "daysLate": 8 }, { "seed": "azd8xlxx", "spawnDays": [ 3, 4, 6, 7, 11, 13, 14 ], "daysLate": 11 }, { "seed": "azy9a52c", "spawnDays": [ 1, 3, 4, 7, 11, 12, 13 ], "daysLate": 6 }, { "seed": "az4eir58", "spawnDays": [ 1, 4, 8, 9, 11, 12, 13 ], "daysLate": 13 }, { "seed": "azx96rka", "spawnDays": [ 2, 3, 4, 6, 9, 13, 14 ], "daysLate": 4 }, { "seed": "azwzeexu", "spawnDays": [ 6, 7, 8, 9, 11, 12, 13 ], "daysLate": 20 }, { "seed": "azghpphv", "spawnDays": [ 1, 6, 7, 11, 12, 13, 14 ], "daysLate": 18 }, { "seed": "az6lww4j", "spawnDays": [ 4, 7, 9, 11, 12, 13, 14 ], "daysLate": 23 }, { "seed": "az6sdwmn", "spawnDays": [ 1, 2, 4, 6, 7, 9, 14 ], "daysLate": 0 }, { "seed": "azpng6tm", "spawnDays": [ 2, 4, 6, 7, 9, 12, 13 ], "daysLate": 7 }, { "seed": "azqizm22", "spawnDays": [ 4, 6, 9, 11, 12, 13, 14 ], "daysLate": 22 }, { "seed": "az5rzlje", "spawnDays": [ 1, 2, 6, 7, 8, 9, 11 ], "daysLate": 4 }, { "seed": "azgi5fqk", "spawnDays": [ 2, 6, 8, 9, 11, 12, 14 ], "daysLate": 15 }, { "seed": "az9dmdy2", "spawnDays": [ 3, 6, 7, 8, 9, 11, 13 ], "daysLate": 11 }, { "seed": "azltvvwz", "spawnDays": [ 1, 2, 3, 7, 9, 11, 14 ], "daysLate": 3 }]'
);
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
if (false) {
	const consider: { seed: string }[] = candidates.filter((cand) => {
		const c = new FindNewUnlocks(cand.seed);
		let cardPaths = getCardPaths(c);
		cardPaths = cardPaths.filter((a) =>
			a.some((a) => a.Name === "Dumplings" || a.Name.includes("Stuffing"))
		);
		cardPaths = cardPaths.filter((a) =>
			a.some((a, i) => i < 6 && a.DishType === DishType.Dessert)
		);
		cardPaths = cardPaths.filter((a) =>
			a.some((a, i) => i < 6 && a.DishType === DishType.Starter)
		);
		cardPaths = cardPaths.map((a) => a.map((a) => a.Name).join(",")).join("\n");
		cardPaths.length && console.log(cand.seed + ":\n" + cardPaths);
		return !!cardPaths.length;
	});
	console.log({ consider });
	console.log(consider.map((a) => a.seed).join(", "));
}

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
			<input onChange={(e) => setSeed(e.target.value)} value={seed} />
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
