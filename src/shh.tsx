//@ts-nocheck
import { useEffect, useState } from "preact/hooks";

const run = {
	id: "yvlrlgoz",
	weblink: "https://www.speedrun.com/plateup/run/yvlrlgoz",
	game: "yd4kq3k6",
	level: null,
	category: "z275n0gk",
	videos: { links: [{ uri: "https://youtu.be/Phgtmx3hHYA" }] },
	comment: null,
	status: {
		status: "verified",
		examiner: "j59dwk6x",
		"verify-date": "2024-04-27T01:14:15Z",
	},
	players: [
		{
			rel: "user",
			id: "x3wqp5qj",
			uri: "https://www.speedrun.com/api/v1/users/x3wqp5qj",
		},
	],
	date: "2024-04-16",
	submitted: "2024-04-16T17:02:18Z",
	times: {
		primary: "PT24M29.910S",
		primary_t: 1469.91,
		realtime: "PT24M29.910S",
		realtime_t: 1469.91,
		realtime_noloads: null,
		realtime_noloads_t: 0,
		ingame: null,
		ingame_t: 0,
	},
	system: { platform: "8gej2n93", emulated: false, region: null },
	splits: null,
	values: {
		"2lg135el": "9qj3rrgl",
		wl3d19v8: "5lejooz1",
		"5lyx19gn": "qvvmpn6q",
		p855yjv8: "14oxrnwq",
		wlekw94l: "z19n33kq",
		"0nwgp558": "q8k48jgq",
		"6njy11vn": "139x39r1",
	},
	links: [
		{ rel: "self", uri: "https://www.speedrun.com/api/v1/runs/yvlrlgoz" },
		{ rel: "game", uri: "https://www.speedrun.com/api/v1/games/yd4kq3k6" },
		{
			rel: "category",
			uri: "https://www.speedrun.com/api/v1/categories/z275n0gk",
		},
		{
			rel: "platform",
			uri: "https://www.speedrun.com/api/v1/platforms/8gej2n93",
		},
		{ rel: "examiner", uri: "https://www.speedrun.com/api/v1/users/j59dwk6x" },
	],
};
const RESTAURANT_SETTING_VARIABLE = "6njy11vn";
const AVOID_SETTINGS = ["q5v4kv7l", "le2nd2ml"]; // Lake, North Pole

