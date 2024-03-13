import "./index.css";
import { lazy } from "preact/compat";
import { Suspense } from "preact/compat";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import Version from "./components/Version";
import { FunctionalComponent } from "preact";
import ResearchProbabilities from "./components/ResearchProbabilities";
const TurboSeedSearcher = lazy(() => import("./seedSearcher"));
const Versus = lazy(() => import("./versusSeeds"));
const NormalSeedSearcher = lazy(() => import("./seedSearcherNormal"));
const BranchingRerollPage = lazy(() => import("./branchingRerolls"));
const CardPaths = lazy(() => import("./cardPaths"));
const WeeklyRerollsExport = lazy(() => import("./weeklyExport"));
const WeeklyPage = lazy(() => import("./weekly"));
const CoffeeEatingTime = lazy(() => import("./coffeeEatingTime"));
const Scratch = lazy(() => import("./scratch"));
const BreakfastAuto = lazy(() => import("./BreakfastAuto"));
const TODO = lazy(() => import("./todo"));
const Loading = () => <>...</>;

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
					<Route path="scratch" element={<Scratch />} />
					<Route element={<Layout />}>
						<Route path="TODO.html" element={<TODO />} />
						<Route path="test.html" element={<TODO />} />
						<Route element={<GameLayout />}>
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
							<Route path="card-paths.html" element={<CardPaths />} />
							<Route
								path="weekly-export.html"
								element={<WeeklyRerollsExport />}
							/>
							<Route path="weekly.html" element={<WeeklyPage />} />

							<Route path="coffee.html" element={<CoffeeEatingTime />} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}
