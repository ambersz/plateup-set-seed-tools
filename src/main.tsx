import { render } from "preact";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
render(
	// <WeeklyForm defaultSeed={"t4tmhm8r"} />,
	// <Navigation />,
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("app")!
);
