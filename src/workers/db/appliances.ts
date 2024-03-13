import s from "./blueprints.csv?raw";

export interface Appliance {
	ID: number;
	IsPurchasable: boolean;
	IsPurchasableAsUpgrade: boolean;
	Name: string;
	SellOnlyAsDuplicate: boolean;
	SellOnlyAsUnique: boolean;
	RequiresForShop: number[]; // Appliance IDs
	RequiresProcessForShop: number[]; // Process IDs

	ShoppingTags: ShoppingTags;
	ThemeRequired: DecorationType;
	// PurchaseCost
	ShopRequirementFilter: ShopRequirementFilter;
	StapleWhenMissing: boolean;
	AllowRefreshes: boolean;
}

const APPLIANCE_KEYS: (keyof Appliance)[] = [
	"ID",
	"IsPurchasable",
	"IsPurchasableAsUpgrade",
	"Name",
	"SellOnlyAsDuplicate",
	"SellOnlyAsUnique",
	"RequiresForShop",
	"RequiresProcessForShop",
	"ShoppingTags",
	"ThemeRequired",
	"ShopRequirementFilter",
	"StapleWhenMissing",
	"AllowRefreshes",
];

const APPLIANCE_PROPERTY_TYPES = [
	"number",
	"boolean",
	"boolean",
	"string",
	"boolean",
	"boolean",
	"number[]",
	"number[]",
	"number", // enum
	"number", // enum
	"number", // enum
	"boolean",
	"boolean",
];
// @ts-ignore
const Appliances: Appliance[] = s.split("\r\n").map((line) => {
	const l = line.split(",");
	// @ts-ignore
	let appliance: Appliance = {};
	for (let i = 0; i < l.length; i++) {
		let val;
		switch (APPLIANCE_PROPERTY_TYPES[i]) {
			case "number":
				val = Number(l[i]);
				break;
			case "boolean":
				val = l[i] === "True" ? true : false;
				// if (!val) console.log(l[i] === "True\r");
				break;
			case "number[]":
				if (l[i] === "") {
					val = [];
				} else {
					val = l[i].split(":").map((a) => Number(a));
				}
				break;
			default:
				val = l[i];
		}
		// @ts-ignore
		appliance[APPLIANCE_KEYS[i]] = val;
	}
	return appliance;
});

export class CShopBuilderOption {
	Staple: ShopStapleType;
	Tags: ShoppingTags;
	StapleWhenMissing: boolean;
	Appliance: Appliance;
	IsRemoved: boolean;
	Filter: ShopRequirementFilter;
	DecorationRequired: DecorationType;
	SellAsUpgrade: boolean;
	constructor(appliance: Appliance) {
		this.Appliance = appliance;
		this.Tags = appliance.ShoppingTags;
		this.DecorationRequired = appliance.ThemeRequired;
		// this.BasePrice = appliance.PurchaseCost;
		this.SellAsUpgrade = appliance.IsPurchasableAsUpgrade;
		this.Filter = appliance.ShopRequirementFilter;
		this.StapleWhenMissing = appliance.StapleWhenMissing;
		this.Staple = 0;
		this.IsRemoved = false;
	}
	MatchesRequestTags(tags: ShoppingTags): boolean {
		if ((tags & ShoppingTags.Basic) != 0) {
			return this.Staple !== ShopStapleType.NonStaple;
		}
		if ((tags & this.Tags) != 0) {
			return this.Staple === ShopStapleType.NonStaple;
		}

		return false;
	}
}
export enum ShopStapleType {
	// Token: 0x04001074 RID: 4212
	NonStaple,
	// Token: 0x04001075 RID: 4213
	FixedStaple,
	// Token: 0x04001076 RID: 4214
	BonusStaple,
	// Token: 0x04001077 RID: 4215
	WhenMissing,
}

export enum ShoppingTags {
	None = 0x0,
	Basic = 0x1,
	Decoration = 0x2,
	Technology = 0x4,
	FrontOfHouse = 0x8,
	Plumbing = 0x10,
	Cooking = 0x20,
	Automation = 0x40,
	Christmas = 0x80,
	Misc = 0x100,
	Office = 0x200,
	BlueprintUpgrader = 0x400,
	BlueprintStore = 0x800,
	Halloween = 0x1000,
	SpecialEvent = 0x2000,
}

export const ShoppingTagsExtensions = {
	DefaultShoppingTag:
		ShoppingTags.Technology |
		ShoppingTags.FrontOfHouse |
		ShoppingTags.Plumbing |
		ShoppingTags.Cooking |
		ShoppingTags.Automation |
		ShoppingTags.Misc |
		ShoppingTags.Office,
};

export enum ShopRequirementFilter {
	// Token: 0x04000169 RID: 361
	None,
	// Token: 0x0400016A RID: 362
	RefreshableProvider,
}

export enum DecorationType {
	// Token: 0x040001FE RID: 510
	Null = 0,
	// Token: 0x040001FF RID: 511
	Exclusive = 1,
	// Token: 0x04000200 RID: 512
	Affordable = 2,
	// Token: 0x04000201 RID: 513
	Charming = 4,
	// Token: 0x04000202 RID: 514
	Formal = 8,
	// Token: 0x04000203 RID: 515
	Kitchen = 16,
}

export default Appliances;
