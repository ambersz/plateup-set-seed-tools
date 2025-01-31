import Appliances, {
	CShopBuilderOption,
	DecorationType,
	ShopRequirementFilter,
	ShopStapleType,
	ShoppingTags,
	Appliance,
	ShoppingTagsExtensions,
} from "../db/appliances";
import { numDecors } from "../db/decor";
import { Unlock } from "../../kitchenTypes";
import { ShuffleInPlace } from "../../utils/utils";
import { FixedSeedContext, RestaurantSystemSeed } from "./prng";
import { UnlockGroup } from "../../kitchenEnums";

export let fixPRNG = { value: 0 };
const PLATE_APPLIANCES = [
	"Sink",
	"Plates",
	"Dish Rack",
	"Dish Washer",
	"Power Sink",
	"Soaking Sink",
	"Auto Plater",
];
const PLATE_APPLIANCE_MAP: { [appliance: string]: boolean } = {};
for (const n of PLATE_APPLIANCES) {
	PLATE_APPLIANCE_MAP[n] = true;
}

export type RerollConfig =
	| {
			blueprintCount: number;
			spawnInside: false;
			playerInside: boolean;
	  }
	| {
			blueprintCount: number;
			spawnInside: true;
			playerInside?: undefined;
	  };
let upgradesAllowed = 0;
let upgradesDisallowed = 0;
let expectedUpgrades = 0;
const shopSize = Appliances.filter(
	(appliance) => appliance.IsPurchasable || appliance.IsPurchasableAsUpgrade
).length;
export class Shop {
	seed: string | number;
	mapSize: number;
	numTiles: number;
	baseUpgradeChance: number;
	OwnedAppliances: Appliance[];
	Cards: Unlock[];
	Theme: DecorationType;
	private cache: Map<number, Appliance[]> = new Map<number, Appliance[]>();
	private cacheDay: number;
	constructor(seed: string, baseUpgradeChance = 0) {
		this.seed = seed;
		[this.mapSize, this.numTiles] = this.getLayoutInfo();
		this.baseUpgradeChance = baseUpgradeChance;
		this.OwnedAppliances = [];
		// Appliances.filter((a) => a.Name === "Blueprint Cabinet");
		this.Cards = [];
		this.Theme = DecorationType.Null;
		this.cacheDay = -1;
	}
	getLayoutInfo(): [number, number] {
		const r = new FixedSeedContext(this.seed, 5078598);
		const roll = r.useSubcontext(0).random.range(0, 8);
		let mapSize: number;
		let numTiles: number;
		switch (roll) {
			case 0:
				numTiles = 70;
				mapSize = 2;
				break;
			case 4:
				numTiles = 84;
				mapSize = 2;
				break;
			case 1:
			case 5:
				numTiles = 60;
				mapSize = 1;
				break;
			case 2:
			case 6:
				numTiles = 9 * 13;
				mapSize = 3;
				break;
			case 3:
			case 7:
				numTiles = 12 * 16;
				mapSize = 4;
				break;
			default:
				throw new Error();
				break;
		}
		return [mapSize, numTiles];
	}
	handleNewCardSpawnEffects(card?: Unlock) {
		if (card === undefined) return;
		if (card.Name === "Turbo") this.baseUpgradeChance = 0.25;
		if (card.UnlockGroup === UnlockGroup.PrimaryTheme) {
			// @ts-expect-error
			this.Theme = DecorationType[card.Name];
		}
	}
	handleNewCardRerollEffects(card?: Unlock) {
		if (card === undefined) return;
		this.OwnedAppliances = this.OwnedAppliances.concat(
			card.IngredientProviders.flatMap((i) =>
				Appliances.filter((a) => a.ID === i)
			)
		);
	}

	addCard(card?: Unlock) {
		if (card === undefined) return;
		this.handleNewCardSpawnEffects(card);
		this.handleNewCardRerollEffects(card);
		this.Cards.push(card);
	}
	getPrngAdvancements(configs: RerollConfig[], day: number): number {
		let res = 0;
		for (let i = 0; i < configs.length; i++) {
			const config = configs[i];
			let count = config.blueprintCount;
			if (day % 5 === 0) {
				count += 3;
				if (i === 0) count += 2; // 2 blueprints free for special events (must be 0-cost christmas trees and the like)
				// debugger;
			}
			res += count * (shopSize - 1 + 1); // -1 for the shuffle cost, +1 for the upgrade randomization

			// now the game gets indoor post tiles specifically for decor if you spawn outside, but not in a subcontext
			// simulate effect of randomly choosing tiles
			if (!config.spawnInside) {
				res += prngAdvancementsFromTiles(config.playerInside, this.numTiles);
			}
			// cost of sorting list of available decor by a random value
			res += numDecors;
		}
		return res;
	}

