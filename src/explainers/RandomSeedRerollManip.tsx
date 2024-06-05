import Appliances from "../workers/db/appliances";
import { RestaurantSettings, StartingDishes } from "../workers/db/unlocks";
import { Shop } from "../workers/reverse-engineered/shop";

const RandomSeedRerollManip = () => {
	if (false && import.meta.env.DEV) {
		const shop = new Shop("");
		shop.addCard(RestaurantSettings.filter((a) => a.Name === "Turbo")[0]);
		shop.addCard(StartingDishes.filter((a) => a.Name === "Pies")[0]);
		const rerollHasResearchDesk: { [spawnOrder: string]: [number, number] } =
			{};
		shop.OwnedAppliances.push(
			...Appliances.filter(
				(a) => a.Name === "Blueprint Cabinet" || a.Name === "Booking Desk"
			)
		);
		const withoutResearchDesk = [...shop.OwnedAppliances];
		const withResearchDesk = [
			...shop.OwnedAppliances,
			Appliances.filter((a) => a.Name === "Research Desk")[0],
		];
		let unfinishedSpawns = 0;
		let maxTests = 999999;
		// shop.seed = -1;
		shop.seed = (Math.random() * 4294967296) >>> 0;
		do {
			// @ts-ignore
			shop.cacheDay = -1;
			// @ts-ignore
			shop.seed = (Math.random() * 4294967296) >>> 0;
			// shop.seed++;
			shop.OwnedAppliances = withoutResearchDesk;
			const spawns = shop.getAppliances(
				[{ spawnInside: true, blueprintCount: 7 }],
				1
			);
			const key = spawns.at(-1)?.Name!;
			// const key = spawns.map((a) => a.Name).join(",");
			if (!rerollHasResearchDesk[key]) {
				unfinishedSpawns += 2;
				rerollHasResearchDesk[key] = [0, 0];
			}
			shop.OwnedAppliances = withResearchDesk;
			const reroll = shop.getAppliances(
				[
					{ spawnInside: true, blueprintCount: 7 },
					{ spawnInside: true, blueprintCount: 6 },
				],
				1
			);
			const hasResearchDesk = reroll.some((a) => a.Name === "Research Desk");
			const index = hasResearchDesk ? 1 : 0;
			// if (rerollHasResearchDesk[key][index] === 100 - 1) {
			// 	unfinishedSpawns--;
			// 	// unfinishedSpawns = 0;
			// }
			rerollHasResearchDesk[key][index]++;
		} while (unfinishedSpawns && maxTests--);
		console.log({ unfinishedSpawns, maxTests });
	}
	return (
		<div>
			<div>
				Q: Can we manipulate rerolls in a random seed run?
				<p>
					Because shop rerolls reuse the same PRNG instance for all rerolls in a
					single day, even on random seed, if we knew the PRNG state we could
					theoretically predict rerolls for that particular day the same way
					you'd do in a set seed run.
				</p>
				<p>
					So is it possible to identify the PRNG state in an unseeded run? We
					can't reasonably predict the state the game will assign to rerolls at
					the beginning of the day. But we can narrow down the universe of
					possible PRNG states ("only" 2^128) based on the blueprint spawns and
					rerolls that we see. If we reroll enough times/blueprints, we could
					see enough blueprints s.t. there's at most a 1/2^128 chance of it
					occuring purely randomly. Theoretically after that point there'd be
					only one compatible PRNG state.
				</p>
				<p>
					Okay, so it's theoretically possible. But even if we know the
					information we saw is enough to match a single PRNG state, figuring
					out which one of the 2^128 states that is would involve running that
					entire reroll process up to 2^128 times. So open questions now:
					<ul>
						<li>
							Costs
							<ul>
								<li>
									In-Game Time Costs: how many extra blueprints and rerolls
									would we need to do to identify the state? Probably doesn't
									make sense if you need to spend 20 seconds just rerolling
									first
								</li>
								<li>
									In-Game Money Costs: again, how many rerolls will we need to
									do?
								</li>
								<li>
									State Matching Search Time: how long would searching through
									2^128 states take? Is it feasible to cache reroll results?
								</li>
							</ul>
						</li>
						<li>
							Benefits? Depending on the number of rerolls you need to do to
							identify the state, you can probably only afford to do this once,
							maybe twice in a run. What highly important appliance could you
							possibly be looking for that you wouldn't have seen in the however
							many rerolls you'd done just to pin down the PRNG state? Also if
							you weren't saving up to do all these rerolls on one day you may
							have rerolled on a earlier day and found that appliance already...
						</li>
					</ul>
				</p>
				<p>
					IF the state-matching time works out, I can only imagine this being
					done at the tail end of a Turbo run. Maybe you had a really good run,
					got hit with a surprise terrible card that could be mitigated with
					some appliance, and don't want to abandon the run because the earlier
					days were really good. You have a lot of money and blueprint fodder
					and just need one thing to help you get through the last day or two.
					Reroll a bunch to look for that appliance, and matching the PRNG state
					and the subsequent reroll manipulation is just a fallback if you don't
					see what you need.
				</p>
			</div>
		</div>
	);
};

export default RandomSeedRerollManip;
