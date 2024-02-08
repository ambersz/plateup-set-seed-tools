import { StateUpdater, useEffect, useState } from "preact/hooks";

export const usePersistentState = <T>(defaultState: T, ID: string) => {
	const [state, setState] = useState(defaultState);
	const [first, setFirst] = useState(true);
	useEffect(() => {
		const cached = localStorage.getItem(ID);
		if (cached !== null) {
			setState(JSON.parse(cached));
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem(ID) !== null && first) {
			setFirst(false);
			return;
		}
		localStorage.setItem(ID, JSON.stringify(state));
	}, [state]);
	return [state, setState] as [T, StateUpdater<T>];
};
