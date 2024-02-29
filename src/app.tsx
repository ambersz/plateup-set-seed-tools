import "./index.css";
import { lazy } from "preact/compat";
import { Suspense } from "preact/compat";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
const TurboSeedSearcher = lazy(() => import("./seedSearcher"));
const Versus = lazy(() => import("./versusSeeds"));
const NormalSeedSearcher = lazy(() => import("./seedSearcherNormal"));
const BranchingRerollPage = lazy(() => import("./branchingRerolls"));
const CardPaths = lazy(() => import("./cardPaths"));
const WeeklyRerollsExport = lazy(() => import("./weeklyExport"));
const WeeklyPage = lazy(() => import("./weekly"));
const CoffeeEatingTime = lazy(() => import("./coffeeEatingTime"));
const TODO = lazy(() => import("./todo"));
const Loading = () => <></>;
export function App() {
	return (
		<Routes>
			<Route path={import.meta.env.BASE_URL}>
				<Route
					path="test.html"
					element={
						<Suspense fallback={<Loading />}>
							<TODO />
						</Suspense>
					}
				/>
				<Route path="" element={<Navigation />} />
				<Route
					path="turbo-seed-searcher.html"
					element={
						<Suspense fallback={<Loading />}>
							<TurboSeedSearcher />
						</Suspense>
					}
				/>
				<Route
					path="versus-seeds.html"
					element={
						<Suspense fallback={<Loading />}>
							<Versus />
						</Suspense>
					}
				/>

				<Route
					path="normal-seed-searcher.html"
					element={
						<Suspense fallback={<Loading />}>
							<NormalSeedSearcher />
						</Suspense>
					}
				/>
				<Route
					path="branching-rerolls.html"
					element={
						<Suspense fallback={<Loading />}>
							<BranchingRerollPage />
						</Suspense>
					}
				/>
				<Route
					path="card-paths.html"
					element={
						<Suspense fallback={<Loading />}>
							<CardPaths />
						</Suspense>
					}
				/>
				<Route
					path="weekly-export.html"
					element={
						<Suspense fallback={<Loading />}>
							<WeeklyRerollsExport />
						</Suspense>
					}
				/>
				<Route
					path="weekly.html"
					element={
						<Suspense fallback={<Loading />}>
							<WeeklyPage />
						</Suspense>
					}
				/>

				<Route
					path="coffee.html"
					element={
						<Suspense fallback={<Loading />}>
							<CoffeeEatingTime />
						</Suspense>
					}
				/>
				<Route
					path="TODO.html"
					element={
						<Suspense fallback={<Loading />}>
							<TODO />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
}
