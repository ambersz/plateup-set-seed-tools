import { useInput } from "../utils/useInput";

export const Config = () => {
	const [seed, handleSeedChange] = useInput("az");
	return (
		<div>
			<label>Seed: </label>
			<input value={seed} onChange={handleSeedChange} />
		</div>
	);
};