	buildShopOptions(
		OwnedAppliances: Appliance[],
		PrimaryTheme: DecorationType,
		cards: Unlock[]
	): CShopBuilderOption[] {
		const romanticSetting = cards.some((a) => a.Name === "Couples");
		let ShopOptions: CShopBuilderOption[] = [];
		for (const appliance of Appliances) {
			const flag =
				!appliance.IsPurchasable && !appliance.IsPurchasableAsUpgrade;

			if (!flag) {
				var option = new CShopBuilderOption(appliance);
				const name = option.Appliance.Name;
				if (
					option.Staple == ShopStapleType.NonStaple ||
					option.Staple == ShopStapleType.WhenMissing
				) {
					// tag staples and staple when missing
					// TODO AZ: BonusStaples - I think these are only relevant for franchise runs, will manually handle Romantic Flower Pots for now
					if ((option.Tags & ShoppingTags.Basic) > ShoppingTags.None) {
						// basic appliances are always staples
						option.Staple = ShopStapleType.FixedStaple;
					} else if (option.StapleWhenMissing) {
						// staple when missing
						if (
							name != "Research Desk" &&
							name != "Blueprint Cabinet" &&
							name != "Plates"
						) {
							console.log(`Unexpected ${name} StapleWhenMissing Appliance`);
						}
						// if (name == "Research Desk" || name == "Plates") {
						// 	if (ownResearchDesk) {
						// 		option.Staple = ShopStapleType.NonStaple;
						// 	} else {
						// 		option.Staple = ShopStapleType.WhenMissing;
						// 	}
						// } else {
						if (OwnedAppliances.some((own) => own.ID === option.Appliance.ID)) {
							option.Staple = ShopStapleType.NonStaple;
						} else {
							option.Staple = ShopStapleType.WhenMissing;
						}
						// }
					} else if (romanticSetting && name === "Flower Pot") {
						option.Staple = ShopStapleType.BonusStaple;
					}
				}
				const app = option.Appliance;
				if (app.SellOnlyAsDuplicate) {
					// 1a. handle appliances that require duplicates
					if (!OwnedAppliances.some((own) => own.ID === app.ID)) {
						option.IsRemoved = true;
					}
				} else if (app.RequiresForShop.length > 0) {
					let requirementFulflled = false;
					// 1b. else handle appliance that have requirements RequiresForShop
					for (const prereq of app.RequiresForShop) {
						if (OwnedAppliances.some((a) => a.ID === prereq))
							requirementFulflled = true;
					}
					option.IsRemoved = !requirementFulflled;
				} else if (app.SellOnlyAsUnique) {
					// I think this is only the booking desk?
					if (app.Name != "Booking Desk")
						console.log(`SellOnlyAsUnique: ${app.Name}, ${app.ID}`);
					if (OwnedAppliances.some((a) => a.ID === app.ID))
						option.IsRemoved = true;
				}
				if (PLATE_APPLIANCE_MAP[name]) {
					// TODO: if in future updates there are more mains that don't require plates, need to actually export the Dish.IsMainThatDoesNotNeedPlates info. For now just manually handle Tacos as an exception
					if (cards.every((a) => !a.isMain || a.Name === "Tacos"))
						option.IsRemoved = true;
				}

				if (option.Filter == ShopRequirementFilter.RefreshableProvider) {
					if (!OwnedAppliances.some((app) => app.AllowRefreshes)) {
						option.IsRemoved = true;
					}
				}
				if (
					option.DecorationRequired != DecorationType.Null &&
					option.DecorationRequired != PrimaryTheme
				) {
					// 3. handle decorations requiring a specific theme
					option.IsRemoved = true;
				}
				if (app.RequiresProcessForShop.length > 0) {
					if (
						!app.RequiresProcessForShop.some((a) =>
							cards.some((c) => c.RequiredProcesses.includes(a))
						)
					) {
						option.IsRemoved = true;
					}
				}
				ShopOptions.push(option);
			}
		}
		return ShopOptions;
	}

	initRandom(day: number): FixedSeedContext {
		return RestaurantSystemSeed(823828, day, this.seed);
	}

