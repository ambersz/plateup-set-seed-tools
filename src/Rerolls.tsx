import { Shop } from "./reverse-engineered/shop.ts";
import { Unlocks } from "./db/unlocks.ts";
import { playerInsides, spawnInsides } from "./main.tsx";

const Rerolls = () => {
	const seed = "t4tmhm8r";
	let spawns = [];
	const shop = new Shop(seed, 0);
	shop.Cards.push(Unlocks.filter((u) => u.Name === "Breakfast")[0]);
	const configs = [];
	for (const playerInside of playerInsides) {
		for (const spawnInside of spawnInsides) {
			configs.push({
				blueprintCount: 5,
				playerInside,
				spawnInside,
			});
		}
	}
	for (let day = 1; day < 15; day++) {
		spawns.push(configs.map((c) => shop.getAppliances([c], day)));
	}
	return (
		<>
			{spawns.map((s) => (
				<div>
					{s.map((c) => (
						<div>{c.map((a) => a.Name).join(", ")}</div>
					))}
				</div>
			))}
		</>
	);
};
