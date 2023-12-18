export function GhostBlueprints({
	normalCount = 5,
	ghostCount = 2,
	bps,
}: {
	normalCount?: number;
	ghostCount?: number;
	bps: string[];
}) {
	const max = bps.length;
	return (
		<>
			{bps.map((bp, i) => {
				return (
					<span class={i + ghostCount < bps.length ? "" : "ghost"}>
						{bp + (i < bps.length - 1 ? ", " : "")}
					</span>
				);
			})}
		</>
	);
}
