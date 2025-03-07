import { Link } from "react-router-dom";
export const Navigation = () => {
	return (
		<>
			<h2>Set Seed Tools:</h2>
			<ul>
				<li>
					<Link to="branching-rerolls.html">Blueprint Rerolls</Link>
				</li>
				<li>
					<Link to="turbo-seed-searcher.html">Turbo Seed Searcher</Link>
				</li>
				<li>
					<Link to="normal-seed-searcher.html">
						Normal/Autumn Seed Searcher
					</Link>
				</li>
				<li>
					<Link to="versus-seeds.html">
						Normal/Autumn Versus Seed Generator
					</Link>{" "}
					(Limit card choice butterfly effect)
				</li>
				<li>
					<Link to="weekly-export.html">Weekly Speedrun Data Export</Link>
				</li>
				<li>Incomplete/very buggy:</li>
				<ul>
					<li>
						<Link to="card-paths.html">Card Paths</Link>
					</li>
					<li>
						<Link to="weekly.html">Weekly Speedrun</Link>
					</li>

					<li>
						<Link to="build-a-rig.html">Build-A-Rig?</Link>
					</li>
					<li>
						<Link to="seed-info.html">Group Sizes</Link>
					</li>
					<li>
						<Link to="dig.html">Dig</Link> - Given a day, reroll count, and
						other restrictions, find specific blueprints of interest
					</li>
				</ul>
			</ul>
			<h2>Notes/Weird Mechanics?</h2>
			<ul>
				<li>
					<Link to="coffee.html">Coffee Eating Times</Link>
				</li>
				<li>
					<Link to="ice-cream.html">Ice Cream</Link>
				</li>
				<li>
					<Link to="scumming.html">Save Scum Cabinet Layouts</Link>
				</li>
				<li>
					<Link to="TODO.html">TODO</Link>
				</li>
				<li>
					<Link to="randomRerollManip.html">
						Random Seed Reroll Manipulation?
					</Link>
				</li>
				{import.meta.env.DEV && (
					<>
						<li>
							<Link to="researchProbabilities.html">
								Research Probabilities
							</Link>
						</li>
						<li>
							<Link to="breakfast-auto.html">Breakfast Auto Timings?</Link>
						</li>
					</>
				)}
				{/* <li>
                <Link to="layouts.html">Layouts</Link>
            </li> */}
			</ul>
		</>
	);
};
