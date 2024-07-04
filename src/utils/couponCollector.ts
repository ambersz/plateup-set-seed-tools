const couponMemo: { [key: string]: number } = {};
function getKeyFromGoals(goals: number[]) {
	return goals.sort((a, b) => a - b).join(",");
}

function monteCarloGuessCouponSol(goals: number[], iterations: number = 1000) {
	const m = goals.length;
	let i = iterations;
	let n = 0;
	while (i--) {
		let found = [...goals];
		while (found.some((a) => a > 0)) {
			found[Math.floor(Math.random() * m)]--;
			n++;
		}
	}
	return n / iterations;
}

/**
 *
 * @param goals
 * @param flex consider it done when I have this many under
 * @returns
 */
function getExpectedCoupons(goals: number[], _flex: number = 0): number {
	if (!goals.length) return 0;
	const key = getKeyFromGoals(goals);
	if (couponMemo[key] === undefined)
		couponMemo[key] = monteCarloGuessCouponSol(goals);
	console.log({ goals, res: couponMemo[key] });
	return couponMemo[key];
}

export default getExpectedCoupons;
