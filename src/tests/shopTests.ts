import { Unlocks } from "../workers/db/unlocks";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
import { fixPRNG } from "../workers/reverse-engineered/shop";

export function shopTests() {
	if (true) {
		// az size 2
		testDecorSpawnAndFirstRerolls("az", [
			[
				"Stock Picture",
				"Neon Sign",
				"Stock Picture",
				"Neon Sign",
				"Plant",
				"Plant",
				"Neon Sign",
				"Neon Sign",
			],
			[
				"Affordable Bin",
				"Ceiling Light",
				"Calm Painting",
				"Calm Painting",
				"Plant",
				"Plant",
				"Neon Sign",
				"Plant",
			],
			[
				"Gumball Machine",
				"Plant",
				"Ceiling Light",
				"Ceiling Light",
				"Neon Sign",
				"Stock Picture",
				"Neon Sign",
				"Calm Painting",
			],
			[
				"Dirty Floor Sign",
				"Stock Picture",
				"Neon Sign",
				"Ceiling Light",
				"Neon Sign",
				"Dirty Floor Sign",
				"Affordable Bin",
				"Calm Painting",
			],
		]);
	}
	if (true) {
		// a diner
		testDecorSpawnAndFirstRerolls("a", [
			[
				"Neon Sign",
				"Affordable Bin",
				"Stock Picture",
				"Plant",
				"Affordable Bin",
				"Neon Sign",
				"Gumball Machine",
				"Neon Sign",
			],
			[
				"Calm Painting",
				"Ceiling Light",
				"Gumball Machine",
				"Affordable Bin",
				"Neon Sign",
				"Gumball Machine",
				"Calm Painting",
				"Ceiling Light",
			],
			[
				"Dirty Floor Sign",
				"Plant",
				"Plant",
				"Plant",
				"Calm Painting",
				"Gumball Machine",
				"Gumball Machine",
				"Affordable Bin",
			],
			[
				"Neon Sign",
				"Neon Sign",
				"Stock Picture",
				"Dirty Floor Sign",
				"Ceiling Light",
				"Affordable Bin",
				"Plant",
				"Plant",
			],
		]);
	}
}

function testDecorSpawnAndFirstRerolls(
	seed: string,
	expected: [string[], string[], string[], string[]],
	theme: string = "Affordable"
) {
	const affordableShop = new Shop(seed);
	affordableShop.addCard(Unlocks.filter((a) => a.Name === theme)[0]);
	const spawnConfig: RerollConfig[] = [
		{ spawnInside: true, blueprintCount: 5 },
	];
	const expectedSpawns: string[] = expected[0];
	const rerollInConfig: RerollConfig[] = [
		{ spawnInside: true, blueprintCount: 5 },
		{ spawnInside: true, blueprintCount: 5 },
	];
	const rerollInExpected: string[] = expected[1];
	const rerollOutInConfig: RerollConfig[] = [
		{ spawnInside: false, playerInside: true, blueprintCount: 5 },
		{ spawnInside: true, blueprintCount: 5 },
	];
	const rerollOutInExpected: string[] = expected[2];
	const rerollOutOutConfig: RerollConfig[] = [
		{ spawnInside: false, playerInside: false, blueprintCount: 5 },
		{ spawnInside: true, blueprintCount: 5 },
	];
	const rerollOutOutExpected: string[] = expected[3];
	let ok: boolean;

	do {
		ok =
			expectRerolls(affordableShop, spawnConfig, expectedSpawns, 5) &&
			expectRerolls(affordableShop, rerollInConfig, rerollInExpected, 5) &&
			expectRerolls(
				affordableShop,
				rerollOutInConfig,
				rerollOutInExpected,
				5
			) &&
			expectRerolls(
				affordableShop,
				rerollOutOutConfig,
				rerollOutOutExpected,
				5
			);
		fixPRNG.value++;
	} while (!ok);
	fixPRNG.value--;
	console.log(fixPRNG.value);
}

function expectRerolls(
	shop: Shop,
	config: RerollConfig[],
	expectedBlueprints: string[],
	day: number
) {
	const blueprints = shop.getAppliances(config, day);
	let wrong = false;
	for (let i = 0; i < expectedBlueprints.length; i++) {
		if (blueprints[i].Name !== expectedBlueprints[i]) {
			wrong = true;
			break;
		}
	}
	if (wrong)
		console.error(
			`(${shop.seed}) Expected ${expectedBlueprints.join(
				", "
			)} on day ${day}, but simulated ${blueprints
				.map((a) => a.Name)
				.join(", ")}`
		);
	if (!wrong) console.log(`${shop.seed} day ${day} blueprint tests passed.`);
	return !wrong;
}
