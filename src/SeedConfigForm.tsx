import { UnlocksComboBox } from "./UnlockSelect";
import { AppliancesComboBox } from "./ApplianceSelect";
import { StateUpdater } from "preact/hooks";
import Appliances, { Appliance } from "./workers/db/appliances";
import { Unlock } from "./kitchenTypes";
import { RerollConfig } from "./workers/reverse-engineered/shop";

export const SeedConfigForm = ({
	onConfigChange,
	config,
}: SeedConfigFormProps) => {
	const {
		seed,
		day,
		solo,
		appliances = defaultAppliances,
		cards,
		searchDepth,
		simpleBPSettings = false,
	} = config;

	const setConfig = <T extends keyof SeedConfig>(
		key: T,
		value: SeedConfig[T]
	) => {
		onConfigChange((config: SeedConfig) => {
			let newConf = { ...config };
			newConf[key] = value;
			return newConf;
		});
	};
	return (
		<div>
			<div>
				<div>Run Config:</div>
				<label for="solo">Solo:</label>
				<input
					type="checkbox"
					id="solo"
					checked={solo}
					onChange={() => {
						setConfig("solo", !solo);
					}}
				/>
				<span style="margin:0 20px">
					<label for="simpleRerollSettings">Spawn setting configs: </label>
					<select
						value={
							simpleBPSettings === true
								? "insideOnly"
								: simpleBPSettings === false
								? "full"
								: simpleBPSettings
						}
						onChange={(e) => {
							setConfig(
								"simpleBPSettings",
								// @ts-ignore
								(e.target as HTMLOptionElement)?.value ?? "full"
							);
						}}
					>
						<option value="full">All spawn settings</option>
						<option value="insideOnly">Spawn Inside only</option>
						<option value="noSwitching">
							Don't switch bp settings after spawn
						</option>
					</select>
				</span>
				<div>
					<label for="searchDepth">Number of Rerolls</label>{" "}
					<input
						id="searchDepth"
						type="number"
						value={searchDepth}
						onChange={(e) => {
							setConfig(
								"searchDepth",
								Number((e.target as HTMLInputElement).value)
							);
						}}
					/>
				</div>
				<label for="seed" value={seed}>
					Seed:{" "}
				</label>
				<input
					type="text"
					id="seed"
					value={seed}
					onChange={(e) => {
						setConfig("seed", (e.target as HTMLInputElement).value);
					}}
				/>
				{/* <label for="setting"> Turbo?</label>
				<input
					id="setting"
					type="checkbox"
					checked={blueprintCount === 7}
					onChange={handleSettingChange}
				/> */}
			</div>
			<div>
				{/* Day Config: */}
				<label for="day" value={day}>
					Prep of Day:{" "}
				</label>
				<input
					type="number"
					id="day"
					value={day + 1}
					onChange={(e) => {
						setConfig("day", Number((e.target as HTMLInputElement).value) - 1);
					}}
				/>
				<UnlocksComboBox
					id="cardSchedule"
					label="Enter all cards in order, beginning with your map setting and starting dish:"
					onSelectionChange={(gcc) => {
						setConfig("cards", gcc.cards);
					}}
					showSelectionMode={false}
					cards={cards}
					include={true}
					modes={["themes", "settings", "dishes", "customerCards"]}
				/>
				<AppliancesComboBox
					label="Select owned appliances:"
					placeholder=""
					onSelectionChange={(app) => {
						setConfig("appliances", app);
					}}
					appliances={appliances}
				/>
			</div>
		</div>
	);
};
export interface SeedConfigFormProps {
	onConfigChange: StateUpdater<SeedConfig>;
	config: SeedConfig;
}
export const defaultAppliances = Appliances.filter(
	(a) => a.Name === "Booking Desk" || a.Name === "Blueprint Cabinet"
).sort((a, b) => (a.Name < b.Name ? 1 : -1));
export type SeedConfig = {
	seed: string;
	initialRerollConfig: RerollConfig[];
	day: number;
	solo: boolean;
	appliances: Appliance[];
	cards: Unlock[];
	searchDepth: number;
	simpleBPSettings?: boolean | "insideOnly" | "noSwitching" | "full";
};
