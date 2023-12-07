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
import { Unlock } from "../kitchenTypes";
import { ShuffleInPlace } from "../utils/utils";
import { FixedSeedContext } from "./prng";

export let fixPRNG = { value: 0 };

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
	seed: string;
	mapSize: number;
	baseUpgradeChance: number;
	OwnedAppliances: Appliance[];
	Cards: Unlock[];
	constructor(seed: string, baseUpgradeChance = 0) {
		this.seed = seed;
		this.mapSize = 1;
		this.baseUpgradeChance = baseUpgradeChance;
		this.OwnedAppliances = [];
		// Appliances.filter((a) => a.Name === "Blueprint Cabinet");
		this.Cards = [];
	}

	addCard(card: Unlock) {
		if (card === undefined) return;
		this.Cards.push(card);
		this.OwnedAppliances = this.OwnedAppliances.concat(
			card.IngredientProviders.flatMap((i) =>
				Appliances.filter((a) => a.ID === i)
			)
		);
	}
	getPrngAdvancements(configs: RerollConfig[]): number {
		let res = 0;
		for (const config of configs) {
			res += config.blueprintCount * (shopSize - 1 + 1); // -1 for the shuffle cost, +1 for the upgrade randomization

			// now the game gets indoor post tiles specifically for decor if you spawn outside, but not in a subcontext
			// simulate effect of randomly choosing tiles
			if (!config.spawnInside) {
				res += numTiles(config.playerInside, this.mapSize);
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
		// BuildShopOptions(bool ownResearchDesk)
		// {
		let ShopOptions: CShopBuilderOption[] = [];
		for (const appliance of Appliances) {
			const flag =
				!appliance.IsPurchasable && !appliance.IsPurchasableAsUpgrade;

			if (!flag) {
				var option = new CShopBuilderOption(appliance);
				if (
					option.Staple == ShopStapleType.NonStaple ||
					option.Staple == ShopStapleType.WhenMissing
				) {
					// tag staples and staple when missing
					// TODO AZ: BonusStaples - I think these are only relevant for franchise runs
					// TODO AZ: Romantic runs now have flower pots as a staple!
					if ((option.Tags & ShoppingTags.Basic) > ShoppingTags.None) {
						// basic appliances are always staples
						option.Staple = ShopStapleType.FixedStaple;
					} else if (option.StapleWhenMissing) {
						const name = option.Appliance.Name;
						// staple when missing
						if (
							name != "Research Desk" &&
							name != "Blueprint Cabinet" &&
							name != "Plates"
						) {
							// TODO HANDLE WHETHER PLATES ARE OWNED
							console.log(
								`Unexpected ${option.Appliance.Name} StapleWhenMissing Appliance`
							);
						}
						// if (name == "Research Desk" || name == "Plates") {
						// 	if (ownResearchDesk) {
						// 		option.Staple = ShopStapleType.NonStaple;
						// 	} else {
						// 		option.Staple = ShopStapleType.WhenMissing;
						// 	}
						// } else {
						if (OwnedAppliances.includes(option.Appliance)) {
							option.Staple = ShopStapleType.NonStaple;
						} else {
							option.Staple = ShopStapleType.WhenMissing;
						}
						// }
					}
				}
				const app = option.Appliance;
				if (app.SellOnlyAsDuplicate) {
					// 1a. handle appliances that require duplicates
					if (!OwnedAppliances.includes(app)) {
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
					option.IsRemoved = true;
				}

				if (option.Filter == ShopRequirementFilter.RefreshableProvider) {
					// 2. handle Supplies only dropping when you own a refillable (or not? I will probably never buy a consumable)
					// TODO AZ
					// option.IsRemoved = true; // allow them to stay because I want to search for Supplies!
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
		return new FixedSeedContext(this.seed, 823828 * 1231231 + day);
	}

	/**
	 * @param day -- this is the day that you just finished (i.e. the first set of blueprint spawns is on day=1)
	 */
	getAppliances(configs: RerollConfig[], day: number): Appliance[] {
		const isSpawn = configs.length === 1;
		const ShopOptions = this.buildShopOptions(
			this.OwnedAppliances,
			DecorationType.Null,
			this.Cards
		);
		const Random = this.initRandom(day).random;
		let padPRNG = this.getPrngAdvancements(
			configs.slice(0, configs.length - 1)
		);
		while (padPRNG--) {
			// get to the starting point before this reroll first
			Random.value;
		}

		let numberOfBlueprints = configs[configs.length - 1].blueprintCount;
		let components: ShoppingTags[];
		if (day % 5 == 0) {
			if (isSpawn) numberOfBlueprints = 8;
			components = [];
			for (let i = 0; i < numberOfBlueprints; i++) {
				components[i] = ShoppingTags.Decoration;
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
					Math.min(4, Math.max(2, 4 - Math.floor(day / 5)), totalShopCount)
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
		// logger.LogInfo(components.Join((a) => a.ToString(), ","));

		// using (var randomState = GetRandomState(day, seed))
		{
			// this is a no-op:
			// randomState.UseSubcontext(1).Dispose(); // simulate effect of randomly choosing tiles

			// copy shop options in order
			const list: CShopBuilderOption[] = [...ShopOptions];
			const result: Appliance[] = [];
			const upgradeChance = Math.floor(day / 5) * 0.1 + this.baseUpgradeChance;
			const TmpOffered: Appliance[] = [];
			for (let k = 0; k < numberOfBlueprints; k++) {
				const requestedShoppingTag = components[k];
				const roll = Random.valueFloat();
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
					if (!isRemoved) {
						const alreadyInShop = TmpOffered.includes(
							cshopBuilderOption.Appliance
						);
						if (!alreadyInShop) {
							const tagsDifferentFromRequest =
								!cshopBuilderOption.MatchesRequestTags(requestedShoppingTag);
							if (!tagsDifferentFromRequest) {
								const isDisallowedUpgrade =
									!rollUpgradeable &&
									cshopBuilderOption.Staple == ShopStapleType.NonStaple &&
									cshopBuilderOption.SellAsUpgrade;
								if (!isDisallowedUpgrade) {
									const nonDecoration =
										requestedShoppingTag != ShoppingTags.Decoration;
									if (nonDecoration) {
										TmpOffered.push(cshopBuilderOption.Appliance); // prevent duplicates for appliances only
									}
									// logger.LogInfo($"trying to add id:{cshopBuilderOption.Appliance}");
									result[k] = cshopBuilderOption.Appliance;
									break;
								}
							}
						}
					}
				}
				if (result[k] == null) {
					console.log(`Wasn't able to find a valid roll for blueprint ${k}`);
				}
			}
			console.log({ upgradesAllowed, upgradesDisallowed, expectedUpgrades });
			return result;
		}
	}
}

function numTiles(inside: boolean, mapSize: number) {
	// TODO: this is the diner size, will not work for non-solo levels!!!!
	let tiles = 60;
	switch (mapSize) {
		case 1:
			tiles = 60;
			break;
		case 2:
			tiles = 70; // is sometimes 14*6 = 84, can't tell from map size
			break;
		case 3:
			tiles = 9 * 13;
			break;
		case 4:
			tiles = 16 * 12;
			break;
		default:
			console.log(`Unknown Map Size ${mapSize}`);
			tiles = 60;
			break;
	}
	if (inside) return tiles - 2;

	// otherwise is outside only
	return tiles - 1;
}
