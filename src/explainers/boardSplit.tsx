const Cite = (...links: string[]) => {
	return (
		<>
			{links.map((link, index) => (
				<>
					{true ? " " : ""}
					<a href={link}>({index + 1})</a>
				</>
			))}
		</>
	);
};
const BoardSplit = () => {
	return (
		<>
			<div>
				My notes from reading the discussion about the board split, with links
				to some relevant messages (Please don't use number of links as a proxy
				for support-- there were many messages saying similar things, I just
				took a selection). Mostly summary, but keep in mind it also includes
				some of my own thoughts and may be colored by my interpretations,
				mis-interpretations, and/or opinions. (Also may be biased in different
				ways in different sections because reading the discussion changed my
				opinion halfway through writing this 😅)
			</div>
			<br />
			<table>
				<thead>
					{/* <th>How much has the game changed?</th>
						<th>The game has (probably) become faster. How should runs becoming faster or slower impact a decision to split the board?</th>
						<th>What makes a record/placement feel valuable? (How would a board split's effects on pre-1.2.0 runs make people feel generally?)</th>
						<th>What effects would a board split have on curious outsiders?</th>
						<th>What effects would a board split have on potential new runners?</th>
					</tr> */}
					<tr>
						<td>Qs/Aspects</td>
						<td colSpan={3}>Different takes?</td>
						<td>Other/my thoughts</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						{/* <th>...</th> */}
						<th>How much additional "work" would a board split result in?</th>
						<td>
							Low: (Lean no split slightly) Verifiers' additional work is mostly
							from people improving times because the new version is faster-- a
							board split won't <i>create</i> a significant number of extra runs
							beyond what was already going to be submitted
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271148711648563301"
							)}
						</td>
						<td>
							Medium: (Lean no split more) lots of new runs to fill in empty
							leaderboards will be submitted even if they were slower than a WR
							by the same runner/group on the older, slower version-- high load
							for verifiers, but not for runners (because incentive to re-run
							old categories is just more fun!)
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271305624222830623"
							)}
						</td>
						<td>
							High: (Lean no split strongly) lots of new runs to fill in empty
							leaderboards will be submitted even if they were slower than a
							pre-split WR/PB-- high load for verifiers AND runners (because
							re-running old categories for WRs feels forced by bureaucracy
							rather than rewarding)
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271127386775097439",
								"https://discord.com/channels/839124832171851786/981256908801454152/1270906564261183509"
							)}
						</td>
						<td>
							For context, as of 1.1.9 PlateUp had 434 runnable categories
							(accounting for player and set seed restrictions on some map
							settings) and now, 12 months since the 1.1.7 board split, about a
							quarter of the leaderboards are still empty.
							<br /> Due to the introduction of Tacos, 1.2.0 PlateUp has added
							31 new categories for Tacos as a starting dish for a total of 465
							categories. A board split would mean introducing 465 completely
							empty leaderboards. (Actually potentially 570, pending certain mod
							approvals)
							<br />
							Probably doesn't make sense to directly compare version-based
							board splits on other games to this potential board split because
							the number of unique leaderboards we have is so large.
						</td>
					</tr>
					<tr>
						<th>
							What makes a record/placement valuable? (How would a board split's
							effects on existing runs make people feel generally?)
						</th>
						<td>
							The placement number: (Lean split) The lower the placement, the
							less relevant the run. Splitting leaderboards will prevent people
							from submitting runs that beat pre-split runs, therefore their
							placements are protected. Achievements and recognition of hard
							work on the older, slower versions are preserved
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271186528193871895"
							)}
						</td>
						<td>
							Visibility of records: (Lean no split) Because old records are not
							in the default view, they will tend only to be seen by people who
							are specifically looking for old records as opposed to anyone
							checking the leaderboard, and that makes pre-split records feel
							less valuable/appreciated.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270972841621196861"
							)}
						</td>
						<td>
							Competition: (Lean no split) A submitted time feels valuable
							because of the context of runs you are faster/slower than; or
							because people can <i>try</i> to beat your time, but they haven't
							succeeded (yet). Splitting the board means no one can even try to
							beat your pre-split times; the loss of that competition makes
							existing pre-split records and new submissions feel less valuable
							because they're on separate leaderboards and cannot be compared
							against each other (vs. no split, where you have the ability to
							view only runs on a specific version range using SRC filter
							controls)
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270908721232478232"
							)}
						</td>
					</tr>
					{/* <tr>
						<th>
							What makes a record/placement valuable? (How would a board split
							influence future submitted runs?)
						</th>
						<td>
							Placement: Empty board = high default placements = high incentive
							to submit new runs (some might feel bad because forced)
						</td>
						<td>
							Visibility: Default board is empty = high incentive to submit new
							runs to claim a spot on the visible leaderboards (similarly, some
							might feel bad because forced)
						</td>
						<td>
							Competition: Default board is empty, no existing times to aim for
							or compete against, lower incentive to submit new runs(?){" "}
						</td>
					</tr> */}
					<tr>
						<th>Split depending on how different the game is:</th>
						<td>
							So many changes that it's effectively a different game: (Lean
							split) Claw, portioning, etc. change the way the game is played in
							such a significant way that 1.2.0 runs are incomparable to 1.1.9
							and lower runs. Not splitting could confuse people who are looking
							at the leaderboards if they're unfamiliar with the game and its
							version history.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271176627954520074",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271198352788422757",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271198027389997087"
							)}
						</td>
						<td>
							Not so much that it's a different game: (Lean no split) Claw,
							portioning, etc. change some strats used, but the core game
							mechanics are largely unchanged, so board should not be split on
							only gameplay differences.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271170972375842848",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271275756395433994"
							)}
						</td>
						<td rowSpan={2}>
							It's not about the magnitude of changes: (Lean?) It's okay to have
							runs beat by the new version; the new version is available for
							everyone to play, so if my run on 1.1.9 is beat by someone on
							1.2.0, I have equal access and ability to retake my placement.
							(Similar to new strategies being developed over time?)
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270934223334801449",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271320478337863821"
							)}
						</td>
					</tr>
					<tr>
						<th>
							Split depending on whether and how much the game changes affect
							speedrun times
						</th>
						<td>
							Should split if run times faster: (Lean split) It's unfair that
							runs on the old version could be beaten mostly by virtue of game
							changes rather than runner skill/strat improvements. 1.2.0 changes
							expected to make all runs faster, so should split.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270931483615559711",
								"https://discord.com/channels/839124832171851786/981256908801454152/1270981152529715274"
							)}
						</td>
						<td>
							Board should only be split when game changes make runs slower, and
							therefore discouragingly difficult to beat times on versions which
							are no longer playable. Claw, portioning, etc. changes all make
							runs faster, so lean no split.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270908721232478232",
								"https://discord.com/channels/839124832171851786/981256908801454152/1270953726210740274",
								"https://discord.com/channels/839124832171851786/981256908801454152/1270972841621196861",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271170972375842848"
							)}
						</td>
						{/* <td></td> */}
						<td>
							I think the 1.1.6b and 1.1.7 board splits fit into the latter
							category as they both made the "meta" strategies for random seed
							runs more difficult to achieve (Pre-1.1.6b meta involved
							restarting entire runs looking for metal table upgrades and hoping
							to get sides, then 1.1.6b cut the probability of getting a side
							card in half. 1.1.7 similarly hit the ice cream/coffee dessert
							strat that took over after that board split.)
						</td>
					</tr>
					<tr>
						<th>
							Effects on newer runners (Related to motivation/reward of
							placements?)
						</th>
						<td>
							A fresh leaderboard encourages new runners to submit runs because
							there will be many leaderboards with no or few submitted runs;
							strong incentive because there's a high/guaranteed chance of
							getting a high placement.
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1271305624222830623",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271363756273832089"
							)}
						</td>
						<td>
							A leaderboard with many runs encourages new runners to submit runs
							because there's less pressure to place/submit runs if you are
							middle of the pack among a large pack
							{Cite(
								"https://discord.com/channels/839124832171851786/981256908801454152/1270934603305058411",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271170977740619807",
								"https://discord.com/channels/839124832171851786/981256908801454152/1271320478337863821"
							)}
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

