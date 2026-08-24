// Ports Common/Kitchen/Seasons.cs. The real game gates a handful of seasonal decorations
// (Halloween/Christmas) out of the shop pool via Appliance.RestrictedToSeason, checked against
// Seasons.GetSeason() (real-world DateTime.Now, not the run seed). Missing this filter entirely
// was confirmed to desync the shop's Fisher-Yates shuffle from the first swap, since it changes
// the candidate list's length: a handful of always-purchasable Christmas decorations (Present
// Stack, Wreath, Christmas Tree, Banner, Tinsel, Fairy Lights) were being included year-round.
export enum Season {
	Normal = 0,
	Halloween = 1,
	Christmas = 2,
}

// (ID, RestrictedToSeason) for every Appliance with a non-Normal RestrictedToSeason, extracted
// directly from the raw asset data (grepped `RestrictedToSeason:` across every MonoBehaviour
// .asset - only 9 appliances total are restricted, most of which aren't even purchasable).
const SEASON_RESTRICTED_IDS: Record<number, Season> = {
	[-1552572658]: Season.Halloween, // Candles
	[-379172217]: Season.Halloween, // Witch Shelf
	[-119593913]: Season.Halloween, // Pumpkin Stack
	[-1889835507]: Season.Christmas, // Present Stack
	[-302306254]: Season.Christmas, // Wreath
	[-602487625]: Season.Christmas, // Christmas Tree
	[-1380985631]: Season.Christmas, // Banner
	[-380823608]: Season.Christmas, // Tinsel
	[-4737636]: Season.Christmas, // Fairy Lights
};

export function getRestrictedToSeason(applianceId: number): Season {
	return SEASON_RESTRICTED_IDS[applianceId] ?? Season.Normal;
}

const DATE_RANGES: [Season, [number, number], [number, number]][] = [
	[Season.Halloween, [10, 20], [11, 17]],
	[Season.Christmas, [12, 10], [12, 31]],
	[Season.Christmas, [1, 1], [1, 5]],
];

function dayOfYear(year: number, month: number, day: number): number {
	return Math.floor(
		(Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 1)) / 86400000
	);
}

function isBetween(
	[fromMonth, fromDay]: [number, number],
	[toMonth, toDay]: [number, number],
	date: Date
): boolean {
	const year = date.getFullYear();
	const target = dayOfYear(year, date.getMonth() + 1, date.getDate());
	const from = dayOfYear(year, fromMonth, fromDay);
	const to = dayOfYear(year, toMonth, toDay);
	return from <= target && target <= to;
}

export function getSeason(date: Date = new Date()): Season {
	for (const [season, from, to] of DATE_RANGES) {
		if (isBetween(from, to, date)) return season;
	}
	return Season.Normal;
}
