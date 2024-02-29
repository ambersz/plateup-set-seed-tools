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
const WeeklyPage = () => <WeeklyForm disableSeedInput maxRerolls={5} />;
export default WeeklyPage;
