import { Unlock } from "../kitchenTypes";
import cardExport from "./cardExport.csv?raw";
export const Unlocks: Unlock[] = cardExport.split("\r\n").map((line) => {
	const [idString, Name, processesString, ingredientProvidersString] =
		line.split(",");
	const ID = Number(idString);
	const RequiredProcesses =
		processesString?.split(":")?.map((a) => Number(a)) ?? [];
	const IngredientProviders =
		ingredientProvidersString?.split(":")?.map((id) => Number(id)) ?? [];
	return { ID, Name, RequiredProcesses, IngredientProviders };
});

import.meta.env.DEV && console.log({ Unlocks });
