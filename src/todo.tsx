const TODO = () => {
	return (
		<div>
			<h1>Dev</h1>
			<h2>Integrations?</h2>
			<ul>
				<li>
					GAS webapp to live export to sheets? -- can do, but not user-friendly
					and... quite slow
				</li>
				<li>Discord webhook? But why?</li>
			</ul>
			<h2>Weekly</h2>
			<ul>
				<li>data export--seems to be sufficient?</li>
				<li>
					Romantic........ eventually. Lower priority since it only shows up
					~once a month for in-game speedruns
				</li>
			</ul>
			<h2>Autumn</h2>
			Turkey, Nut Roast get <s>boosted</s> <i>blocked </i>
			25% of the time -- done
			<h2>Blueprints</h2>
			<ul>
				<li>Plates staple-ness wrong on Coffee/Cakes -- done I think?</li>
				<li>Supplies</li>
				<li>
					Ingredients update immediately upon choosing the card, processes don't
					update until the next day ends (requires knowing the day a card is
					actually taken to fix) -- most common case accounted for with card
					schedule, but it doesn't account for practice mode/ingredient box
					shenanigans... Adding UI for those is probably just going to confuse
					most people? Do I make a more "advanced" tool, or just assume people
					don't care?
				</li>
				<ul>
					<li>
						Extras/recipe modifications <b>NEVER</b> UPDATE PROCESSES???
						(azga7d3z: Burgers, Burger Toppings, Charming, Cheeseburgers, Fresh
						Patties, Pumpkin Pies) -- fixed
					</li>
					<li>
						(This would explain why, in addition to the weird itemgroup
						mechanics, why breakfast and burger toppings are doubly terrible)
					</li>
				</ul>
				<li>
					Blueprint desk eats up spawns -&gt; prng doesn't advance -&gt; rerolls
					off by one per bp desk, until bp desks exceeds non-staple spawn
					count(?)
				</li>
			</ul>
			<h2>QOL?</h2>
			<ul>
				<li>
					browser extension to show unverified runs inline on the src
					leaderboards?
				</li>
				<li>
					Seed searcher: estimate number of seeds in existance that fit all the
					requirements, warn if too low
				</li>
				<li>Add drag-and-drop reordering of card preferences</li>
				<li>
					Progress indicator that the web worker is running in the background--
					make this compatible with multi-threading -- done?, minus
					multithreading and future-proofing........
				</li>
				<li>Instructions about how to use include/exclude toggler?</li>
				<li>Push/Native notification when a seed is found? </li>
				<li>
					Non-web tools?
					<ul>
						<li>
							Auto splits switcher for livesplit (need to either extend
							LiveSplit.Server or run two servers at once, then make a
							corresponding mod on plateup side to send leaderboard-related
							variables over)
						</li>
						<li>
							prevent starting the restaurant on set seed if using one of a
							configurable list "random seed" layout seeds? -- done, waiting on
							approval for speedrunning
						</li>
					</ul>
				</li>
			</ul>
			<h2>Tech Debt?</h2>
			<h3>better repo organization.... </h3>
			<ul>
				<li>
					use a Router to centralize rendering? or will that break bundle
					splitting benefits?
					<ul>
						<li>
							Router done, it didn't impact bundle splitting, but it did make
							page loads really laggy
						</li>
						<li>
							setup SSR to pre-compile pages, should be even faster than the
							original setup because the UI will be baked into the html
						</li>
					</ul>
				</li>
				<li>
					separate the page rendering from the underlying components-- done with
					router refac
				</li>
			</ul>
			<h3>Cards</h3>
			<ul>
				<li>build a better framework to handle the different settings</li>
				<li>cache the card filtering?</li>
			</ul>
			<h1>Theorycraft/Jank?</h1>
			<ul>
				<li>
					Can you have a coffee franchise with starter/sides but no main? --
					yes, only 2 courses with starters but reductions equivalent to 3
					because game always assumes you have a main. Sides can't be ordered
					because there's no main course
				</li>
				<li>investigate auto-supplies/specials interactions</li>
				<li>auto-plater/charming 3/dirty dish stack race condition?</li>
				<li>force teleport table layout? </li>
				<ul>
					<li>
						ordering detection seems to be a bit broken, maybe force teleport to
						coffee table so they can walk to tables normally
					</li>
					<li>
						how to handle the outside table? serve once and never again, or is
						there some way to avoid needing to access it?
					</li>
				</ul>
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
			<h3>Black Flower Stir Fry Autumn</h3>
			<ul>
				Layout scratch:
				<li>
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGOcCuAvApsgtiZAjALWQCkARZARQEtkBBAJ3tQpIENkRbkBHAIWQDM5JMhFiU40RJQAbbj170+aTAHkAnCuQATAOL0RAUQAqyAJ40QAWQX05tyY+kLtI6w5TqALMgDWwZAAHACspMMk+V2cnMI1kMAANAFoUlIAZVIB1dNTUgH1cpOTcjIAzIA">
						buy 3 tables, no shuffling plates for dessert?
					</a>
				</li>
				<li>
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGAjgIQK4GYAiqC2JUBGAWqgFLYCKAlqgIIBO9AXhWQIaoi2oA2iqKenDiphokWMkTpnALIDk9FKiYBTVAHkAnCvUATAOJCRAUQAqqAJ40UelDxDzBU8a5cvbLrQBZUAa2BUAAcAK1c1Nxl3KJE+TR0wAA0AWlTUgBk0gHUMtLSAfTzklLzMgDMgA">
						buy 2 tables
					</a>
				</li>
				<li>
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGOcCuTUrZj327QRwCE8VkB1XAQQHETciAbB-ZIgJzQCMAtZALwCmySmzYATahxwFCYosgYKsdZTKYt2AeQCcyAIYB7ZDv5DtAFmQBrYA2VExq6c+RgAGgFovXgDLeyvt7eAPpBHp5BfgBmQA">
						buy 1 table, have to run throuh door to serve, easy extension to
						handle dumplings
					</a>
				</li>
			</ul>
			<h2>Large Groups Coffee?</h2>
			<ul>
				<li>
					ending layout scratch:{" "}
					<a href="https://plateupplanner.github.io/workspace#G4JgBAbAHgjADGANgRwK5zqgDgKwCYbqaEnGYpGoBqAlqgEYBaqAklJRRaZd9xACI8yqLsNGUA0gFEhHNN3EK0i4b1XrKAZhgi0YABoBaY8YAyJgOpmTJgPo2H1gGZA">
						planner
					</a>
				</li>
			</ul>
			<h2>0XP to 100% Achievements</h2>
			<ul>
				<li>Base dishes don't give XP</li>
				<li>~double XP/time efficiency from franchising</li>
				<li>
					Add a normal/autumn seed searcher that goes to OT15-- done, unless I
					find more bugs......
				</li>
			</ul>
		</div>
	);
};
export default TODO;
