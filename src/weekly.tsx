import { render } from "preact";
import "./index.css";
import { WeeklyForm } from "./WeeklyForm";
const seedD = "t4tmhm8r";
const cardOptions = [
	"Breakfast",
	"Breakfast Eggs",
	"Breakfast Extras",
	"Breakfast Beans",
	"Pumpkin Seed",
];
const cardDefaults: { [cardName: string]: boolean } = {};
for (const cardName of cardOptions) {
	cardDefaults[cardName] = false;
}
cardDefaults.Breakfast = true;
render(
	<WeeklyForm
		defaultSeed={seedD}
		disableSeedInput
		cardDefaults={cardDefaults}
		maxRerolls={5}
	/>,
	document.getElementById("app")!
);
