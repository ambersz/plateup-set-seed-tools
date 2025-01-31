export function averageCourses({
	starters,
	main,
	doubleOrderChance,
	desserts,
	groupSizes,
}: CourseInfoParams) {
	const [courses] = InfoByCourse({
		starters,
		main,
		doubleOrderChance,
		desserts,
		groupSizes,
		sides: 0,
	});
	return courses[0] + courses[1] + courses[2];
}

type CourseInfoParams = {
	starters: number;
	main: boolean;
	doubleOrderChance: number;
	desserts: number;
	sides: number;
	groupSizes: number[];
};
const InfoByCourseCache: { [key: string]: CourseInfoResults } = {};
type CourseInfoResults = [
	[number, number, number], // [starter, main, dessert]
	[number, number, number, number] // [starters, mains, desserts, sides]
];

export function InfoByCourse(p: CourseInfoParams): CourseInfoResults {
	const { starters, main, doubleOrderChance, desserts, sides, groupSizes } = p;
	const key = [starters, main, doubleOrderChance, desserts, groupSizes].join(
		"|"
	);
	if (InfoByCourseCache[key]) return InfoByCourseCache[key];
	let courses: [number, number, number] = [0, 0, 0];
	let dishes: [number, number, number, number] = [0, 0, 0, 0];
	let sideOrderProbability = 1 - 0.75 ** sides;
	// base order chance
	if (starters > 0) {
		courses[0] = 1;
		let extraStarterProbability = 1 - 0.75 ** starters;
		if (doubleOrderChance === 0.5) {
			// double helpings increases extra starter order chance
			extraStarterProbability *= 1.25;
			sideOrderProbability *= 1.25;
		}
		dishes[0] = groupSizes.reduce(
			(d, groupSize) => d + 1 + (groupSize - 1) * extraStarterProbability,
			0
		);
	}
	const totalCustomerCounts = groupSizes.reduce((a, b) => a + b);
	if (main) {
		courses[1] = 1;
		dishes[1] = totalCustomerCounts;
	}
	if (desserts > 0) {
		dishes[2] = totalCustomerCounts;
		if (main) {
			courses[2] = 1 - 0.75 ** desserts;
			if (doubleOrderChance === 0.5) {
				// double helpings increases dessert order chance
				courses[2] *= 1.25;
			}
		} else {
			courses[2] = 1;
		}
	}

	// handle double orders
	let pOfDoubleOrderAvailable = 1;
	if (starters > 0) {
		courses[0] *= 1 + doubleOrderChance;
		pOfDoubleOrderAvailable *= 1 - doubleOrderChance;
		dishes[0] *= courses[0];
	}
	if (main) {
		courses[1] *= 1 + pOfDoubleOrderAvailable * doubleOrderChance;
		pOfDoubleOrderAvailable *= 1 - doubleOrderChance;
		dishes[1] *= courses[1];
		dishes[3] = dishes[1] * sideOrderProbability;
	}
	if (desserts > 0) {
		courses[2] *= 1 + pOfDoubleOrderAvailable * doubleOrderChance;
		pOfDoubleOrderAvailable *= 1 - doubleOrderChance;
		dishes[2] *= courses[2];
	}
	const res: CourseInfoResults = [courses, dishes];
	InfoByCourseCache[key] = res;
	return res;
	// returns expected number of courses ordered per group, and expected number of dishes ordered per group
}

export function SimulateCourses(p: CourseInfoParams): CourseInfoResults {
	const {
		starters,
		main: _, // TODO AZ: handle dessert base dish
		doubleOrderChance,
		desserts,
		sides,
		groupSizes,
	} = p;

	// if (InfoByCourseCache[key]) return InfoByCourseCache[key];
	let courses: [number, number, number] = [0, 0, 0];
	let dishes: [number, number, number, number] = [0, 0, 0, 0];
	let extraStarterProbability = 1 - 0.75 ** starters;
	let dessertOrderProbability = 1 - 0.75 ** desserts;
	let sideOrderProbability = 1 - 0.75 ** sides;
	if (doubleOrderChance === 0.5) {
		// double helpings modifies start and dessert order chance
		extraStarterProbability *= 1.25;
		dessertOrderProbability *= 1.25;
		sideOrderProbability *= 1.25;
	}
	const orderStarter = (groupSize: number) => {
		courses[0]++;
		dishes[0]++;
		for (let i = 0; i < groupSize - 1; i++) {
			if (Math.random() < extraStarterProbability) {
				dishes[0]++;
			}
		}
	};
	const orderMain = (groupSize: number) => {
		courses[1]++;
		dishes[1] += groupSize;
		for (let i = 0; i < groupSize; i++) {
			if (Math.random() < sideOrderProbability) {
				dishes[3]++;
			}
		}
	};
	const orderDessert = (groupSize: number) => {
		courses[2]++;
		dishes[2] += groupSize;
	};

	for (const groupSize of groupSizes) {
		let doubleOrdered = false;
		// always order starter
		if (starters > 0) {
			orderStarter(groupSize);
			if (!doubleOrdered && Math.random() < doubleOrderChance) {
				doubleOrdered = true;
				orderStarter(groupSize);
			}
		}
		orderMain(groupSize);
		if (!doubleOrdered && Math.random() < doubleOrderChance) {
			doubleOrdered = true;
			orderMain(groupSize);
		}
		if (desserts > 0) {
			if (Math.random() < dessertOrderProbability) {
				orderDessert(groupSize);
				if (!doubleOrdered && Math.random() < doubleOrderChance) {
					doubleOrdered = true;
					orderDessert(groupSize);
				}
			}
		}
	}
	const res: CourseInfoResults = [courses, dishes];
	// InfoByCourseCache[key] = res;
	return res;

	// returns simulated number of courses ordered, and simulated number of each dish ordered
}

export function averageDishes({
	starters,
	main,
	doubleOrderChance,
	desserts,
	groupSizes,
}: CourseInfoParams) {
	const [_, dishes] = InfoByCourse({
		starters,
		main,
		doubleOrderChance,
		desserts,
		groupSizes,
		sides: 0,
	});
	return dishes[0] + dishes[1] + dishes[2];
}
