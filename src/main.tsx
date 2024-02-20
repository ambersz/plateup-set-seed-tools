import { render } from "preact";
import "./index.css";
import Version from "./components/Version";
import { unlockTests } from "./tests/unlockTests";
import { shopTests } from "./tests/shopTests";

const Navigation = () => {
	return (
		<>
			<h2>Set Seed Tools:</h2>
			<ul>
				<li>
					<a href="turbo-seed-searcher.html">Turbo Seed Searcher</a>
				</li>
				<li>
					<a href="normal-seed-searcher.html">Normal/Autumn Seed Searcher</a>
				</li>
				<li>
					<a href="versus-seeds.html">Normal/Autumn Versus Seed Generator</a>{" "}
					(Limit card choice butterfly effect)
				</li>
				<li>Incomplete/very buggy:</li>
				<ul>
					<li>
						<a href="branching-rerolls.html">Blueprint Rerolls</a>
					</li>
					<li>
						<a href="card-paths.html">Card Paths</a>
					</li>
					<li>
						<a href="weekly.html">Weekly Speedrun</a>
					</li>
				</ul>
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
			<Version />
		</>
	);
};
render(
	// <WeeklyForm defaultSeed={"t4tmhm8r"} />,
	<Navigation />,
	document.getElementById("app")!
);

if (import.meta.env.DEV) {
	unlockTests();
	shopTests();
}