	/**
	 * @param day -- this is the day that you just finished (i.e. the first set of blueprint spawns is on day=1)
	 */
	getAppliances(configs: RerollConfig[], day: number): Appliance[] {
		if (day !== this.cacheDay) {
			this.cacheDay = day;
			this.cache.clear();
		}
		const isSpawn = configs.length === 1;
		const ShopOptions = this.buildShopOptions(
			this.OwnedAppliances,
			this.Theme,
			this.Cards
		);
		let numberOfBlueprints = configs[configs.length - 1].blueprintCount;
		let components: ShoppingTags[];
		if (day % 5 == 0) {
			if (isSpawn) {
				numberOfBlueprints = 10;
			} else {
				numberOfBlueprints += 3;
			}
			components = [];
			for (let i = 0; i < numberOfBlueprints; i++) {
				components[i] = ShoppingTags.Decoration;
			}
			if (isSpawn) {
				for (const i of [1, 2]) {
					components[components.length - i] = ShoppingTags.SpecialEvent;
				}
			}
		} else {
			// normal appliances
			if (configs.length > 1) {
				components = [];
				for (let i = 0; i < numberOfBlueprints; i++) {
					components[i] = ShoppingTagsExtensions.DefaultShoppingTag;
				}
			} else {
				const defaultShoppingTag = ShoppingTagsExtensions.DefaultShoppingTag;
				const totalShopCount = Math.max(1, numberOfBlueprints);
				const stapleCount = Math.max(
					0,
					Math.min(
						ShopOptions.filter(
							(a) => a.Staple !== ShopStapleType.NonStaple && !a.IsRemoved
						).length,
						Math.max(2, 4 - Math.floor(day / 5)),
						totalShopCount
					)
				);
				const rerollPoolCount = Math.max(0, totalShopCount - stapleCount);
				numberOfBlueprints = totalShopCount;
				components = [];
				for (let l = 0; l < stapleCount; l++) {
					components[l] = ShoppingTags.Basic;
				}
				for (let m = stapleCount; m < stapleCount + rerollPoolCount; m++) {
					components[m] = defaultShoppingTag;
				}
			}
		}
		const Random = this.initRandom(day).random;
		let padPRNG = this.getPrngAdvancements(
			configs.slice(0, configs.length - 1),
			day
		);
		if (
			this.cache.has(padPRNG) &&
			this.cache.get(padPRNG)!.length >= numberOfBlueprints
		) {
			return this.cache.get(padPRNG)!.slice(0, numberOfBlueprints);
		}
		const cacheKey = padPRNG;
		while (padPRNG--) {
			// get to the starting point before this reroll first
			Random.value;
		}

		// logger.LogInfo(components.Join((a) => a.ToString(), ","));

		// using (var randomState = GetRandomState(day, seed))
		{
			// this is a no-op:
			// randomState.UseSubcontext(1).Dispose(); // simulate effect of randomly choosing tiles

			// copy shop options in order
			const list: CShopBuilderOption[] = [...ShopOptions];
			const result: Appliance[] = [];
			const upgradeChance = this.getUpgradeChance(day);
			const TmpOffered: Appliance[] = [];
			for (let k = 0; k < numberOfBlueprints; k++) {
				const requestedShoppingTag = components[k];
				const roll = Random.valueFloat;
				const rollUpgradeable = roll < upgradeChance;
				expectedUpgrades += upgradeChance;
				if (rollUpgradeable) {
					upgradesAllowed++;
				} else {
					upgradesDisallowed++;
				}
				ShuffleInPlace(list, Random);
				for (let l = 0; l < list.length; l++) {
					const cshopBuilderOption = list[l];
					const isRemoved = cshopBuilderOption.IsRemoved;
					if (isRemoved) continue;

					const alreadyInShop = TmpOffered.includes(
						cshopBuilderOption.Appliance
					);
					if (alreadyInShop) continue;

					const tagsDifferentFromRequest =
						!cshopBuilderOption.MatchesRequestTags(requestedShoppingTag);
					if (tagsDifferentFromRequest) continue;

					const isDisallowedUpgrade =
						!rollUpgradeable &&
						cshopBuilderOption.Staple == ShopStapleType.NonStaple &&
						cshopBuilderOption.SellAsUpgrade;
					if (isDisallowedUpgrade) continue;

					const nonDecoration = requestedShoppingTag != ShoppingTags.Decoration;
					if (nonDecoration) {
						TmpOffered.push(cshopBuilderOption.Appliance); // prevent duplicates for appliances only
					}
					// logger.LogInfo($"trying to add id:{cshopBuilderOption.Appliance}");
					result[k] = cshopBuilderOption.Appliance;
					break;
				}
				if (result[k] == null) {
					import.meta.env.DEV &&
						console.log(`Wasn't able to find a valid roll for blueprint ${k}`);
				}
			}
			this.cache.set(cacheKey, result);
			return result;
		}
	}

	getUpgradeChance(day: number) {
		return 1 - (1 - Math.floor(day / 5) * 0.1) * (1 - this.baseUpgradeChance);
	}
}

function prngAdvancementsFromTiles(inside: boolean, numTiles: number) {
	if (inside) return numTiles - 2;
	// otherwise is outside only
	return numTiles - 1;
}
