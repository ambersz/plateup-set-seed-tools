import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "../workers/db/unlocks";
import { FindNewUnlocks } from "../workers/reverse-engineered/cards";
import { Unlock } from "../kitchenTypes";
const normalCardDays = [3, 5, 6, 9, 12, 15];
const turboCardDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
export function test(): boolean {
	const seed = "azqyj4nh";
	const expectedCards: [string, string][] = [
		["Black Coffee", "Ice Cream"],
		["Affordable", "Charming"],
		["Christmas Crackers", "Pizza"],
		["Turkey - Stuffing", "Nut Roast"],
		["Cherry Pie", "Dumplings"],
		["Savings", "Careful Accounting"],
	];
	const chosenCards = [
		"Ice Cream",
		"Affordable",
		"Christmas Crackers",
		"Turkey - Stuffing",
		"Dumplings",
	];
	const startingCards = [
		RestaurantSettings.filter((a) => a.Name === "Community")[0],
		Unlocks.filter((a) => a.Name === "Turkey")[0],
	];
	let ok = true;
	ok &&= testCards(seed, startingCards, expectedCards, chosenCards);
	ok &&= testCards(
		"azolmpfb",
		[
			RestaurantSettings.filter((a) => a.Name === "Turbo")[0],
			StartingDishes.filter((a) => a.Name === "Spaghetti")[0],
		],
		[
			["Roast Potato", "All You Can Eat"],
			["Ice Cream", "Medium Groups"],
			["Cheesy Spaghetti", "Instant Service"],
			["Onion Rings", "All You Can Eat"],
			["Charming", "Affordable"],
			["Chips", "High Expectations"],
			["Cheesy Spaghetti", "Simplicity"],
			["Corn on the Cob", "Tipping Culture"],
			["Onion Rings", "Tipping Culture"],
			["Mashed Potato", "Tipping Culture"],
			["Pumpkin Seed", "Photographic Memory"],
			["Apple Pies", "High Quality"],
			["Mandarin Starter", "High Standards"],
			["Cherry Pie", "Victorian Standards"],
		],
		[
			"Roast Potato",
			"Ice Cream",
			"Instant Service",
			"All You Can Eat",
			"Affordable",
			"Chips",
			"Simplicity",
			"Corn on the Cob",
			"Onion Rings",
			"Mashed Potato",
			"Photographic Memory",
			"High Quality",
			"High Standards",
			"Victorian Standards",
		],
		turboCardDays
	);
	return true;
}

function testCards(
	seed: string,
	startingCards: Unlock[],
	expectedCards: [string, string][],
	chosenCards: string[],
	cardDays = normalCardDays
): boolean {
	const unlocks = new FindNewUnlocks(seed);
	for (const card of startingCards) {
		unlocks.addCard(card);
	}
	for (let dayIndex = 0; dayIndex < cardDays.length; dayIndex++) {
		const day = cardDays[dayIndex];
		if (day === 7) debugger;
		const options = unlocks.getUnlockOptions(day);
		if (
			options[0].Name !== expectedCards[dayIndex][0] ||
			options[1].Name !== expectedCards[dayIndex][1]
		) {
			console.error(
				`Test failed on day ${day}. Expected ${expectedCards[dayIndex][0]} and ${expectedCards[dayIndex][1]}, but simulated ${options[0].Name} and ${options[1].Name} instead.`
			);
			debugger;
			return false;
		}
		unlocks.addCard(options.filter((a) => a.Name === chosenCards[dayIndex])[0]);
	}
	console.log(`${seed} test passes.`);
	return true;
}
