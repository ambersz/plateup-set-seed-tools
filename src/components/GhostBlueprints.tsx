export function GhostBlueprints({
	ghostCount = 2,
	bps,
}: {
	ghostCount?: number;
	bps: string[];
}) {
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
