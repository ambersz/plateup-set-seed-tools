import { useSignal, useSignalEffect } from "@preact/signals";
import { StateUpdater, useCallback, useEffect, useState } from "preact/hooks";

export const usePersistentSignal = <T>(
	defaultState: T,
	ID: string,
	versionUpgrader?: (stored: T) => T
) => {
	const signal = useSignal<T>(defaultState);
	useSignalEffect(() => {
		console.log(`loading persistentsignal for:`, { defaultState, ID });
		const stored = localStorage.getItem(ID);
		if (stored === null) {
		} else {
			if (versionUpgrader) {
				signal.value = versionUpgrader(JSON.parse(stored));
			} else {
				signal.value = JSON.parse(stored);
			}
		}
	});
	useSignalEffect(() => {
		console.log("saving persistentsignal state");
		// if (signal.value === undefined) {
		// 	console.log("probably initial state, skip save");
		// 	return;
		// }
		localStorage.setItem(ID, JSON.stringify(signal.value));
	});
	return signal;
};
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
