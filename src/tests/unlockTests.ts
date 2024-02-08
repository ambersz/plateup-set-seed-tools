import { UnlockGroup } from "../kitchenEnums";
import { RestaurantSettings, Unlocks } from "../workers/db/unlocks";
import { FindNewUnlocks } from "../workers/reverse-engineered/cards";

export function test(): boolean {
	const a = new FindNewUnlocks("azqyj4nh");
	a.addCard(RestaurantSettings.filter((a) => a.Name === "Community")[0]); // Autumn Setting
	const expectedCards = [
		["Black Coffee", "Ice Cream"],
		["Affordable", "Charming"],
		["Christmas Crackers", "Pizza"],
		["Turkey - Stuffing", "Nut Roast"],
		["Cherry Pie", "Dumplings"],
		["Savings", "Careful Accounting"],
	];
	const cardDays = [3, 5, 6, 9, 12, 15];
	const chosenCards = [
		"Ice Cream",
		"Affordable",
		"Christmas Crackers",
		"Turkey - Stuffing",
		"Dumplings",
	].flatMap((name) => Unlocks.filter((a) => a.Name === name));
	const startingCards = [
		RestaurantSettings.filter((a) => a.Name === "Community")[0],
		Unlocks.filter((a) => a.Name === "Turkey")[0],
	];
	a.cards = startingCards;
	for (let dayIndex = 0; dayIndex < cardDays.length; dayIndex++) {
		const day = cardDays[dayIndex];
		const options = a.getUnlockOptions(day);
		if (
			options[0].Name !== expectedCards[dayIndex][0] ||
			options[1].Name !== expectedCards[dayIndex][1]
		) {
			console.log(
				`Test failed on day ${day}. Expected ${expectedCards[dayIndex][0]} and ${expectedCards[dayIndex][1]}, but simulated ${options[0].Name} and ${options[1].Name} instead.`
			);
			return false;
		}
		a.addCard(chosenCards[dayIndex]);
	}
	console.log("test passes");
	return true;
}
