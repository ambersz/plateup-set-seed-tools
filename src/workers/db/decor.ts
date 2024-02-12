import decorCounts from "./decorCounts.csv?raw";
export interface Decor {
	IsAvailable: true;
}
export const Decors: Decor[] = [];
export const numDecors = Number(decorCounts);
