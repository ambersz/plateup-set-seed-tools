import { DishType, UnlockGroup } from "./kitchenEnums";

export interface Unlock {
	ID: number;
	Name: string;
	// isUnlockable: boolean;
	UnlockGroup: UnlockGroup;
	// CustomerMultiplier: number;
	// SelectionBias: number; // Not used anymore???
	Requires: number[];
	BlockedBy: number[];
	RequiredProcesses: Process[];
	IngredientProviders: number[]; // ID of Appliance

	// Derivative properties that I want to add for filtering convenience
	isMain: boolean; // true if it's a dish that dish.ProvidesPhase(MenuPhase.Main)
	isStarterOrSide: boolean; // true if it's a dish that either provides starter or side phase
	DishType: DishType;
}
interface UnlockPack {}
interface UnlockSet {
	ID: number;
}
interface UnlockFilter {}
interface UnlockSorter {}
interface ConditionalOptions {}

export class Process {}
