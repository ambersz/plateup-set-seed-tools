import { LayoutProfileName, tables } from "../workers/reverse-engineered/run";

export const LayoutSize = ({
	setAllowedTables,
	allowedTables,
}: {
	setAllowedTables: (ns: LayoutProfileName[]) => void;
	allowedTables: LayoutProfileName[];
}) => {
	const handleToggleTable = (n: LayoutProfileName) => {
		return () => {
			if (allowedTables.includes(n)) {
				setAllowedTables(allowedTables.filter((a) => a !== n));
			} else {
				setAllowedTables([...allowedTables, n]);
			}
		};
	};
	return (
		<>
			<label>Starting Tables: </label>
			{tables.map((n) => {
				const key = n + "-table";
				return (
					<>
						<label for={key}>{n}</label>
						<input
							id={key}
							type="checkbox"
							onChange={handleToggleTable(n)}
							checked={allowedTables.includes(n)}
						/>
					</>
				);
			})}
		</>
	);
};
