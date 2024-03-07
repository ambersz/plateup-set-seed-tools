import Appliances, {
	DecorationType,
	ShopStapleType,
} from "../workers/db/appliances";
import { RestaurantSettings, Unlocks } from "../workers/db/unlocks";
import { Shop } from "../workers/reverse-engineered/shop";

const defaultAppliances = [
	"Research Desk",
	"Blueprint Cabinet",
	"Booking Desk",
];
const ResearchProbabilities = () => {
	// Context: on Turbo, it's typical to save the first research desk you see on day 1, hoping to get another researh desk on day 2 so you can save scum for copy desk by day 3-- then depending on dish save scum day 4 for metal tables.
	// With solo running this strat you'd have full 4 metal tables starting day 7

	// But also on Turbo you get a ton of money... is it worth to just buy the first research desk you see and reroll all your money away day 1 for the second research desk?
	// If you don't get it day 1, what are the chances you get it by day 2? (assume you buy 2 staples out of table/hob/sink day 1 & are rerolling on 5 blueprints)
	let shop = new Shop("");
	shop.OwnedAppliances = [
		...shop.OwnedAppliances,
		...Appliances.filter((a) => defaultAppliances.includes(a.Name)),
	];
	shop.addCard(RestaurantSettings.filter((a) => a.Name === "Turbo")[0]);
	shop.addCard(Unlocks.filter((a) => a.Name === "Stir Fry")[0]);
	let options = shop.buildShopOptions(
		shop.OwnedAppliances,
		DecorationType.Null,
		shop.Cards
	);
	options = options.filter((a) => !a.IsRemoved);
	const total = options.length;
	options = options.filter((a) => a.Staple === ShopStapleType.NonStaple);
	const nonstaples = options.length;
	options = options.filter((a) => !a.SellAsUpgrade);
	const nonupgrades = options.length;
	console.log({ total, nonstaples, nonupgrades });
	const upgradesAllowed = 1 / nonstaples;
	const upgradesNotAllowed = 1 / nonupgrades;
	const average = 0.25 * upgradesAllowed + 0.75 * upgradesNotAllowed;
	// (1-average)^x <= 0.2
	// chance that I don't get research desk on x rerolls-- want that to be less than the chance that I won't get research desk in the staples tomorrow. 4 staples on day 3 prep out of hob, table, plates, sink, counter, research desk but probably bought plates out of staple status already so there's only 1 out of 5 scenarios where I don't get research desk
	// x ln 1-average = ln 0.2
	// x = ln 0.2 / ln 1-average
	console.log(Math.log(0.2) / Math.log(1 - average));
	return (
		<>
			{JSON.stringify({
				total,
				nonstaples,
				nonupgrades,
				upgradesAllowed,
				upgradesNotAllowed,
				average,
				rerollFive: 1 - (1 - average) ** 5,
			})}
		</>
	);
};
export default ResearchProbabilities;
