import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "./workers/db/unlocks";
import { useState, useMemo } from "preact/hooks";
import { Unlock } from "./kitchenTypes";
import { useMultipleSelection, useCombobox } from "downshift/preact"; // if this is giving typescript errors, copy the type file from `node_modules\downshift\typings\index.d.ts` to `node_modules\downshift\preact\index.d.ts`
import { GoalCardConfig } from "./workers/seedSearchWorker";
import { UnlockGroup } from "./kitchenEnums";
const dishes = Unlocks.filter((a) => a.UnlockGroup === UnlockGroup.Dish).sort(
	(a, b) => (a.Name < b.Name ? -1 : 1)
);
const regularUnlocks = dishes.concat(
	Unlocks.filter((a) => a.UnlockGroup === UnlockGroup.Generic).sort((a, b) =>
		a.Name < b.Name ? -1 : 1
	)
);
const allDishes: Unlock[] = [];
{
	const ids: { [t: string]: boolean } = {};
	for (const dish of dishes) {
		if (!ids[dish.ID]) {
			ids[dish.ID] = true;
			allDishes.push(dish);
		}
	}
	for (const dish of StartingDishes) {
		if (!ids[dish.ID]) {
			ids[dish.ID] = true;
			allDishes.push(dish);
		}
	}
	allDishes.sort((a, b) => (a.Name < b.Name ? -1 : 1));
}

const themeUnlocks = Unlocks.filter(
	(a) => a.UnlockGroup === UnlockGroup.PrimaryTheme
).sort((a, b) => (a.Name < b.Name ? -1 : 1));

const franchiseCards = Unlocks.filter(
	(a) => a.UnlockGroup === UnlockGroup.Franchise
).sort((a, b) => (a.Name < b.Name ? -1 : 1));
function getFilteredCards(
	selectedItems: Unlock[],
	inputValue: string,
	modes: UnlocksComboBoxMode[]
) {
	const lowerCasedInputValue = inputValue.toLowerCase();
	let options: Unlock[] = [];
	for (const mode of modes) {
		switch (mode) {
			case "unlocks":
				options = [...options, ...regularUnlocks];
				break;
			case "settings":
				options = [...options, ...RestaurantSettings];
				break;
			case "startingDishes":
				options = [...options, ...StartingDishes];
				break;
			case "themes":
				options = [...options, ...themeUnlocks];
				break;
			case "dishes":
				options = [...options, ...allDishes];
				break;
			case "franchise":
				options = [...options, ...franchiseCards];
				break;
		}
	}
	return options.filter(function filterCard(unlock) {
		return (
			!selectedItems.some((s) => s.ID === unlock.ID) &&
			unlock.Name.toLowerCase().includes(lowerCasedInputValue)
		);
	});
}
interface NoCopyPaste {
	showCopyPaste?: false;
	handleCopy?: (settings: GoalCardConfig) => void;
	handlePaste?: () => void;
}
interface YesCopyPaste {
	showCopyPaste: true;
	handleCopy: (settings: GoalCardConfig) => void;
	handlePaste: () => void;
}
type CopyPaste = NoCopyPaste | YesCopyPaste;
interface BaseProps {
	onSelectionChange: (newSelection: GoalCardConfig) => void;
	label?: string;
	placeholder?: string;
	include?: boolean;
	cards: Unlock[];
	showSelectionMode?: boolean;
	modes?: UnlocksComboBoxMode[];
}
type UnlocksComboBoxProps = BaseProps & CopyPaste;

type UnlocksComboBoxMode =
	| "unlocks"
	| "settings"
	| "startingDishes"
	| "themes"
	| "dishes"
	| "franchise";
