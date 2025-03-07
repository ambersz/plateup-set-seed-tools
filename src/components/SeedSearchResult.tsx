import { Link } from "react-router-dom";
import { ResultData } from "../workers/seedSearchWorker";
import { Run } from "../workers/reverse-engineered/run";
interface SeedSearchResultProps {
	turbo?: boolean;
	result: ResultData;
	door?: boolean; // show door info feature flag
}
const SeedSearchResult = ({
	turbo = false,
	result: r,
	door = false,
}: SeedSearchResultProps) => {
	return (
		<div>
			{r.seed}
			{r.mapSize &&
				` | ${r.mapSize}${door ? `, ${new Run(r.seed).frontDoor}` : ""}`}
			:{" "}
			<div>
				{r.cards.join(", ")}
				<Link
					to={`../branching-rerolls.html?${turbo ? "turbo=1&" : ""}&seed=${
						r.seed
					}&cards=${r.cards.map((a) => encodeURIComponent(a)).join(",")}&solo=${
						r.mapSize === "Diner (1)" ? 1 : 0
					}`}
					target="_blank"
				>
					{/* {r.blueprints.map((bp) => bp.Name).join(", ")} */} (Blueprints)
				</Link>
			</div>
		</div>
	);
};
export default SeedSearchResult;
