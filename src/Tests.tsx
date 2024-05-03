import { useEffect, useState } from "preact/hooks";
import { shopTests } from "./tests/shopTests";
import { unlockTests } from "./tests/unlockTests";
import { customerCountTests } from "./tests/runTests";

const Tests = () => {
	const [mess, setMess] = useState("");
	useEffect(() => {
		shopTests();
		unlockTests();
		customerCountTests();
	}, []);
	return (
		<>
			Running Tests
			<div>
				{mess.split("\n").map((a) => (
					<div>{a}</div>
				))}
			</div>
		</>
	);
};
export default Tests;
