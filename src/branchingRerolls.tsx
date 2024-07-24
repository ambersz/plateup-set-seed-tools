import { FunctionComponent, VNode } from "preact";
import { RerollConfig, Shop } from "./workers/reverse-engineered/shop";
import { Appliance } from "./workers/db/appliances";
import { GhostBlueprints } from "./components/GhostBlueprints";
import { Unlock } from "./kitchenTypes";
import { usePersistentState } from "./hooks/usePersistentState";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "preact/hooks";
import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "./workers/db/unlocks";
import { SeedConfigForm } from "./SeedConfigForm";
import { defaultAppliances } from "./SeedConfigForm";
import { SeedConfig } from "./SeedConfigForm";

function explainRerollConfig(c: RerollConfig[]) {
	let res = "";
	if (!c.length) {
		res = "Spawn: any settings";
	} else {
		for (let i = 0; i < c.length; i++) {
			const config = c[i];
			let roll = i ? `Reroll ${i}` : "Spawn";
			roll += ": ";
			roll +=
				"Blueprints " +
				(config.spawnInside
					? "Spawn Inside"
					: "Spawn Outside, " +
					  (config.playerInside
							? "Someone Inside"
							: "All Players Stand Outside"));
			if (i) {
				roll += `, reroll ${c[i].blueprintCount} blueprints`;
			}
			res += roll + "\n";
		}
		res += `Reroll ${c.length}: any settings`;
	}
	const lines = res.split("\n");
	return (
		<div
			class="reroll-instructions"
			onClick={(e) => {
				if (e.detail < 2) {
					return;
				}
				const range = document.createRange();
				range.selectNodeContents(e.currentTarget);
				const sel = document.getSelection();
				sel?.removeAllRanges();
				sel?.addRange(range);
			}}
		>
			{lines.map((a) => (
				<div>{a}</div>
			))}
		</div>
	);
}
interface BaseBranchingRerollProps {
	practiceMode?: boolean;
	seed: string;
	day: number;
	startingConfig?: RerollConfig[];
	searchDepth?: number;
	ghostBlueprints?: number;
	blueprintCabinets: number;
	solo: boolean;
	cards: Unlock[];
	appliances: Appliance[];
}

