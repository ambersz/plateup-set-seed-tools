import type { Unlock } from "../../kitchenTypes";
import { DishType, UnlockGroup } from "../../kitchenEnums";
import type { HeatLevelDefinition } from "../reverse-engineered/heat";

/**
 * Heat/Chill card data for the "Heat" update (Aug 2026), resolved from the game's own
 * asset export ("Heat Levels - Default.asset" in KitchenData). See heat.ts for how
 * these are consumed.
 *
 * Card IDs were resolved by matching the asset's Unity GUID references against their
 * .meta files and pulling each target's `ID:` field - these are not present in
 * cardExport.csv since they're granted directly rather than appearing in the normal
 * shop/unlock pool. Only ID + Name are meaningfully known for each; the rest of the
 * Unlock fields are filled with neutral defaults since these cards don't participate
 * in dependency/shop filtering the way normal unlocks do.
 *
 * NOT YET DONE: per-dish heat overrides. "Steak Heat Overrides.asset" was pulled and
 * turned out to reference no cards (falls back to defaults for every level as-is,
 * or the override simply isn't populated for Steak) - but other dishes may have real
 * overrides we haven't pulled yet. Treat DefaultHeatLevels as the correct fallback for
 * any dish without a confirmed override.
 */

function heatUnlock(ID: number, Name: string): Unlock {
	return {
		ID,
		Name,
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		CustomerMultiplier: 0,
		DishValue: 0,
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
		IsUnlockable: true,
		MinimumFranchiseTier: 0,
		IsSpecificFranchiseTier: false,
	};
}

// Heat levels 1-15, in order (Heat Levels - Default.asset -> Cards).
export const HeatCards: Unlock[] = [
	heatUnlock(1299515713, "Heat - Weak Starting Appliances"),
	heatUnlock(1382681650, "Heat - Food Card After Day 2"),
	heatUnlock(2137249839, "Heat - Queue Nerfs"),
	heatUnlock(1898278106, "Heat - Mess Slows Eating"),
	heatUnlock(1510465155, "Heat - Larger Groups"),
	heatUnlock(737629539, "Heat - Overchopping"),
	heatUnlock(-43856987, "Heat - Rent"),
	heatUnlock(-2134682523, "Heat - Processes Slower"),
	heatUnlock(1901536762, "Heat - More Customers"),
	heatUnlock(421796067, "Heat - Starter Or Dessert"),
	heatUnlock(1358714374, "Heat 11 - Extra Flammability"),
	heatUnlock(118281906, "Heat 12 - Flammable Desks"),
	heatUnlock(-1636036373, "Heat 13 - Bad Processes Start Fires"),
	heatUnlock(-1280757615, "Heat 14 - Flammable Customers"),
	heatUnlock(-1409140412, "Heat - More Customers Flat 5"), // Heat 15
];

// Chill levels 1-3, in order (Heat Levels - Default.asset -> ChillCards).
export const ChillCards: Unlock[] = [
	heatUnlock(-1889522844, "Chill - Easy 1"),
	heatUnlock(-1542554250, "Chill - Easy 2"),
	heatUnlock(1134277391, "Chill - Easy 3"),
];

export const DefaultHeatLevels: HeatLevelDefinition = {
	Cards: HeatCards.map((c) => c.ID),
	ChillCards: ChillCards.map((c) => c.ID),
};

const byId = new Map<number, Unlock>(
	[...HeatCards, ...ChillCards].map((c) => [c.ID, c])
);

export function lookupHeatUnlock(id: number): Unlock | undefined {
	return byId.get(id);
}
