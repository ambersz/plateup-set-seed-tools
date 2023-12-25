import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
import { useState, useMemo } from "preact/hooks";
import { Unlock } from "./kitchenTypes";
import { useMultipleSelection, useCombobox } from "downshift/preact"; // if this is giving typescript errors, copy the type file from `node_modules\downshift\typings\index.d.ts` to `node_modules\downshift\preact\index.d.ts`
import { DishType, UnlockGroup } from "./kitchenEnums";
import { GoalCardConfig } from "./workers/seedSearchWorker";

const Options = [...Unlocks, ...RestaurantSettings];

function getFilteredCards(
	selectedItems: Unlock[],
	inputValue: string,
	unlockGroupFilter: UnlockGroup[],
	dishTypeFilter: DishType[]
) {
	const lowerCasedInputValue = inputValue.toLowerCase();

	return Options.filter(function filterCard(unlock) {
		if (
			dishTypeFilter.some((dt) => dt === DishType.Base) &&
			unlock.Name === "Cakes"
		)
			return true; // exception because there's some weird shenanigans to get Cakes to not show up in Autumn
		return (
			(!dishTypeFilter.length || dishTypeFilter.includes(unlock.DishType)) &&
			(!unlockGroupFilter.length ||
				unlockGroupFilter.includes(unlock.UnlockGroup)) &&
			!selectedItems.some((s) => s.ID === unlock.ID) &&
			unlock.Name.toLowerCase().includes(lowerCasedInputValue)
		);
	});
}
interface UnlocksComboBoxProps {
	onSelectionChange: (newSelection: GoalCardConfig) => void;
	label?: string;
	placeholder?: string;
	include?: boolean;
	cards?: Unlock[];
	unlockGroupFilter?: UnlockGroup[];
	dishTypeFilter?: DishType[];
	showSelectionMode?: boolean;
}
export function UnlocksComboBox({
	onSelectionChange,
	showSelectionMode = true,
	label,
	placeholder,
	include = true,
	cards = [],
	unlockGroupFilter = [],
	dishTypeFilter = [],
}: UnlocksComboBoxProps) {
	const [inputValue, setInputValue] = useState("");
	const items = useMemo(
		() =>
			getFilteredCards(cards, inputValue, unlockGroupFilter, dishTypeFilter),
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