type BranchingRerollProps = BaseBranchingRerollProps & SeedConfig;
function cellClassFromConfig(
	r: RerollConfig[],
	simpleBPSettings: BranchingRerollProps["simpleBPSettings"],
	solo: boolean
) {
	const f = r.at(-1);
	switch (simpleBPSettings) {
		case "full":
		case false:
			break;
		case "insideOnly":
		case true:
			break;
		case "noSwitching":
			break;

		default:
			break;
	}
	if (
		simpleBPSettings === "insideOnly" ||
		(solo && simpleBPSettings === "noSwitching") ||
		(simpleBPSettings === "noSwitching" && f?.spawnInside)
	) {
		switch ((f?.blueprintCount ?? 0) % 3) {
			case 0:
				return "I";
			case 1:
				return "OI";
			default:
				return "OO";
				break;
		}
	}
	if (f?.spawnInside) return "I";
	if (f?.playerInside) return "OI";
	return "OO";
}
const NormalCardDays = [0, 3, 5, 6, 9, 12];
const TurboCardDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const BranchingRerolls: FunctionComponent<BranchingRerollProps> = ({
	seed,
	day,
	startingConfig = [],
	searchDepth = 2,
	ghostBlueprints = 2,
	blueprintCabinets = 1,
	solo,
	cards = [],
	appliances = [],
	simpleBPSettings = false,
}: BranchingRerollProps) => {
	const turbo = cards.some((a) => a.Name === "Turbo");
	const blueprintCount = turbo ? 7 : 5;
	seed = seed.toLocaleLowerCase().trim();
	const finalRollConfig: RerollConfig = {
		blueprintCount: blueprintCount + ghostBlueprints,
		spawnInside: true,
	};
	const shop = new Shop(seed, 0);
	let cardsForRerollsOnly: Unlock[] = [];
	const days = turbo ? TurboCardDays : NormalCardDays;
	{
		let i = cards.filter((a) =>
			RestaurantSettings.some((b) => b.ID === a.ID)
		).length;
		for (let j = 0; j < i; j++) {
			shop.addCard(cards[j]);
		}
		for (const d of days) {
			if (d > day) {
				break;
			}
			if (d === day) {
				// ingredients don't apply until people open boxes, and processes don't get updated until practice mode or next day (not sure about courses, but they don't appear to apply at spawn, and you wouldn't be able to get plates in rerolls anyway so... we just pretend it's the same as the processes?)
				cardsForRerollsOnly.push(cards[i]);
				shop.handleNewCardSpawnEffects(cards[i]);
			} else {
				shop.addCard(cards[i]);
			}
			i++;
		}
	}
	shop.OwnedAppliances = [...shop.OwnedAppliances, ...appliances];
	const configOptions: RerollConfig[] = [];
	const spawnConfigs: RerollConfig[] = [];
	for (let i = -blueprintCabinets - 1; i <= blueprintCabinets; i++) {
		const config = {
			spawnInside: true,
			blueprintCount: blueprintCount + i,
		};
		if (i === 0) spawnConfigs.push(config as RerollConfig);
		configOptions.push(config as RerollConfig);
		if (simpleBPSettings === "insideOnly") continue;
		if (i === 0) {
			spawnConfigs.push({
				spawnInside: false,
				playerInside: true,
				blueprintCount: blueprintCount + i,
			});
			spawnConfigs.push({
				spawnInside: false,
				playerInside: false,
				blueprintCount: blueprintCount + i,
			});
		}
		if (!solo)
			configOptions.push({
				spawnInside: false,
				playerInside: true,
				blueprintCount: blueprintCount + i,
			});
		configOptions.push({
			spawnInside: false,
			playerInside: false,
			blueprintCount: blueprintCount + i,
		});
	}
	let renders: VNode[] = [];
	let cumulativeConfigs: RerollConfig[][] = [startingConfig];
	for (let depth = 0; depth <= searchDepth; depth++) {
		if (depth) {
			for (const c of cardsForRerollsOnly) {
				shop.handleNewCardRerollEffects(c);
			}
		}
		let newConfigs: RerollConfig[][] = [];
		let row: VNode[] = [];
		for (let i = 0; i < cumulativeConfigs.length; i++) {
			const final = { ...finalRollConfig };
			final.blueprintCount = cumulativeConfigs[i].length
				? (cumulativeConfigs[i].at(-1)?.blueprintCount ?? blueprintCount) +
				  ghostBlueprints
				: blueprintCount;
			const roll = shop
				.getAppliances([...cumulativeConfigs[i], final], day)
				.map((a) => a.Name);
			const expansionFactor =
				simpleBPSettings === "noSwitching"
					? solo || cumulativeConfigs[i]?.[0]?.spawnInside
						? configOptions.length / (solo ? 2 : 3)
						: (configOptions.length * 2) / 3
					: configOptions.length;
			row.push(
				<td
					class={
						"reroll-cell " +
						cellClassFromConfig(cumulativeConfigs[i], simpleBPSettings, solo)
					}
					colspan={expansionFactor ** (searchDepth - depth)}
				>
					<GhostBlueprints
						bps={roll}
						// normalCount={blueprintCount}
						ghostCount={depth === 0 ? 0 : ghostBlueprints}
					/>
					{explainRerollConfig(cumulativeConfigs[i])}
				</td>
			);
			const options: RerollConfig[] =
				startingConfig.length + depth === 0 ? spawnConfigs : configOptions;
			for (const branchConfig of options) {
				const newConfig = [...cumulativeConfigs[i]];
				if (
					simpleBPSettings === "noSwitching" &&
					newConfig.length &&
					newConfig[0].spawnInside !== branchConfig.spawnInside
				) {
					continue;
				}
				newConfig.push(branchConfig);
				newConfigs.push(newConfig as RerollConfig[]);
			}
		}
		renders.push(
			<tr>
				<td>{depth ? `Reroll ${depth}` : `Spawns`}</td>
				{row}
			</tr>
		);
		cumulativeConfigs = newConfigs;
	}
	return <table> {renders} </table>;
};
export const defaultBranchingRerollConfig: SeedConfig = {
	seed: "az",
	day: 1,
	cards: [],
	initialRerollConfig: [],
	solo: false,
	appliances: defaultAppliances,
	searchDepth: 2,
	simpleBPSettings: false,
};
const BranchingRerollPage = () => {
	const [config, setConfig] = usePersistentState<SeedConfig>(
		defaultBranchingRerollConfig,
		"BRANCH_CONFIG",
		(config: SeedConfig) => {
			let newConfig = { ...config };
			if (typeof newConfig.simpleBPSettings === "boolean") {
				debugger;
				newConfig = {
					...newConfig,
					simpleBPSettings: config.simpleBPSettings ? "insideOnly" : "full",
				};
			}
			newConfig = { ...newConfig, searchDepth: 2 };
			return newConfig;
		}
	);

	const [params, setParams] = useSearchParams();

	useEffect(() => {
		if (params.has("cards")) {
			const cards = params
				.get("cards")!
				.split(",")
				.map((i) => {
					const res =
						Unlocks.filter((a) => a.Name === i)[0] ??
						RestaurantSettings.filter((a) => a.Name === i)[0] ??
						StartingDishes.filter((a) => a.Name === i)[0];
					if (import.meta.env.DEV && !res) {
						debugger;
					}
					return res;
				});
			setConfig((config) => ({
				...config,
				seed: params.get("seed") ?? config.seed,
				cards,
				solo: !!Number(params.get("solo")),
			}));
			setParams(new URLSearchParams(), { replace: true });
		}
	}, [params]);
	return (
		<>
			<div>
				Hover over a cell for instructions on how to get those blueprints.
				Getting the blueprints in grey requires taking extra blueprints out of
				cabinets.{" "}
				<span style="font-size:small">
					(Rerolls are inaccurate if you bought a blueprint desk)
				</span>
			</div>
			<SeedConfigForm
				onConfigChange={setConfig}
				config={config}
				mode="rerolls"
			/>
			<BranchingRerolls {...config} blueprintCabinets={1} />
			{false && (
				<div style={{ maxWidth: "50vw" }}>
					<div>How to read each cell:</div>
					The blueprints in normal text are the ones you would see if you
					rerolled all blueprints from the previous step without buying any. The
					greyed out blueprints are those you would see only if you take
					additional blueprints out of cabinets just before the final reroll.
					<div>
						For example, if a cell says
						<table>
							<GhostBlueprints
								ghostCount={2}
								bps={[
									"Clipboard Stand",
									"Display Stand",
									'"Specials" Menu',
									"Kitchen Floor Protector",
									"Coffee Table",
									"Mixer",
									"Carrots",
								]}
							/>
						</table>
						with the tooltip <br />
						<code>Spawn: Blueprints spawn inside Reroll 1: any settings</code>
						If you reroll exactly the 5 spawned blueprints, you would get the
						blueprints in the regular text (
						<code>
							Clipboard Stand, Display Stand, "Specials" Menu, Kitchen Floor
							Protector, Coffee Table
						</code>
						)
					</div>
				</div>
			)}
		</>
	);
};

export default BranchingRerollPage;