const defaultModes: UnlocksComboBoxMode[] = ["unlocks"];
const noop = () => {};
export function UnlocksComboBox({
	onSelectionChange,
	showSelectionMode = true,
	label,
	placeholder,
	include = true,
	cards,
	modes = defaultModes,
	showCopyPaste = false,
	handleCopy = noop,
	handlePaste = noop,
}: UnlocksComboBoxProps) {
	const [inputValue, setInputValue] = useState("");
	const items = useMemo(
		() => getFilteredCards(cards, inputValue, modes),
		[cards, inputValue]
	);
	const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
		useMultipleSelection({
			selectedItems: cards,
			onStateChange({ selectedItems: newSelectedItems, type }) {
				switch (type) {
					case useMultipleSelection.stateChangeTypes
						.SelectedItemKeyDownBackspace:
					case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
					case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
					case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
						onSelectionChange({ include, cards: newSelectedItems ?? [] });
						break;
					default:
						break;
				}
			},
		});
	const {
		isOpen,
		getToggleButtonProps: _,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
	} = useCombobox({
		items,
		itemToString(item: Unlock | null) {
			return item ? item.Name : "";
		},
		defaultHighlightedIndex: 0, // after selection, highlight the first item.
		selectedItem: null,
		inputValue,
		stateReducer(_state, actionAndChanges) {
			const { changes, type } = actionAndChanges;

			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						isOpen: true, // keep the menu open after selection.
						highlightedIndex: 0, // with the first option highlighted.
					};
				default:
					return changes;
			}
		},
		onStateChange({
			inputValue: newInputValue,
			type,
			selectedItem: newSelectedItem,
		}) {
			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (newSelectedItem) {
						onSelectionChange({ include, cards: [...cards, newSelectedItem] });
						setInputValue("");
					}
					break;

				case useCombobox.stateChangeTypes.InputChange:
					setInputValue(newInputValue ?? "");

					break;
				default:
					break;
			}
		},
	});
	const toggleSelectionMode = () => {
		onSelectionChange({ include: !include, cards });
	};

	const handleClear = () => {
		onSelectionChange({ include, cards: [] });
	};

	return (
		<div className="combo-container">
			<div className="">
				<label className="" {...getLabelProps()}>
					{label ?? "Select desired cards"}
				</label>
				<div>
					<button onClick={handleClear}>Clear Cards</button>
					{showCopyPaste && (
						<>
							<button
								onClick={() => {
									handleCopy({ include, cards });
								}}
							>
								Copy Settings
							</button>
							<button onClick={handlePaste}>Paste Settings</button>
						</>
					)}
				</div>
				<div className="">
					{cards.map(function renderSelectedItem(selectedItemForRender, index) {
						return (
							<span
								className={
									"selected-items" + (include ? " include" : " exclude")
								}
								key={`selected-item-${index}`}
								{...getSelectedItemProps({
									selectedItem: selectedItemForRender,
									index,
								})}
							>
								{selectedItemForRender.Name}
								<span
									class="x"
									onClick={(e) => {
										e.stopPropagation();
										removeSelectedItem(selectedItemForRender);
									}}
								>
									&#10005;
								</span>
							</span>
						);
					})}
					<div className="">
						<input
							placeholder={placeholder ?? "Card Selection(s)"}
							className=""
							{...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
						/>
					</div>
					{showSelectionMode && (
						<>
							<label for="selectionMode">Include/Exclude Selected Cards</label>
							<input
								id="selectionMode"
								type="checkbox"
								checked={include}
								onChange={toggleSelectionMode}
							/>
						</>
					)}
				</div>
			</div>
			<ul
				className={`dropdown ${!(isOpen && items.length) ? "hidden" : ""}`}
				{...getMenuProps()}
			>
				{false && isOpen && (
					<>
						<li>Select All</li>
						<li>Deselect All</li>
					</>
				)}
				{isOpen &&
					items.map((item, index) => (
						<li
							className={cx(
								highlightedIndex === index && "bg-blue-300",
								selectedItem === item && "font-bold",
								"py-2 px-3 shadow-sm flex flex-col"
							)}
							key={`${item.ID}${index}`}
							{...getItemProps({ item, index })}
						>
							<span>{item.Name}</span>
							{/* <span className="text-sm text-gray-700">
									{DishType[item.DishType]}
								</span> */}
						</li>
					))}
			</ul>
		</div>
	);
}

export const cx = (...args: (string | boolean)[]) =>
	args.filter((a) => a).join(" ");
