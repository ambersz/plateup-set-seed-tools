import { RestaurantSettings, StartingDishes } from "../workers/db/unlocks";
import { niceRerolls } from "../utils/niceRerolls";
function collapse<T>(f: T[][]): T[][] {
	return [f.flatMap((a) => a)];
}
const a = (seed: string, cards: string) => {
	console.log(`testing ${seed} with ${cards}`);

	return niceRerolls(
		// "azsxf47v",
		// "azluphle",
		// "azro2eh8",
		seed,
		[
			RestaurantSettings.filter((a) => a.Name === "Turbo")[0],
			StartingDishes.filter((a) => a.Name === "Turkey")[0],
		],
		// "Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Christmas Crackers".split(
		cards.split(",").slice(2),
		// [
		// 	"Instant Service",
		// 	"Ice Cream",
		// 	"All You Can Eat",
		// 	"Mashed Potato",
		// 	"Affordable",
		// 	"Bamboo",
		// 	"Chips",
		// 	"Relaxed Atmosphere",
		// 	"Broccoli",
		// 	"Corn on the Cob",
		// 	"Health and Safety",
		// 	"Splash Zone",
		// 	"Roast Potato",
		// 	"Onion Rings",
		// ],
		collapse([
			[
				{ goal: "Portioner", substitutes: [], number: 1 },
				{
					goal: "Metal Table",
					substitutes: [
						// "Dining Table"
					],
					number: 2,
				},
				{
					// goal: "Smart Grabber",
					goal: "Grabber - Rotating",
					// substitutes: ["Grabber - Rotating", "Smart Grabber", "Grabber"],
					substitutes: [],
					// substitutes: ["Grabber", "Smart Grabber"],
					number: 1,
				},
			],
			[
				// {
				// 	goal: "Metal Table",
				// 	substitutes: [
				// 		// "Dining Table"
				// 	],
				// 	number: 1,
				// },
				{ goal: "Scrubbing Brush", substitutes: [], number: 1 },
				{
					// goal: "Smart Grabber",
					goal: "Grabber - Rotating",
					// substitutes: ["Grabber - Rotating", "Smart Grabber", "Grabber"],
					substitutes: [],
					// substitutes: ["Grabber", "Smart Grabber"],
					number: 1,
				},
				{
					// goal: "Danger Hob",
					goal: "Microwave",
					substitutes: [
						"Oven",
						// "Safety Hob",
						// "Microwave",
						// "Danger Hob",
					],
					number: 1,
				},
				{
					goal: "Expanded Bin",
					// substitutes: [],
					substitutes: ["Composter Bin", "Bin"],
					// substitutes: ["Composter Bin", "Compactor Bin"],
					number: 1,
				},
			],
			[
				{ goal: "Portioner", substitutes: [], number: 1 },
				{ goal: "Combiner", substitutes: [], number: 1 },
				{
					goal: "Smart Grabber",
					// goal: "Grabber - Rotating",
					// substitutes: ["Grabber - Rotating", "Smart Grabber", "Grabber"],
					substitutes: ["Grabber"],
					// substitutes: ["Grabber", "Smart Grabber"],
					number: 1,
				},
				{ goal: "Blueprint Cabinet", substitutes: [], number: 8 - 1 },
				// { goal: "Research Desk", substitutes: [], number: 1 },
				// { goal: "Plates", substitutes: [], number: 1 },
				{ goal: "Metal Table", substitutes: [], number: 1 },
				// { goal: "Metal Table", substitutes: ["Dining Table"], number: 3 },
				{ goal: "Copying Desk", substitutes: [], number: 1 },
				// { goal: "Copying Desk", substitutes: ["Discount Desk"], number: 1 },
				// { goal: "Smart Grabber", number: 1, substitutes: [] },
				// { goal: "Expanded Bin", substitutes: ["Bin"], number: 1 },

				// { goal: "Microwave", substitutes: [], number: 1 },

				// { goal: "Portioner", substitutes: [], number: 2 },
				// { goal: "Robot Buffer", substitutes: [], number: 1 },
				// { goal: "Power Sink", substitutes: ["Sink", "Soaking Sink"], number: 1 },
				{
					goal: "Power Sink",
					substitutes: [],
					// substitutes: ["Soaking Sink"],
					number: 1,
				},
			],
		]).concat([
			[
				{ goal: "Robot Buffer", substitutes: ["Floor Buffer"], number: 1 },
				{ goal: "Trainers", substitutes: [], number: 1 },
				{ goal: "Auto Plater", substitutes: [], number: 1 },
				{ goal: "Clipboard Stand", substitutes: [], number: 1 },
			],
		])
	);
};
let bestday: number = Infinity;
let test = [
	{
		seed: "azer95oz",
		b: "Turbo,Turkey,Instant Service,Ice Cream,Bamboo,Corn on the Cob,Affordable,Chips,All You Can Eat,Roast Potato,Onion Rings,Mashed Potato,Empathy,Double Helpings,Victorian Standards,Broccoli",
		n: 1,
		bestN: 11,
		candMetric: -28,
		bestMetric: -46,
	},
	{
		seed: "azro2eh8",
		b: "Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Christmas Crackers",
		n: 2,
		bestN: 11,
		candMetric: -45,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Christmas Crackers",
			"Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Empathy",
		],
	},
	{
		seed: "azsxf47v",
		b: "Turbo,Turkey,Instant Service,Ice Cream,All You Can Eat,Mashed Potato,Affordable,Bamboo,Chips,Relaxed Atmosphere,Broccoli,Corn on the Cob,Health and Safety,Splash Zone,Roast Potato,Onion Rings",
		n: 1,
		bestN: 11,
		candMetric: -26,
		bestMetric: -36,
	},
	{
		seed: "azluphle",
		b: "Turbo,Turkey,Ice Cream,Instant Service,Onion Rings,Broccoli,Affordable,Christmas Crackers,Roast Potato,Chips,All You Can Eat,Corn on the Cob,Relaxed Atmosphere,Double Helpings,Bamboo,Mashed Potato",
		n: 1,
		bestN: 11,
		candMetric: -46,
		bestMetric: -46,
	},

	{
		seed: "az4fagbs",
		b: "Turbo,Turkey,Instant Service,Ice Cream,Broccoli,Bamboo,Affordable,Onion Rings,All You Can Eat,Mashed Potato,Chips,Photographic Memory,Roast Potato,Health and Safety,Corn on the Cob,High Expectations",
		n: 1,
		bestN: 11,
		candMetric: -28,
		bestMetric: -46,
	},

	{
		seed: "azrotch8",
		b: "Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Christmas Crackers",
		n: 2,
		bestN: 11,
		candMetric: -45,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Christmas Crackers",
			"Turbo,Turkey,Instant Service,Ice Cream,Onion Rings,All You Can Eat,Affordable,Bamboo,Chips,Corn on the Cob,Mashed Potato,Roast Potato,Broccoli,Photographic Memory,Double Helpings,Empathy",
		],
	},
	{
		seed: "azcfv9zq",
		b: "Turbo,Turkey,Ice Cream,Bamboo,Instant Service,Corn on the Cob,Affordable,All You Can Eat,Roast Potato,Chips,Tipping Culture,Mashed Potato,Broccoli,Onion Rings,Christmas Crackers,Discounts",
		n: 1,
		bestN: 11,
		candMetric: -36,
		bestMetric: -36,
	},
	{
		seed: "azm92th1",
		b: "Turbo,Turkey,Ice Cream,Roast Potato,Instant Service,Chips,Affordable,All You Can Eat,Onion Rings,Broccoli,Splash Zone,Bamboo,Corn on the Cob,Mashed Potato,Discounts,Health and Safety",
		n: 3,
		bestN: 11,
		candMetric: -32,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,Ice Cream,Roast Potato,Instant Service,Chips,Affordable,All You Can Eat,Onion Rings,Broccoli,Splash Zone,Bamboo,Corn on the Cob,Mashed Potato,Discounts,Health and Safety",
			"Turbo,Turkey,Ice Cream,Roast Potato,Instant Service,Chips,Affordable,All You Can Eat,Onion Rings,Broccoli,Splash Zone,Blindfolded Chefs,Corn on the Cob,Mashed Potato,Bamboo,Health and Safety",
			"Turbo,Turkey,Ice Cream,Roast Potato,Instant Service,Chips,Affordable,All You Can Eat,Onion Rings,Broccoli,Splash Zone,Blindfolded Chefs,Corn on the Cob,Mashed Potato,Discounts,Bamboo",
		],
	},
	{
		seed: "azimmh7w",
		b: "Turbo,Turkey,All You Can Eat,Instant Service,Ice Cream,Mashed Potato,Affordable,Roast Potato,Chips,Photographic Memory,Discounts,Corn on the Cob,Onion Rings,Bamboo,Broccoli,Splash Zone",
		n: 1,
		bestN: 11,
		candMetric: -23,
		bestMetric: -46,
	},
	{
		seed: "aznmrn4w",
		b: "Turbo,Turkey,Instant Service,Onion Rings,Chips,Ice Cream,Affordable,All You Can Eat,Roast Potato,Broccoli,Mashed Potato,Individual Dining,Herd Mentality,Christmas Crackers,Corn on the Cob,Bamboo",
		n: 2,
		bestN: 11,
		candMetric: -28,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,Instant Service,Onion Rings,Chips,Ice Cream,Affordable,All You Can Eat,Roast Potato,Broccoli,Mashed Potato,Individual Dining,Herd Mentality,Christmas Crackers,Corn on the Cob,Bamboo",
			"Turbo,Turkey,Instant Service,Onion Rings,Chips,Ice Cream,Affordable,All You Can Eat,Roast Potato,Broccoli,Mashed Potato,Individual Dining,Herd Mentality,Blindfolded Chefs,Corn on the Cob,Bamboo",
		],
	},
	{
		seed: "azlaoo21",
		b: "Turbo,Turkey,Corn on the Cob,All You Can Eat,Ice Cream,Instant Service,Affordable,Broccoli,Bamboo,Roast Potato,Onion Rings,Mashed Potato,Tipping Culture,Photographic Memory,Double Helpings,Chips",
		n: 2,
		bestN: 11,
		candMetric: -35,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,Corn on the Cob,All You Can Eat,Ice Cream,Instant Service,Affordable,Broccoli,Bamboo,Roast Potato,Onion Rings,Mashed Potato,Tipping Culture,Photographic Memory,Double Helpings,Chips",
			"Turbo,Turkey,Corn on the Cob,All You Can Eat,Ice Cream,Instant Service,Affordable,Broccoli,Bamboo,Roast Potato,Onion Rings,Herd Mentality,Mashed Potato,High Quality,Double Helpings,Chips",
		],
	},
	{
		seed: "azvmgd9b",
		b: "Turbo,Turkey,Instant Service,Roast Potato,Broccoli,All You Can Eat,Affordable,Ice Cream,Chips,Christmas Crackers,Onion Rings,Discounts,Corn on the Cob,Tipping Culture,Mashed Potato,Bamboo",
		n: 1,
		bestN: 11,
		candMetric: -43,
		bestMetric: -46,
	},
	{
		seed: "azvmgd9b",
		b: "Turbo,Turkey,Instant Service,Roast Potato,Broccoli,All You Can Eat,Affordable,Ice Cream,Chips,Christmas Crackers,Onion Rings,Discounts,Corn on the Cob,Tipping Culture,Mashed Potato,Bamboo",
		n: 1,
		bestN: 11,
		candMetric: -43,
		bestMetric: -46,
	},

	{
		seed: "azh4k3si",
		b: "Turbo,Turkey,Ice Cream,All You Can Eat,Bamboo,Onion Rings,Affordable,Broccoli,Instant Service,Victorian Standards,Corn on the Cob,Empathy,High Standards,Mashed Potato,Chips,Roast Potato",
		n: 1,
		bestN: 11,
		candMetric: -20,
		bestMetric: -46,
	},
	{
		seed: "az4xzj6z",
		b: "Turbo,Turkey,Corn on the Cob,All You Can Eat,Ice Cream,Bamboo,Affordable,Instant Service,Chips,Double Helpings,Health and Safety,Roast Potato,Broccoli,High Standards,Onion Rings,Mashed Potato",
		n: 1,
		bestN: 11,
		candMetric: -19,
		bestMetric: -46,
	},
	{
		seed: "aznhl1xm",
		b: "Turbo,Turkey,All You Can Eat,Corn on the Cob,Instant Service,Broccoli,Affordable,Ice Cream,Health and Safety,High Standards,Christmas Crackers,Bamboo,Onion Rings,Roast Potato,Mashed Potato,Chips",
		n: 2,
		bestN: 11,
		candMetric: -29,
		bestMetric: -46,
		paths: [
			"Turbo,Turkey,All You Can Eat,Corn on the Cob,Instant Service,Broccoli,Affordable,Ice Cream,Health and Safety,High Standards,Christmas Crackers,Bamboo,Onion Rings,Roast Potato,Mashed Potato,Chips",
			"Turbo,Turkey,All You Can Eat,Corn on the Cob,Instant Service,Broccoli,Affordable,Ice Cream,Health and Safety,High Standards,Double Helpings,Bamboo,Onion Rings,Roast Potato,Mashed Potato,Chips",
		],
	},
	{
		seed: "azm8xbdb",
		b: "Turbo,Turkey,All You Can Eat,Onion Rings,Ice Cream,Bamboo,Affordable,Instant Service,Broccoli,Double Helpings,Mashed Potato,High Standards,Discounts,Corn on the Cob,Chips,Roast Potato",
		n: 1,
		bestN: 11,
		candMetric: -20,
		bestMetric: -46,
	},
	{
		seed: "aze2hfhm",
		b: "Turbo,Turkey,All You Can Eat,Ice Cream,Corn on the Cob,Mashed Potato,Affordable,High Standards,Instant Service,Chips,Broccoli,Bamboo,Onion Rings,Double Helpings,Splash Zone,Roast Potato",
		n: 1,
		bestN: 11,
		candMetric: -23,
		bestMetric: -46,
	},
	{
		seed: "aznjtjq6",
		b: "Turbo,Turkey,Corn on the Cob,Mashed Potato,Ice Cream,All You Can Eat,Affordable,Instant Service,Broccoli,High Quality,Chips,Roast Potato,Individual Dining,Bamboo,Onion Rings,Photographic Memory",
		n: 1,
		bestN: 11,
		candMetric: -17,
		bestMetric: -46,
	},
	{
		seed: "az92f4vn",
		b: "Turbo,Turkey,Ice Cream,Chips,Onion Rings,Broccoli,Affordable,All You Can Eat,Bamboo,Double Helpings,Instant Service,Corn on the Cob,Herd Mentality,Roast Potato,Health and Safety,Mashed Potato",
		n: 1,
		bestN: 11,
		candMetric: -18,
		bestMetric: -36,
	},
	{
		seed: "azg6pf8l",
		b: "Turbo,Turkey,Mashed Potato,All You Can Eat,Corn on the Cob,Instant Service,Affordable,Ice Cream,Christmas Crackers,Broccoli,High Expectations,High Quality,Onion Rings,Roast Potato,Bamboo,Chips",
		n: 1,
		bestN: 11,
		candMetric: -38,
		bestMetric: -46,
	},
	{
		seed: "azpndjai",
		b: "Turbo,Turkey,All You Can Eat,Bamboo,Corn on the Cob,Ice Cream,Affordable,Chips,Onion Rings,Broccoli,Instant Service,Discounts,High Standards,Roast Potato,Individual Dining,Mashed Potato",
		n: 1,
		bestN: 11,
		candMetric: -25,
		bestMetric: -46,
	},
	{
		seed: "az3ld8i3",
		b: "Turbo,Turkey,Ice Cream,Broccoli,High Quality,All You Can Eat,Affordable,Personalised Waiting,Mashed Potato,Chips,Roast Potato,Corn on the Cob,Onion Rings,Health and Safety,Instant Service,Bamboo",
		n: 1,
		bestN: 11,
		candMetric: -2,
		bestMetric: -36,
	},
	{
		seed: "azujhzi7",
		b: "Turbo,Turkey,Onion Rings,All You Can Eat,Roast Potato,Ice Cream,Affordable,Bamboo,Chips,Mashed Potato,Discounts,Instant Service,Corn on the Cob,Blindfolded Chefs,Double Helpings,Broccoli",
		n: 1,
		bestN: 11,
		candMetric: -24,
		bestMetric: -36,
	},
	{
		seed: "azhkcnw9",
		b: "Turbo,Turkey,Mashed Potato,All You Can Eat,Ice Cream,Broccoli,Affordable,Roast Potato,Bamboo,Onion Rings,Simplicity,High Quality,Instant Service,Corn on the Cob,Christmas Crackers,Chips",
		n: 1,
		bestN: 11,
		candMetric: -25,
		bestMetric: -46,
	},
	{
		seed: "azn2sjfb",
		b: "Turbo,Turkey,Onion Rings,Roast Potato,All You Can Eat,Instant Service,Affordable,Chips,High Quality,Bamboo,Mashed Potato,Ice Cream,Sedate Atmosphere,Photographic Memory,Broccoli,Corn on the Cob",
		n: 1,
		bestN: 11,
		candMetric: -7,
		bestMetric: -46,
	},
];
// while (test[0].seed !== "azgw3a23") test.shift();
while (test.length) {
	let cur = test.shift()!;
	let day = a(cur?.seed, cur?.b);
	if (day <= bestday) {
		console.log(`rult ${cur.seed} @${day}`);
		bestday = day;
	}
}
// a(
// 	"az4fagbs",
// 	"Turbo,Turkey,Instant Service,Ice Cream,Broccoli,Bamboo,Affordable,Onion Rings,All You Can Eat,Mashed Potato,Chips,Photographic Memory,Roast Potato,Health and Safety,Corn on the Cob,High Expectations"
// );

// a("azer95oz", "Turbo,Turkey,Instant Service,Ice Cream,Bamboo,Corn on the Cob,Affordable,Chips,All You Can Eat,Roast Potato,Onion Rings,Mashed Potato,Empathy,Double Helpings,Victorian Standards,Broccoli")
