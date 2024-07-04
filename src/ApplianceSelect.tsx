import { useState, useMemo, useCallback } from "preact/hooks";
import { useMultipleSelection, useCombobox } from "downshift/preact"; // if this is giving typescript errors, copy the type file from `node_modules\downshift\typings\index.d.ts` to `node_modules\downshift\preact\index.d.ts`
import Appliances, { Appliance } from "./workers/db/appliances";
type Appliances = Appliance[];
const Options = [...Appliances].filter(
	(a) => a.IsPurchasable || a.IsPurchasableAsUpgrade || a.Name === "Teleporter"
);
console.log({
	options: Options.length,
	unique: new Set(Options.map((a) => a.ID)).size,
});

function getFilteredCards(
	selectedItems: Appliance[],
	inputValue: string,
	shopModifiersOnly: boolean,
	allowDupes: boolean
) {
	const lowerCasedInputValue = inputValue.toLowerCase();

	return Options.filter(function filterCard(appliance) {
		if (shopModifiersOnly) {
			// after you buy one item that enables supplies, don't clog the list up with the other stuff
			if (appliance.AllowRefreshes && !appliance.SellOnlyAsDuplicate) {
				if (selectedItems.some((a) => a.AllowRefreshes)) return false;
			}
		}
		return (
			(allowDupes || !selectedItems.some((s) => s.ID === appliance.ID)) &&
			appliance.Name.toLowerCase().includes(lowerCasedInputValue) &&
			(!shopModifiersOnly ||
				appliance.StapleWhenMissing ||
				appliance.SellOnlyAsUnique ||
				(!appliance.SellOnlyAsDuplicate && appliance.AllowRefreshes))
		);
	}).sort((a, b) => (a.Name < b.Name ? -1 : 1));
}
interface AppliancesComboBoxProps {
	onSelectionChange: (newSelection: Appliances) => void;
	label?: string;
	placeholder?: string;
	include?: boolean;
	appliances?: Appliance[];
	showSelectionMode?: boolean;
	shopModifiersOnly?: boolean;
	allowDupes?: boolean;
}
export function AppliancesComboBox({
	onSelectionChange,
	label,
	placeholder,
	include = true,
	appliances: cards = [],
	shopModifiersOnly = true,
	allowDupes = false,
}: AppliancesComboBoxProps) {
	const [inputValue, setInputValue] = useState("");
	const items = useMemo(
		() => getFilteredCards(cards, inputValue, shopModifiersOnly, allowDupes),
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
						onSelectionChange(newSelectedItems ?? []);
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
		itemToString(item: Appliance | null) {
			return item ? item.Name : "";
		},
		defaultHighlightedIndex: -1, // after selection, highlight the first item.
		selectedItem: null,
		inputValue,
		stateReducer(_state, actionAndChanges) {
			const { changes, type } = actionAndChanges;

			switch (type) {
				case useCombobox.stateChangeTypes.InputChange:
					if (actionAndChanges.inputValue) {
						return { ...changes, highlightedIndex: 0 };
					} else {
						return { ...changes, highlightedIndex: -1 };
					}
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
					return {
						...changes,
						isOpen: false, // keep the menu open after selection.
						highlightedIndex: -1, // with the first option highlighted.
					};
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						isOpen: true, // keep the menu open after selection.
						highlightedIndex: -1, // with the first option highlighted.
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
						onSelectionChange([...cards, newSelectedItem]);
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
	const handleClear = useCallback(() => {
		onSelectionChange([]);
	}, []);
	return (
		<div className="combo-container">
			<div className="">
				<label className="" {...getLabelProps()}>
					{label ?? "Select desired appliances"}
				</label>
				<div>
					<button onClick={handleClear}>Clear Appliances</button>
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
							placeholder={placeholder ?? "Appliance Selection(s)"}
							className=""
							{...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
						/>
					</div>
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
						</li>
					))}
			</ul>
		</div>
	);
}

export const cx = (...args: (string | boolean)[]) =>
	args.filter((a) => a).join(" ");
