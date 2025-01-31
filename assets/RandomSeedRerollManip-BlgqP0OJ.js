import{u as e}from"./main-DuVFAb8A.js";const o=()=>e("div",{children:e("div",{children:["Q: Can we manipulate rerolls in a random seed run?",e("p",{children:"Because shop rerolls reuse the same PRNG instance for all rerolls in a single day, even on random seed, if we knew the PRNG state we could theoretically predict rerolls for that particular day the same way you'd do in a set seed run."}),e("p",{children:`So is it possible to identify the PRNG state in an unseeded run? We can't reasonably predict the state the game will assign to rerolls at the beginning of the day. But we can narrow down the universe of possible PRNG states ("only" 2^128) based on the blueprint spawns and rerolls that we see. If we reroll enough times/blueprints, we could see enough blueprints s.t. there's at most a 1/2^128 chance of it occuring purely randomly. Theoretically after that point there'd be only one compatible PRNG state.`}),e("p",{children:["Okay, so it's theoretically possible. But even if we know the information we saw is enough to match a single PRNG state, figuring out which one of the 2^128 states that is would involve running that entire reroll process up to 2^128 times. So open questions now:",e("ul",{children:[e("li",{children:["Costs",e("ul",{children:[e("li",{children:"In-Game Time Costs: how many extra blueprints and rerolls would we need to do to identify the state? Probably doesn't make sense if you need to spend 20 seconds just rerolling first"}),e("li",{children:"In-Game Money Costs: again, how many rerolls will we need to do?"}),e("li",{children:"State Matching Search Time: how long would searching through 2^128 states take? Is it feasible to cache reroll results?"})]})]}),e("li",{children:"Benefits? Depending on the number of rerolls you need to do to identify the state, you can probably only afford to do this once, maybe twice in a run. What highly important appliance could you possibly be looking for that you wouldn't have seen in the however many rerolls you'd done just to pin down the PRNG state? Also if you weren't saving up to do all these rerolls on one day you may have rerolled on a earlier day and found that appliance already..."})]})]}),e("p",{children:"IF the state-matching time works out, I can only imagine this being done at the tail end of a Turbo run. Maybe you had a really good run, got hit with a surprise terrible card that could be mitigated with some appliance, and don't want to abandon the run because the earlier days were really good. You have a lot of money and blueprint fodder and just need one thing to help you get through the last day or two. Reroll a bunch to look for that appliance, and matching the PRNG state and the subsequent reroll manipulation is just a fallback if you don't see what you need."})]})});export{o as default};
