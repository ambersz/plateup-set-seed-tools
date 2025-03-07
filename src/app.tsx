import "./index.css";
import { lazy } from "preact/compat";
import { Suspense } from "preact/compat";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import Version from "./components/Version";
import { FunctionalComponent } from "preact";
import NkroTester from "./explainers/nkroTester";
import BoardSplit from "./explainers/boardSplit";
import VerifierTime from "./explainers/verifierTime";
import BagSeedPlanning from "./explainers/bagSeedPlanning";
import Test from "./branchingSignalTest";

const Empty = Promise.resolve(() => <></>);
const Table = lazy(() =>
	import.meta.env.DEV ? import("./shh") : Promise.resolve(() => <></>)
);
const ExtrasEatingTime = lazy(() =>
	import.meta.env.DEV ? import("./explainers/extrasEatingTime") : Empty
);
const RandomSeedRerollManip = lazy(
	() => import("./explainers/RandomSeedRerollManip")
);
const ResearchProbabilities = lazy(() =>
	import.meta.env.DEV ? import("./components/ResearchProbabilities") : Empty
);
const TurboSeedSearcher = lazy(() => import("./seedSearcher"));
const Versus = lazy(() => import("./versusSeeds"));
const NormalSeedSearcher = lazy(() => import("./seedSearcherNormal"));
const BranchingRerollPage = lazy(() => import("./branchingRerolls"));
const CardPaths = lazy(() => import("./cardPaths"));
const WeeklyRerollsExport = lazy(() => import("./weeklyExport"));
const WeeklyPage = lazy(() => import("./weekly"));
const CoffeeEatingTime = lazy(() => import("./explainers/coffeeEatingTime"));
const Scratch = lazy(() => (import.meta.env.DEV ? import("./scratch") : Empty));
const GroupSizes = lazy(() => import("./components/GroupSizes"));
const BreakfastAuto = lazy(() => import("./BreakfastAuto"));
const TODO = lazy(() => import("./todo"));
const Tests = lazy(() =>
	import.meta.env.DEV ? import("./Tests") : Promise.resolve(() => <></>)
);
const Dig = lazy(() => import("./components/Dig"));
const IceCreamActions = lazy(() => import("./explainers/IceCreamActions"));
const SaveScumCabinetLayouts = lazy(
	() => import("./explainers/SaveScumCabinetLayouts")
);
const Loading = () => <>...</>;
const AutoRig = lazy(() => import("./components/AutoRig"));
const CourseOrders = lazy(() => import("./explainers/CourseOrders"));

const Layout: FunctionalComponent = () => (
	<>
		<div>
			<Link to={import.meta.env.BASE_URL}>{"<-- All Tools"}</Link>
		</div>
		<Outlet />
	</>
);
const GameLayout = () => (
	<>
		<Outlet />
		<Version />
	</>
);
const SuspenseWrapper = () => (
	<Suspense fallback={<Loading />}>
		<Outlet />
	</Suspense>
);

export function App() {
	return (
		<Routes>
			<Route element={<SuspenseWrapper />}>
				<Route path={import.meta.env.BASE_URL}>
					<Route index element={<Navigation />} />
					<Route path="boardSplitNotes.html" element={<BoardSplit />} />
					{import.meta.env.DEV && (
						<>
							<Route path="signalTest" element={<Test />} />
							<Route path="bagSeedPlanning" element={<BagSeedPlanning />} />
							<Route path="nkro" element={<NkroTester />} />
							<Route path="v" element={<VerifierTime />} />
							<Route path="scratch" element={<Scratch />} />
							<Route path="test.html" element={<Tests />} />
							<Route path="shh" element={<Table />} />
							<Route path="extras" element={<ExtrasEatingTime />} />
						</>
					)}
					<Route element={<Layout />}>
						<Route
							path="randomRerollManip.html"
							element={<RandomSeedRerollManip />}
						/>
						<Route path="TODO.html" element={<TODO />} />
						<Route element={<GameLayout />}>
							<Route path="dig.html" element={<Dig />} />
							<Route
								path="researchProbabilities.html"
								element={<ResearchProbabilities />}
							/>
							<Route path="breakfast-auto.html" element={<BreakfastAuto />} />
							<Route
								path="turbo-seed-searcher.html"
								element={<TurboSeedSearcher />}
							/>
							<Route path="versus-seeds.html" element={<Versus />} />

							<Route
								path="normal-seed-searcher.html"
								element={<NormalSeedSearcher />}
							/>
							<Route
								path="branching-rerolls.html"
								element={<BranchingRerollPage />}
							/>
							<Route path="build-a-rig.html" element={<AutoRig />} />
							<Route path="card-paths.html" element={<CardPaths />} />
							<Route
								path="weekly-export.html"
								element={<WeeklyRerollsExport />}
							/>
							<Route path="weekly.html" element={<WeeklyPage />} />

							<Route path="coffee.html" element={<CoffeeEatingTime />} />
							<Route path="ice-cream.html" element={<IceCreamActions />} />
							<Route path="course-orders.html" element={<CourseOrders />} />
							<Route
								path="scumming.html"
								element={<SaveScumCabinetLayouts />}
							/>
							<Route path="seed-info.html" element={<GroupSizes />} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}
