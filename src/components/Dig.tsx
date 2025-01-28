import { useComputed, useSignal } from "@preact/signals";
import { AppliancesComboBox } from "../ApplianceSelect";
import { Appliance } from "../workers/db/appliances";
import {
	usePersistentSignal,
	usePersistentState,
} from "../hooks/usePersistentState";
import { defaultBranchingRerollConfig } from "../branchingRerolls";
import { SeedConfig, SeedConfigForm } from "../SeedConfigForm";
import { choose } from "../utils/utils";
import { Unlock } from "../kitchenTypes";
import { useEffect, useRef } from "preact/hooks";
import { RestaurantSettings } from "../workers/db/unlocks";
import { turboDays } from "../utils/getCardPaths";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
type Hit = [[number, number, number], number, string[]];
const emptyInside: RerollConfig = {
	spawnInside: true,
	blueprintCount: 0,
};
const emptyOutsideInside: RerollConfig = {
	spawnInside: false,
	playerInside: true,
	blueprintCount: 0,
};
const emptyOutsideOutside: RerollConfig = {
	spawnInside: false,
	playerInside: false,
	blueprintCount: 0,
};
// I'm looking for exactly one kind of blueprint and I to pinpoint all the specific rerolls I need to get there (not paths)
const Dig = () => {
	const appliances = usePersistentSignal<Appliance[]>(
		[],
		"DIG_TARGET_APPLIANCES"
	);
	const numberOfTargetAppliances = useSignal<number>(1);
	const blueprintCabs = usePersistentSignal<number>(1, "DIG_BLUEPRINT_CABS");
	const availableFodder = usePersistentSignal<number>(
		0,
		"DIG_AVAILABLE_FODDER"
	);

	// settings bounds
	const minInside = useSignal<number>(0);
	const minOutsideInside = useSignal<number>(0);
	const minOutsideOutside = useSignal<number>(0);

	// total blueprint bounds
	const minBlueprints = useSignal<number>(0);
	const maxBlueprints = useSignal<number>(0);

	const [config, setConfig] = usePersistentState<SeedConfig>(
		defaultBranchingRerollConfig,
		"BRANCH_CONFIG",
		(config: SeedConfig) => {
			let newConfig = { ...config };
			if (typeof newConfig.simpleBPSettings === "boolean") {
				// debugger;
				newConfig = {
					...newConfig,
					simpleBPSettings: config.simpleBPSettings ? "insideOnly" : "full",
				};
			}
			newConfig = { ...newConfig, searchDepth: 2 };
			return newConfig;
		}
	);
	const shop = useSignal<Shop>();
	const day = useRef<number>(config.day);
	const rerollDepth = useSignal<number>(config.searchDepth);
	useEffect(() => {
		rerollDepth.value = config.searchDepth;
	}, [config]);
	const cardIDs = useRef<number[]>([]);
	useEffect(() => {
		// if (config.day===day.current)
		// const newShop = new Shop(config.seed, 0.25);
		const newCards: Unlock[] = [];
		let i = config.cards.filter((a) =>
			RestaurantSettings.some((b) => b.ID === a.ID)
		).length;
		for (let j = 0; j < i; j++) {
			newCards.push(config.cards[j]);
		}
		for (const d of turboDays) {
			if (d > config.day) {
				break;
			}
			const addCard = config.cards[i];
			addCard && newCards.push(addCard);
			i++;
		}
		if (cardIDs.current.length === newCards.length) {
			let same = true;
			for (let i = 0; i < newCards.length; i++) {
				if (cardIDs.current[i] !== newCards[i].ID) {
					same = false;
					break;
				}
			}
			if (same) {
				// cards are the same, if the day is the same too, don't update the shop
				if (day.current === config.day) return;
			}
		}
		const turbo = newCards.some((a) => a.Name === "Turbo");
		const newShop = new Shop(config.seed, turbo ? 0.25 : 0);
		newShop.OwnedAppliances = [...config.appliances];
		for (let i = 0; i < newCards.length; i++) {
			if (i === newCards.length - 1) {
				// TODO
				// most recent card, special handling for rerolls
			}
			newShop.addCard(newCards[i]);
		}
		day.current = config.day;
		cardIDs.current = newCards.map((a) => a.ID);
		shop.value = newShop;
	}, [config]);

	const hits = useComputed(() => {
		if (!shop.value) return [];
		// output:
		// if contains the target appliance,
		// how many of which reroll setting, and how many blueprints needed to be rolled
		// the maximal blueprints seen on the final roll

		// how many rerolls I can *choose* the settings on (not locked in by restrictions)
		const choiceSettings =
			rerollDepth.value -
			minInside.value -
			minOutsideInside.value -
			minOutsideOutside.value +
			-1;
		let currentSettings = [0, 0];
		const baseSettings: RerollConfig[] = [];
		for (let i = 0; i < minInside.value; i++) baseSettings.push(emptyInside);
		for (let i = 0; i < minOutsideInside.value; i++)
			baseSettings.push(emptyOutsideInside);
		for (let i = 0; i < minOutsideOutside.value; i++)
			baseSettings.push(emptyOutsideOutside);
		let res: Hit[] = [];
		if (rerollDepth.value === 1) {
			// just show spawns
			res.push([
				[0, 0, 0],
				0,
				shop.value
					.getAppliances(
						[{ spawnInside: true, blueprintCount: 7 }],
						day.current
					)
					.map((a) => a.Name),
			]);
			return res;
		}
		while (true) {
			// construct settings
			const currentConfigs = [...baseSettings];
			for (let i = 0; i < currentSettings[0]; i++)
				currentConfigs.push(emptyInside);
			for (let i = 0; i < currentSettings[1]; i++)
				currentConfigs.push(emptyOutsideInside);
			for (
				let i = currentSettings[0] + currentSettings[1];
				i < choiceSettings;
				i++
			)
				currentConfigs.push(emptyOutsideOutside);

			// clone the base so I can twiddle the blueprint count without mutating objects
			currentConfigs.splice(0, 1, { ...currentConfigs[0] });
			// dummy config to see the max blueprints
			currentConfigs.push({
				spawnInside: true,
				blueprintCount:
					7 +
					(day.current > 1 ? availableFodder.value : 0) -
					(rerollDepth.value - 2) * numberOfTargetAppliances.value * 0, // assume you get one useful blueprint per reroll
			});

			const minRerolled = Math.max(rerollDepth.value - 2, minBlueprints.value);
			const maxRerolled = Math.min(
				maxBlueprints.value || Infinity,
				linearSum(
					7 + availableFodder.value,
					rerollDepth.value - 2,
					-numberOfTargetAppliances.value * 0
				) // assume you get one useful blueprint per reroll
				// (rerollDepth.value - 2) * (7 + blueprintCabs.value * 2)
			);

			// iterate through blueprint counts
			for (
				let rerolledBlueprints = maxRerolled;
				rerolledBlueprints >= minRerolled;
				rerolledBlueprints--
			) {
				currentConfigs[0].blueprintCount = rerolledBlueprints + 7;
				// test target presence
				const shopBlueprints = shop.value?.getAppliances(
					currentConfigs,
					day.current
				);
				if (shopBlueprints === undefined) {
					debugger;
				}
				// Is this actually reachable?
				// previous reroll must have been at least index of first target - number of fodder I can keep in the cabinets
				let targetIndex = -1;
				let goalTargetNum = Math.min(
					appliances.value.length,
					numberOfTargetAppliances.value
				);
				if (goalTargetNum) {
					for (let i = 0; i < shopBlueprints.length; i++) {
						if (
							appliances.value.some((a) => a.Name === shopBlueprints[i].Name)
						) {
							goalTargetNum--;
							if (!goalTargetNum) {
								targetIndex = i;
								break;
							}
						}
					}
					if (targetIndex === -1) continue; // doesn't have anything I'm looking for, try another config
					const boundPreviousReroll = Math.max(
						1,
						targetIndex +
							1 -
							Math.max(blueprintCabs.value, availableFodder.value) // NOTE: not quite accurate as it's possible to buy additional cabs during the reroll process and save fodder in the middle while also saving the previous day's fodder only for the very last reroll.... but it's good enough
					);
					const boundTotalBPs = linearSum(
						boundPreviousReroll,
						rerollDepth.value - 2,
						numberOfTargetAppliances.value * 0 // assume you get your target number of appliances on every reroll
					);
					if (rerolledBlueprints < boundTotalBPs) {
						console.log("not reachable with this blueprint cabinet setup");
						continue;
					}
				}
				const temp: Hit = [
					[
						currentSettings[0] + minInside.value,
						currentSettings[1] + minOutsideInside.value,
						choiceSettings -
							currentSettings[0] -
							currentSettings[1] +
							minOutsideOutside.value,
					],
					rerolledBlueprints,
					shopBlueprints.map((a) => a.Name),
				];
				// console.log(JSON.stringify(temp));
				// it's a hit!
				res.push(temp);
			}
			// increment settings
			currentSettings[1]++;
			if (currentSettings[0] + currentSettings[1] > choiceSettings) {
				currentSettings[0]++;
				currentSettings[1] = 0;
			}
			if (currentSettings[0] + currentSettings[1] > choiceSettings) {
				// ok, I've tested everything.
				break;
			}
		}
		return res;
	});

	return (
		<div class="search-container">
			<div class="search-config">
				<label>Blueprint Cabs:</label>
				<input
					value={blueprintCabs}
					type="number"
					// @ts-ignore
					onChange={(e) => (blueprintCabs.value = e.target?.valueAsNumber || 0)}
				/>
				<input
					value={availableFodder}
					type="number"
					onChange={(e) =>
						// @ts-ignore
						(availableFodder.value = e.target?.valueAsNumber || 0)
					}
				/>
				<div>
					<label>Min Inside/OI/OO</label>
					<input
						style={{ width: 40 }}
						value={minInside}
						onChange={(e) => {
							// @ts-ignore
							minInside.value = e.target.valueAsNumber || 0;
						}}
						type="number"
					/>
					<input
						style={{ width: 40 }}
						value={minOutsideInside}
						onChange={(e) => {
							// @ts-ignore
							minOutsideInside.value = e.target.valueAsNumber || 0;
						}}
						type="number"
					/>
					<input
						style={{ width: 40 }}
						value={minOutsideOutside}
						onChange={(e) => {
							// @ts-ignore
							minOutsideOutside.value = e.target.valueAsNumber || 0;
						}}
						type="number"
					/>
				</div>
				<div>
					<label>Blueprint bounds</label>
					<input
						style={{ width: 40 }}
						value={minBlueprints}
						onChange={(e) => {
							// @ts-ignore
							const valueAsNumber = e.target.valueAsNumber || 0;
							minBlueprints.value = valueAsNumber;
						}}
						type="number"
					/>
					<input
						style={{ width: 40 }}
						value={maxBlueprints}
						onChange={(e) => {
							// @ts-ignore
							const valueAsNumber = e.target.valueAsNumber;
							maxBlueprints.value = valueAsNumber || 0;
						}}
						type="number"
					/>
				</div>

				<SeedConfigForm
					onConfigChange={setConfig}
					config={config}
					mode="rerolls"
				/>
			</div>
			<div class="search-results">
				<AppliancesComboBox
					label={"Target Appliances"}
					onSelectionChange={(s) => (appliances.value = s)}
					appliances={appliances.value}
					shopModifiersOnly={false}
				/>
				<div>
					<label>Minimum number of target appliances</label>
					<input
						style={{ width: 40 }}
						type="number"
						value={numberOfTargetAppliances}
						onChange={(e) =>
							// @ts-ignore
							(numberOfTargetAppliances.value = e.target.valueAsNumber || 0)
						}
					/>
				</div>

				{hits.value.length
					? hits.value.map((h) => <HitInfo hit={h} />)
					: "No hits"}
				{false && (
					<div>
						1. For any valid combination of states from previous rerolls,
						determine the number of blueprints you'd need to roll in order to
						see the desired blueprint
						<br />
						On the {config.searchDepth}th reroll, how many blueprints could have
						been previously rerolled? At most, take 2x fodder out of each
						cabinet and roll without buying anything until now. At minimum,
						buy/store blueprints until there's only one on the ground. So
						minimum {config.searchDepth} and maximum{" "}
						{config.searchDepth * (7 + blueprintCabs.value * 2)}.... except the
						first "roll" is the spawn and that's guaranteed 7, and the last
						reroll doesn't influence the group of spawns you get. so actually{" "}
						{config.searchDepth - 2} minimum and{" "}
						{(config.searchDepth - 2) * (7 + blueprintCabs.value * 2)}
						<br />
						Then on the final roll you can see at most {7 +
							blueprintCabs.value}{" "}
						blueprints.
						<br />
						Also, need to divide the {config.searchDepth - 1} spawn and rerolls
						by which setting they are on... that's{" "}
						{choose(config.searchDepth - 1 + 2, 2)}
					</div>
				)}
			</div>
		</div>
	);
};

const HitInfo = ({ hit }: { hit: Hit }) => {
	const [[i, oi, oo], count, bps] = hit;
	return (
		<div>
			I: {i}, OI: {oi}, OO: {oo}, total blueprints rerolled: {count}
			<br />
			{bps.map((bp, i) => (
				<>
					<span style={{ display: "inline-block" }}>
						{bp}
						{i === bps.length - 1 ? "" : ","}
					</span>{" "}
				</>
			))}
		</div>
	);
};

function linearSum(start: number, count: number, delta: number = -1) {
	if (count < 0) return 0;
	return ((start + start + delta * (count - 1)) * count) / 2;
}
export default Dig;
