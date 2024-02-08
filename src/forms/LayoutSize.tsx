const tables = [1, 2, 3, 4];

export const LayoutSize = ({
	setAllowedTables,
	allowedTables,
}: {
	setAllowedTables: (ns: number[]) => void;
	allowedTables: number[];
}) => {
	const handleToggleTable = (n: number) => {
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
