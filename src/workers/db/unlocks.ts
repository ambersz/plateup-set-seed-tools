import type { Unlock } from "../../kitchenTypes";
import { DishType, UnlockGroup } from "../../kitchenEnums";
import cardExport from "./cardExport.csv?raw";
export const Unlocks: Unlock[] = cardExport
	.split("\r\n")
	.filter((a) => a)
	.map((line) => {
		const [
			idString,
			Name,
			unlockGroupString,
			RequiresString,
			BlockedByString,
			processesString,
			ingredientProvidersString,
			isMainString,
			isStarterOrSideString,
			DishTypeString,
		] = line.split(",");
		const ID = Number(idString);
		const UnlockGroup = Number(unlockGroupString);
		const Requires = RequiresString?.length
			? RequiresString.split(":").map((i) => Number(i))
			: [];
		const BlockedBy = BlockedByString.length
			? BlockedByString.split(":").map((i) => Number(i))
			: [];
		const RequiredProcesses = processesString?.length
			? processesString?.split(":")?.map((a) => Number(a))
			: [];
		const IngredientProviders = ingredientProvidersString?.length
			? ingredientProvidersString?.split(":")?.map((id) => Number(id))
			: [];
		const isMain = isMainString === "True";
		const isStarterOrSide = isStarterOrSideString === "True";
		const DishType = Number(DishTypeString);
		return {
			ID,
			Name,
			UnlockGroup,
			Requires,
			BlockedBy,
			RequiredProcesses,
			IngredientProviders,
			isMain,
			isStarterOrSide,
			DishType,
		};
	});

export function getUnblockedCards(
	currentCards: Unlock[],
	respectAutumn = true
) {
	const autumn =
		respectAutumn && currentCards.some((a) => a.Name === "Community");
	return Unlocks.filter((u) => {
		if (currentCards.some((v) => v.ID === u.ID)) return false; // no dupe cards
		if (u.BlockedBy.some((b) => currentCards.some((c) => c.ID === b)))
			return false;
		if (u.Requires.some((r) => !currentCards.some((c) => c.ID === r)))
			return false;

		// If you don't have a main course, you don't get offered starters or sides (only currently relevant to coffee and cakes)
		// this is enabled even on Autumn-- you only get offered mains until you take one, and only then will you get offered starters and sides
		if (u.isStarterOrSide && !currentCards.some((c) => c.isMain)) {
			return false;
		}
		// TODO Autumn doesn't use this filter
		if (!autumn && u.DishType === DishType.Base) {
			return false;
		}

		/*
		if (!this.AllowBaseDishes)
			{
				Dish dish = candidate as Dish;
				if (dish != null && dish.Type == DishType.Base)
				{
					return true;
				}
			}
			*/
		return true;
	}).sort((a, b) => a.ID - b.ID);
}
// [Info   :MyFirstPlugin] Speedrun Configs:
// [Info   :MyFirstPlugin] Country, City, Alpine, Autumn, Romantic
// [Info   :MyFirstPlugin] Breakfast, Burgers, Hot Dogs, Fish, Pies, Salad, Stir Fry, Pizza, Turkey

export const RestaurantSettings: Unlock[] = [
	{
		ID: 447437163,
		Name: "Country",
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
	},
	{
		ID: 2002876295,
		Name: "City",
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
	},
	{
		ID: -1864906012,
		Name: "Alpine",
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
	},
	Unlocks.filter((a) => a.Name === "Community")[0], // the Autumn Setting gets this card
	// {
	// 	ID: -405456638,
	// 	Name: "Autumn",
	// 	UnlockGroup: UnlockGroup.Special,
	// 	Requires: [],
	// 	BlockedBy: [],
	// 	RequiredProcesses: [],
	// 	IngredientProviders: [],
	// 	isMain: false,
	// 	isStarterOrSide: false,
	// 	DishType: DishType.Null,
	// },
	{
		ID: 1766067755,
		Name: "Romantic",
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
	},
	{
		ID: 1958825350,
		Name: "Turbo",
		UnlockGroup: UnlockGroup.Special,
		Requires: [],
		BlockedBy: [],
		RequiredProcesses: [],
		IngredientProviders: [],
		isMain: false,
		isStarterOrSide: false,
		DishType: DishType.Null,
	},
];

export const SpeedrunDishes = [
	"Breakfast",
	"Burgers",
	"Hot Dogs",
	"Fish",
	"Pies",
	"Salad",
	"Stir Fry",
	"Pizza",
	"Turkey",
].map((name) => Unlocks.filter((a) => a.Name === name)[0]);

import.meta.env.DEV && console.log({ Unlocks });
