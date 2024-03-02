import { Link } from "react-router-dom";
import { ResultData } from "../workers/seedSearchWorker";
import { RestaurantSettings } from "../workers/db/unlocks";
interface SeedSearchResultProps {
	turbo?: boolean;
	result: ResultData;
}
const SeedSearchResult = ({
	turbo = false,
	result: r,
}: SeedSearchResultProps) => {
	return (
		<div>
			{r.seed}
			{r.mapSize && ` (${r.mapSize})`}:{" "}
			<div>
				{r.cards.join(", ")}
				<Link
					to={`../branching-rerolls.html?turbo=${turbo ? 1 : 0}&seed=${
						r.seed
					}&cards=${r.cards
						.filter((a) => !RestaurantSettings.some((b) => b.Name === a))
						.map((a) => encodeURIComponent(a))
						.join(",")}&solo=${r.mapSize === 1 ? 1 : 0}`}
				>
					{/* {r.blueprints.map((bp) => bp.Name).join(", ")} */} (Blueprints)
				</Link>
			</div>
		</div>
	);
};
export default SeedSearchResult;
