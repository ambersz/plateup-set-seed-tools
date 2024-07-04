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
	});
	return courses[0] + courses[1] + courses[2];
}

type CourseInfoParams = {
	starters: number;
	main: boolean;
	doubleOrderChance: number;
	desserts: number;
	groupSizes: number[];
};
const InfoByCourseCache: { [key: string]: CourseInfoResults } = {};
type CourseInfoResults = [[number, number, number], [number, number, number]];

export function InfoByCourse(p: CourseInfoParams): CourseInfoResults {
	const { starters, main, doubleOrderChance, desserts, groupSizes } = p;
	const key = [starters, main, doubleOrderChance, desserts, groupSizes].join(
		"|"
	);
	if (InfoByCourseCache[key]) return InfoByCourseCache[key];
	let courses: [number, number, number] = [0, 0, 0];
	let dishes: [number, number, number] = [0, 0, 0];
	// base order chance
	if (starters > 0) {
		courses[0] = 1;
		dishes[0] = groupSizes.reduce(
			(d, groupSize) => d + 1 + (groupSize - 1) * (1 - 0.75 ** starters),
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
		courses[2] = 1 - 0.75 ** desserts;
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
	});
	return dishes[0] + dishes[1] + dishes[2];
}
