import "./index.css";

import { render } from "preact";
const TODO = () => {
	return (
		<div>
			<h1>Dev</h1>
			<h2>QOL?</h2>
			<ul>
				<li>
					Seed searcher: estimate number of seeds in existance that fit all the
					requirements, warn if too low
				</li>
				<li>
					Progress indicator that the web worker is running in the background--
					make this compatible with multi-threading
				</li>
				<li>Instructions about how to use include/exclude toggler</li>
				<li>Push/Native notification when a seed is found? </li>
			</ul>
			<h2>Cards</h2>
			<ul>
				<li>build a better framework to handle the different settings</li>
				<li>cache the card filtering?</li>
			</ul>
			<h3>Autumn</h3>
			Turkey, Nut Roast get boosted 25% of the time
			<h2>Blueprints</h2>
			<ul>
				<li>Plates staple-ness wrong on Coffee/Cakes</li>
				<li>Supplies</li>
				<li>Investigate Blueprint Desk interaction?</li>
			</ul>
			<h1>Theorycraft/Jank?</h1>
			<ul>
				<li>investigate auto-supplies/specials interactions</li>
				<li>auto-plater/charming 3/dirty dish stack race condition?</li>
			</ul>
			<h3>No-plate recipe diner layouts, display stand vs tables:</h3>
			<ul>
				<li>
					7 display stand, 3 tables{" "}
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGAjgIQDasQVznbud6EHG4qYoAmJR+tNmG5yATiultZ3QKwX2WpMzLvV6ExYkSLGDMEvlLoEwADQC0GjQBlNAdW2bNAfUNr1hnQDMgA">
						planner
					</a>
				</li>
				<li>
					8 display stand, 3 tables{" "}
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGArAEwK4tXOntZ-vQ7AGwEdVSAhAJyINwfosuSueLKbrozLJqrJiqWo27YMPNOK4S0vVOmliV+MAA0AtNu0AZHQHU9OnQH0TmrSf0AzIA">
						planner
					</a>
				</li>
				<li>
					5 display stand, 4 tables{" "}
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGArAEwK4tXOntZ-vQ7AGwEdVSAhAJyINwfosuSufbs8bzOoBUQ1MsS5M6VViwnFUtbvNQz0aDBlGiwADQC0u3QBk9AdQN69AfTPadZwwDMgA">
						planner
					</a>
				</li>
				<li>
					3 display stand, 4 table, 1 bar{" "}
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGALgNQK4EcBCAnOdV4H6EnFmoA26GOpR9ddWAJlje4+Z5etgCohsVCt1H4WEzMwqpcXeZVSoArMxVrVDBXTAANALSHDAGSMB1E0aMB9K-oNXTAMyA">
						planner
					</a>
				</li>
			</ul>
		</div>
	);
};
render(<TODO />, document.getElementById("app")!);
