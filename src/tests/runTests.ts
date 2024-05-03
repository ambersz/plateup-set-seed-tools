import { RestaurantSettings, Unlocks } from "../workers/db/unlocks";
import { Run } from "../workers/reverse-engineered/run";

export function customerCountTests() {
	const seed = "az2xslfr";
	const cards =
		"Burgers, Closing Time?, Charming, Advertising, Medium Groups, Large Groups"
			.split(", ")
			.map((n) => {
				return (
					Unlocks.filter((a) => a.Name === n)[0] ??
					RestaurantSettings.filter((a) => a.Name === n)[0]
				);
			});
	const run = new Run(seed, [cards[0]], cards.slice(1));
	run.playerCount = 1;
	const expectedGroups = [
		[1, 2, 2, 2],
		[2, 1, 1, 2, 2],
		[1, 2, 1, 2, 2, 2],
		// [1, 2, 1, 2, 1, 1, 1],
		[2, 1, 1, 2, 1, 1, 2, 1],
		[2, 2, 1, 2, 2, 1, 2, 1],
		[2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2],
		[1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2],
		[2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1],
		[2, 2, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1],
		[2, 4, 3, 2, 2, 3, 3, 2, 3, 2],
		[2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2],
		[3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 4],
		[4, 6, 6, 5, 4, 4, 6, 6],
		[4, 6, 6, 5, 6, 4, 6, 5, 6],
		[6, 4, 4, 4, 5, 5, 4, 6, 5, 4],
	];
	for (let day = 1; day <= 15; day++) {
		const err = expectCustomerCount(run, day, expectedGroups[day - 1]);
		if (err) {
			console.error(err);
			return false;
		}
	}
	console.log("customer count tests passed!");
	return true;
}

function expectCustomerCount(run: Run, day: number, expectedGroups: number[]) {
	const actualGroups = run.getGroupSizes(day);
	if (expectedGroups.length !== actualGroups.length) {
		console.log({ expectedGroups, actualGroups });
		return `expected ${expectedGroups.length} groups but simulated ${actualGroups.length} groups on day ${day}`;
	}
	for (let i = 0; i < expectedGroups.length; i++) {
		if (expectedGroups[i] !== actualGroups[i]) {
			return `expected ${expectedGroups[i]} customers in group ${
				i + 1
			} of day ${day} but simulated ${actualGroups[i]} customers`;
		}
	}
	return "";
}
