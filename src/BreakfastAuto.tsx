const BreakfastAuto = () => {
	type AutoInfo = {
		cookTime: number;
		burnTime: number;
		conveyTime: number;
		description: string[];
	};

	let queue: AutoInfo[] = [
		{ cookTime: 3, burnTime: 3, conveyTime: 1, description: ["grabber auto"] },
		{
			cookTime: 3,
			burnTime: 3,
			conveyTime: 0,
			description: ["instant portioning"],
		},
	];

	// hob, safety/heated mixer, danger
	let aspects: AutoInfo[][] = [
		[
			// {
			// 	cookTime: 1 / 0.75,
			// 	burnTime: 1 / 0.75,
			// 	conveyTime: 1,
			// 	description: ["Starter Hob"],
			// },
			{ cookTime: 1, burnTime: 1, conveyTime: 1, description: ["Regular Hob"] },
			{
				cookTime: 1 / 0.75,
				burnTime: Infinity,
				conveyTime: 1,
				description: ["Upgrade", "Safety Hob"],
			},
			{
				cookTime: 1 / 2,
				burnTime: 1 / 2,
				conveyTime: 1,
				description: ["Upgrade", "Danger Hob"],
			},
		],
		[
			{ cookTime: 1, burnTime: 1, conveyTime: 1, description: [] },
			{
				cookTime: 1 / 0.75,
				burnTime: 4,
				conveyTime: 1,
				description: ["Gas Limiter"],
			},
		],
		// [
		// 	{ cookTime: 1, burnTime: 1, conveyTime: 1, description: [] },
		// 	{
		// 		cookTime: 1 / 2,
		// 		burnTime: 1 / 4,
		// 		conveyTime: 1,
		// 		description: ["Gas Override"],
		// 	},
		// ],
		[
			{ cookTime: 1, burnTime: 1, conveyTime: 1, description: [] },
			{
				cookTime: 1,
				burnTime: 1 / 2,
				conveyTime: 1,
				description: ["High Standards"],
			},
		],
		[
			{ cookTime: 1, burnTime: 1, conveyTime: 1, description: [] },
			{
				cookTime: 1 / 0.8,
				burnTime: 1, // burn time is not increased by high quality
				conveyTime: 1,
				description: ["High Quality"],
			},
		],
	];

	for (const branches of aspects) {
		let newQueue = [];
		let current: AutoInfo | undefined;
		while ((current = queue.shift())) {
			for (const t of branches) {
				newQueue.push({
					cookTime: current.cookTime * t.cookTime,
					burnTime: current.burnTime * t.burnTime,
					conveyTime: current.conveyTime * t.conveyTime,
					description: current.description.concat(t.description),
				});
			}
		}
		queue = newQueue;
	}
	let sorted = queue
		.map((info) => {
			return {
				// ...info,
				// totalBurnTime: info.cookTime + info.burnTime + info.conveyTime,
				totalCookTime: info.cookTime + info.conveyTime,
				timeTilBackup:
					Math.max(2, info.cookTime + info.conveyTime) * 5 +
					info.cookTime +
					info.conveyTime +
					info.burnTime,
				description: info.description,
				// grabberTooSlow: info.cookTime + info.burnTime + info.conveyTime < 2,
			};
		})
		// .sort((a, b) => a.totalCookTime - b.totalCookTime)
		.sort((a, b) => {
			const backupAndBurn = b.timeTilBackup - a.timeTilBackup;
			const cookTimeComp = a.totalCookTime - b.totalCookTime;
			// return cookTimeComp || backupAndBurn;
			return backupAndBurn || cookTimeComp;
		});
	let i = 0;
	let bestCookTime = Infinity;
	let bestDescriptionLength = Infinity;
	while (i < sorted.length) {
		if (bestCookTime <= sorted[i].totalCookTime) {
			if (
				sorted[i].description.join(",") !== "grabber auto,Upgrade,Danger Hob" &&
				sorted[i].description.length >= bestDescriptionLength
			) {
				sorted.splice(i, 1);
			} else {
				i++;
			}
		} else {
			bestCookTime = Math.min(sorted[i].totalCookTime, bestCookTime);
			bestDescriptionLength = Math.min(
				bestDescriptionLength,
				sorted[i].description.length
			);
			i++;
		}
	}
	return (
		<>
			Pareto on cook vs backup/burn time (+"suboptimal" meta):
			{sorted.map((a) => (
				<div>{JSON.stringify(a)}</div>
			))}
		</>
	);
};

export default BreakfastAuto;
