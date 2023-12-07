import { render } from "preact";
import "./index.css";
import { WeeklyForm } from "./WeeklyForm.tsx";
// const seedD = "az95tz5z";

render(
	<WeeklyForm defaultSeed={"t4tmhm8r"} />,
	document.getElementById("app")!
);
