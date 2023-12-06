import { Shop } from "./reverse-engineered/shop.ts";
import { Unlocks } from "./db/unlocks.ts";
import { spawnInsides, playerInsides } from "./main.tsx";
import { chars } from "./Search.tsx";
import { origGoalItems } from "./Search.tsx";

const Search = () => {
	let res;
	let foundCopyDesk = false;
	let i = 0;
	let resSeed;
	let resBPs;
	const cookie = Unlocks.filter((u) => u.Name === "Cakes")[0];
	while (!foundCopyDesk) {
		i++;
		let seed = "az";
		while (seed.length < 8) {
			seed += chars[Math.floor(Math.random() * chars.length)];
		}
		const goalItems = [...origGoalItems];
		const shop = new Shop(seed, 0.25);
		shop.Cards.push(cookie);
		let allBPs = [];
		for (let day = 1; day <= 5; day++) {
			let bps;
			let bestCount = -Infinity;
			for (const spawnInside of spawnInsides) {
				for (const playerInside of playerInsides) {
					const candBps = shop
						.getAppliances(
							[
								{
									blueprintCount: 7,
									spawnInside,
									playerInside,
								},
								{
									blueprintCount: 9,
									spawnInside: true,
									playerInside: false,
								},
							],
							day
						)
						.map((b) => b.Name);
					let candCount = candBps.filter((b) => goalItems.some((g) => g === b)
					).length;
					if (candCount > bestCount) {
						bestCount = candCount;
						bps = candBps;
					}
				}
			}
			allBPs.push(bps);
			for (const bp of bps) {
				const i = goalItems.indexOf(bp);
				if (i > -1) goalItems.splice(i, 1);
			}
			if (!goalItems.length) break;
		}
		if (goalItems.length) continue;
		foundCopyDesk = true;
		res = allBPs;
		resSeed = seed;
	}
	return (
		<>
			Seed: {resSeed}
			<br />
			Seeds Searched: {i}
			<br />
			First Rerolls: {res?.map((a) => a.join(",")).join("; ")}
		</>
	);
};export const origGoalItems = [
	"Conveyor",
	"Freezer",
	// "Freezer",
	"Tray Stand",
	"Danger Hob",
	// "Portioner",
	"Portioner",
	"Rolling Pin",
	"Workstation",
	"Safety Hob",
	// "Grabber",
	"Grabber",
	// "Bar Table",
	// "Bar Table",
	// "Bar Table",
	"Bar Table",
	// "Conveyor",
	// "Combiner",
	"Combiner",
];
export const chars = "abcdefghijklmnopqrstuvwxyz123456789";

