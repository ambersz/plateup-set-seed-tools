import { render } from "preact";
import "./index.css";
import { WeeklyForm } from "./WeeklyForm";
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
	<WeeklyForm disableSeedInput maxRerolls={5} />,
	document.getElementById("app")!
);