const times = [
	1000,
	1000 * 60,
	1000 * 60 * 60,
	1000 * 60 * 60 * 2,
	1000 * 60 * 60 * 3,
	1000 * 60 * 60 * 4,
	1000 * 60 * 60 * 4.5,
	1000 * 60 * 60 * 5,
	// 1000 * 60 * 60 * 6,
	// 1000 * 60 * 60 * 7,
	// 1000 * 60 * 60 * 8,
]; // 1 second, minute, hour, 2 hours, 3 hours in ms
const getUTCTime = (r = run) => {
	return new Date(r.status["verify-date"]).valueOf();
};
const ME = "j40p6om8";
const Table = () => {
	const [runs, setRuns] = useState([run]);
	useEffect(() => {
		const a = async () => {
			const res = await fetch(
				"https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc&game=yd4kq3k6&max=200"
			);
			const data: Run[] = (await res.json()).data;
			const withoutMe = data
				.filter((a = run) => a.status.examiner !== ME)
				.map((a = run) => {
					return a;
					return new Date(a.status["verify-date"]).valueOf();
				});
			setRuns(withoutMe);
		};
		a();
	}, []);
	let diffs: number[] = [];

	{
		let s = new Set<number>();
		for (let i = 0; i < runs.length - 1; i++) {
			// for (
			// 	let j = i + 1;
			// 	j <= i + 1;
			// 	j++ // for (let j = i + 1; j < runs.length; j++)
			// )
			let j = i + 1;
			{
				s.add(getUTCTime(runs[i]) - getUTCTime(runs[j]));
			}
		}
		diffs = Array.from(s);
		diffs.sort((a, b) => a - b);
		diffs = diffs.map((a) => Math.ceil(a / 2));
	}
	const napTime = (7 / 24) % 1;
	// Math.random();
	const processed = diffs.map((delta) => {
		if (runs.length <= 1) return [0, 0];
		let i = runs.length - 1;
		let notifyAt = getUTCTime(runs[i]) + delta;
		let me = 0;
		let others = 0;
		let runsVerified = 0;
		const DAY_MS = 24 * 60 * 60 * 1000;
		while (i--) {
			const nextTime = getUTCTime(runs[i]);
			const prevTime = getUTCTime(runs[i + 1]);
			if (notifyAt < prevTime) {
				debugger;
			}
			if (
				// Math.random() < 1 / 2 &&
				!AVOID_SETTINGS.includes(runs[i].values[RESTAURANT_SETTING_VARIABLE]) &&
				notifyAt < nextTime
			) {
				others += notifyAt - prevTime;
				runsVerified++;
				me += nextTime - notifyAt;
			} else {
				others += nextTime - prevTime;
			}
			let nextNotify =
				nextTime +
				Math.max(
					1,
					delta -
						runs[Math.floor(runs.length * Math.random())].times.primary_t * 1000
				);
			const dayProgress = (nextNotify / DAY_MS - napTime) % 1;
			if (dayProgress < 1 / 3) {
				// nap time
				const nnextNotify =
					DAY_MS *
					(Math.floor(nextNotify / DAY_MS - napTime) + 1 / 3 + napTime);
				if (nnextNotify < nextTime) debugger;
				nextNotify = nnextNotify;
			}
			notifyAt = nextNotify;
		}
		return [runsVerified / (runsVerified + runs.length), me / (me + others)];
	});
	return (
		<table>
			<thead>
				<tr>
					<th>ms until force me to verify</th>
					{diffs.map((ms) => {
						const hrs = Math.floor(ms / 1000 / 60 / 60);
						const mins = Math.round(ms / 1000 / 60 - hrs * 60);
						return (
							<td>
								{hrs} hrs {mins} mins
							</td>
						);
					})}
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Runs Verified</th>
					{processed.map((a) => (
						// <td>{a[0]}</td>
						<td>{(a[0] * 100).toFixed(2)}%</td>
					))}
				</tr>
				<tr>
					<th>Proportion of Time Most Recently Verified Run is Mine</th>
					{processed.map((a) => (
						<td>{(a[1] * 100).toFixed(2)}%</td>
					))}
				</tr>
				<tr>
					<th>Effectiveness</th>
					{processed.map((a) => (
						<td>?{(a[1] / a[0]).toFixed(4)}%</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};
const notificationDelay = 5 * 1000 * 60 * 60 + 10 * 1000 * 60; // 5 hr 10 min
const NotifyMe = () => {
	const [latestRun, setLatestRun] = useState(run);
	const checkLatestRun = async () => {
		const res = await fetch(
			"https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc&game=yd4kq3k6&max=1"
		);
		let lastVerifiedRun = run;
		lastVerifiedRun = (await res.json()).data[0];
		const myRun = lastVerifiedRun.status.examiner === ME;
		let cand = run;
		cand = (
			await (
				await fetch(
					"https://www.speedrun.com/api/v1/runs?status=new&orderby=submitted&direction=asc&game=yd4kq3k6&max=1"
				)
			).json()
		).data[0];
		let dontVerifyThisRun = myRun;
		let setSeed = false;
		if (AVOID_SETTINGS.includes(cand.values[RESTAURANT_SETTING_VARIABLE])) {
			dontVerifyThisRun = true;
		} else if (cand.values["2lg135el"] === "9qj3rrgl") {
			setSeed = true;
		}
		const timeNeededToVerify = cand.times.primary_t * 1000; // in seconds
		let nextVerifyStart =
			(dontVerifyThisRun
				? Date.now()
				: new Date(lastVerifiedRun.status["verify-date"]).valueOf()) +
			notificationDelay -
			timeNeededToVerify;
		if (setSeed) {
			// set seeds are my favorite!
			nextVerifyStart = 0;
		}
		setLatestRun(lastVerifiedRun);
		if (Date.now() >= nextVerifyStart) {
			alert("time to verify!");
			setTimeout(checkLatestRun, notificationDelay - timeNeededToVerify);
		} else {
			setTimeout(checkLatestRun, nextVerifyStart - Date.now() + 1000);
		}
	};
	useEffect(() => {
		checkLatestRun();
	}, []);
	return (
		<div>
			<div>Last Checked: {new Date().toTimeString()}</div>
			Latest Run:
			<div>
				Verified at: {new Date(latestRun.status["verify-date"]).toTimeString()}
			</div>
			<div>
				<a href={latestRun.weblink}>Link</a>
			</div>
		</div>
	);
};

export default NotifyMe;
