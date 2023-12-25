import { render } from "preact";
import "./index.css";

const Navigation = () => {
	return (
		<>
			<h2>Set Seed Tools:</h2>
			<ul>
				<li>
					<a href="weekly.html">Weekly Speedrun</a>
				</li>
				<li>
					<a href="seed-searcher.html">Turbo Seed Searcher</a>
				</li>
				<li>
					<a href="branching-rerolls.html">Blueprint Rerolls</a>
				</li>
			</ul>
			<h2>Notes/Weird Mechanics?</h2>
			<ul>
				<li>
					<a href="coffee.html">Coffee Eating Times</a>
				</li>
				<li>
					<a href="TODO.html">TODO</a>
				</li>
				{/* <li>
					<a href="layouts.html">Layouts</a>
				</li> */}
			</ul>
		</>
	);
};
render(
	// <WeeklyForm defaultSeed={"t4tmhm8r"} />,
	<Navigation />,
	document.getElementById("app")!
);
