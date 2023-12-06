interface Unlock {
	ID: number;
	Name: string;
	// isUnlockable: boolean;
	// UnlockGroup: UnlockGroup;
	// CustomerMultiplier: number;
	// SelectionBias: number;
	// Requires: Unlock[];
	// BlockedBy: Unlock[];
	RequiredProcesses: Process[];
	IngredientProviders: number[]; // ID of Appliance
}
enum UnlockGroup {
	Generic,
	Dish,
	PrimaryTheme = 3,
	SecondaryTheme,
	Special = 6,
}

interface UnlockPack {}
interface UnlockSet {
	ID: number;
}
interface UnlockFilter {}
interface UnlockSorter {}
interface ConditionalOptions {}

export class Process {}
