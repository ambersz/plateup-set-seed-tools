import { useState } from "preact/compat";

export const Config = () => {
	const [seed, handleSeedChange] = useInput("az");
	return (
		<div>
			<label>Seed: </label>
			<input value={seed} onChange={handleSeedChange} />
		</div>
	);
};

const useInput = (defaultValue: string) => {
	const [value, setValue] = useState(defaultValue);
	const handleChange: HTMLInputElement["onchange"] = (e) => {
		setValue((e.target as HTMLInputElement).value);
	};

	return [value, handleChange] as [string, (event: any) => void];
};