// random run time wasted? https://discord.com/channels/839124832171851786/981256908801454152/1270906564261183509
// time wasted-- want competition https://discord.com/channels/839124832171851786/981256908801454152/1270981203582779442
// I don't get what he's saying https://discord.com/channels/839124832171851786/981256908801454152/1271104364534300736
// having a target to run against is fun https://discord.com/channels/839124832171851786/981256908801454152/1271105924622192764
// if it's easy to click to view old board splits; it's easy to filter merged board for specific board splits https://discord.com/channels/839124832171851786/981256908801454152/1271120490987126856
// https://discord.com/channels/839124832171851786/981256908801454152/1271129393452027966
// https://discord.com/channels/839124832171851786/981256908801454152/1271130856823590963
// https://discord.com/channels/839124832171851786/981256908801454152/1271203107208171520
// feels like effort put into old runs is disrespected? https://discord.com/channels/839124832171851786/981256908801454152/1271275756395433994

// High level differences:
// Purpose of leaderboards: Honor achievements vs encourage competition
// Honor achievements -> importance of recognize runners' hard work by preserving their WRs outweighs cost of board split
// Encourage competition -> costs of board split + importance of the full historical context giving speedrun targets outweighs chance of leaderboard stagnation due to slower times (close to 0% for 1.2.0)
export default BoardSplit;
