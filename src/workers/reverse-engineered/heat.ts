import { Unlock } from "../../kitchenTypes";

/**
 * Reverse-engineered from the "Heat" update (PlateUp GameData.dll / FranchiseMode.dll,
 * Aug 2026).
 *
 * Heat/Chill card selection is fully deterministic - it is NOT seed/RNG dependent.
 * The player picks an integer heat level (positive = Heat, negative = Chill, 0 = none)
 * per-dish before starting a run. At kitchen creation
 * (CreateNewKitchen.InitialiseHeat in the decompiled source), the game walks from
 * level 1 up to abs(level) and adds one card per level to the starting deck:
 *   - Positive levels index into a dish's `HeatOverride.Cards` list (1-indexed), or
 *     the game's `DefaultHeatLevels.Cards` list if the dish has no override.
 *   - Negative levels (Chill) index into the equivalent `ChillCards` list.
 * See KitchenData.HeatLevels.GetCard and KitchenData.GameData.GetHeatCard.
 *
 * NOTE: the actual per-dish HeatOverride / DefaultHeatLevels card-ID lists are game
 * data (ScriptableObjects), not code, and still need to be pulled in via the
 * AssetRipper export and wired up in src/workers/db/. HeatLevelDefinition here is the
 * shape that data needs to take; nothing in this file hardcodes card IDs.
 */

/** 1-indexed lists: Cards[0] is heat level 1, ChillCards[0] is chill level 1. */
export interface HeatLevelDefinition {
	Cards: (number | null)[]; // Unlock IDs
	ChillCards: (number | null)[]; // Unlock IDs
}

export interface HeatCardResult {
	/** Cards added to the starting deck, in the order they were granted (level 1 first). */
	cards: Unlock[];
	/**
	 * Mirrors the `flag` returned by InitialiseHeat in the decompiled source: true if any
	 * granted card carries the HeatWeakStartingAppliances status effect, in which case the
	 * game swaps starting appliances for their WeakVariant. Included for completeness;
	 * most seed-search use cases can likely ignore this.
	 */
	hasWeakStartingAppliances: boolean;
}

/** Port of KitchenData.HeatLevels.GetCard */
export function getCardIdForLevel(
	levels: HeatLevelDefinition | undefined,
	level: number
): number | null {
	if (!levels || level === 0) return null;
	if (level < 0) {
		const idx = -level - 1;
		if (levels.ChillCards.length < -level) return null;
		return levels.ChillCards[idx] ?? null;
	}
	const idx = level - 1;
	if (levels.Cards.length < level) return null;
	return levels.Cards[idx] ?? null;
}

/** Port of KitchenData.GameData.GetHeatCard: dish override takes priority over the default list. */
export function getHeatCardId(
	dishHeatOverride: HeatLevelDefinition | undefined,
	defaultHeatLevels: HeatLevelDefinition | undefined,
	level: number
): number | null {
	const overrideCard = getCardIdForLevel(dishHeatOverride, level);
	if (overrideCard !== null) return overrideCard;
	return getCardIdForLevel(defaultHeatLevels, level);
}

/**
 * Port of CreateNewKitchen.InitialiseHeat: resolves the full set of cards granted for
 * a chosen heat level on a given dish, in the order the game would add them.
 *
 * @param level Player-chosen heat level for this run. Positive = Heat, negative = Chill.
 * @param lookupUnlock ID -> Unlock resolver (e.g. a Map built from db/unlocks.ts).
 */
export function getHeatCardsForRun(
	dishHeatOverride: HeatLevelDefinition | undefined,
	defaultHeatLevels: HeatLevelDefinition | undefined,
	level: number,
	lookupUnlock: (id: number) => Unlock | undefined
): HeatCardResult {
	const cards: Unlock[] = [];
	let hasWeakStartingAppliances = false;
	if (level === 0) return { cards, hasWeakStartingAppliances };

	const isChill = level < 0;
	const steps = Math.abs(level);
	for (let i = 1; i <= steps; i++) {
		const cardLevel = isChill ? -i : i;
		const cardId = getHeatCardId(dishHeatOverride, defaultHeatLevels, cardLevel);
		if (cardId === null) continue;
		const unlock = lookupUnlock(cardId);
		if (!unlock) continue;
		cards.push(unlock);

		// Matches the decompiled `if (flag || !(heatCard is UnlockCard)) continue;` short
		// circuit: only the first card (in level order) with this effect sets the flag,
		// and checking stops once it's set. We don't yet model UnlockEffect/StatusEffect
		// structures in the TS types, so this is left as a hook - see NOTE below.
		if (!hasWeakStartingAppliances) {
			hasWeakStartingAppliances = hasHeatWeakStartingAppliancesEffect(unlock);
		}
	}
	return { cards, hasWeakStartingAppliances };
}

// NOTE: this repo's Unlock type doesn't currently carry UnlockCard.Effects /
// StatusEffect data, so this always returns false until that's wired up from the
// AssetRipper export. Structuring it as its own function so that hookup is a
// one-line change here rather than a change to getHeatCardsForRun's logic.
function hasHeatWeakStartingAppliancesEffect(_unlock: Unlock): boolean {
	return false;
}
