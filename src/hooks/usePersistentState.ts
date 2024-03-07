import { StateUpdater, useCallback, useEffect, useState } from "preact/hooks";

export const usePersistentState = <T>(
	defaultState: T,
	ID: string,
	versionUpgrader?: (stored: T) => T
): [T, StateUpdater<T>] => {
	const [state, _setState] = useState<T>();
	useEffect(() => {
		const stored = localStorage.getItem(ID);
		if (stored === null) {
		} else {
			if (versionUpgrader) {
				_setState(versionUpgrader(JSON.parse(stored)));
			} else {
				_setState(JSON.parse(stored));
			}
		}
	}, [defaultState, ID]);
	const setState = useCallback<StateUpdater<T>>(
		(v) => {
			if (typeof v === "function") {
				_setState((oldState) => {
					const newState = (v as (prevState: T) => T)(oldState ?? defaultState);
					localStorage.setItem(ID, JSON.stringify(newState));
					return newState;
				});
			} else {
				_setState(v);
				localStorage.setItem(ID, JSON.stringify(v));
			}
		},
		[ID, _setState]
	);

	return [state ?? defaultState, setState];
};
