import { render, FunctionComponent, VNode } from "preact";
import { useEffect, useState } from "preact/compat";
import "./index.css";
import { hash } from "./workers/reverse-engineered/prng";
const w: Worker = new Worker(new URL("./scratchworker.ts", import.meta.url), {
	type: "module",
});

const Scratch = () => {
	const [result, setResult] = useState();
	useEffect(() => {
		w.onmessage = (res: { data: any }) => {
			setResult(res.data);
		};
	}, []);
	return <>{JSON.stringify(result, null, 2)}</>;
};
render(<Scratch />, document.getElementById("app")!);
