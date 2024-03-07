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
const TODO = lazy(() => import("./todo"));
const Loading = () => <>...</>;

const Layout: FunctionalComponent = () => (
	<>
		<div>
			<Link to={import.meta.env.BASE_URL}>{"<-- All Tools"}</Link>
		</div>
		<Suspense fallback={<Loading />}>
			<Outlet />
		</Suspense>
		{/* <Version /> */}
	</>
);
const GameLayout = () => (
	<>
		<Outlet />
		<Version />
	</>
);

export function App() {
	return (
		<Routes>
			<Route path={import.meta.env.BASE_URL}>
				<Route index element={<Navigation />} />
				<Route element={<Layout />}>
					<Route path="TODO.html" element={<TODO />} />
					<Route path="test.html" element={<TODO />} />
					<Route element={<GameLayout />}>
						<Route
							path="researchProbabilities.html"
							element={<ResearchProbabilities />}
						/>
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
		</Routes>
	);
}
