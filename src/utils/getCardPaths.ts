import { FindNewUnlocks } from "../workers/reverse-engineered/cards";
import { Unlock } from "../kitchenTypes";
import { RestaurantSettings, Unlocks } from "../workers/db/unlocks";
const defaultStartingUnlocks = [
	RestaurantSettings.filter((a) => a.Name === "Community")[0],
	// RestaurantSettings.filter((a) => a.Name === "Turbo")[0],
	Unlocks.filter((a) => a.Name === "Salad")[0],
	// Unlocks.filter((a) => a.Name === "Breakfast")[0],
];
export function getCardPaths(
	c: FindNewUnlocks,
	startingUnlocks: Unlock[] = defaultStartingUnlocks,
	turbo: boolean = false
) {
	let queue: Unlock[][] = [startingUnlocks];
	const daysArray = turbo ? turboDays : days;
	for (const a of queue[0]) c.addCard(a); // if community/turbo are in here this will switch to the correct card pack
	for (let depth = 0; depth < daysArray.length; depth++) {
		let next: Unlock[][] = [];
		while (queue.length) {
			const pre = queue.shift() as Unlock[];
			c.cards = pre;
			const options = c.getUnlockOptions(daysArray[depth]);
			options
				// .reverse()
				.forEach((o) => {
					next.push([...pre, o]);
				});
		}
		queue = next;
	}
	return queue;
}
export const days = [3, 5, 6, 9, 12];
const turboDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14];
