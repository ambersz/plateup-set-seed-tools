import "./index.css";
import { lazy } from "preact/compat";
import { Suspense } from "preact/compat";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import Version from "./components/Version";
import { FunctionalComponent } from "preact";
const TurboSeedSearcher = lazy(() => import("./seedSearcher"));
const Versus = lazy(() => import("./versusSeeds"));
const NormalSeedSearcher = lazy(() => import("./seedSearcherNormal"));
const BranchingRerollPage = lazy(() => import("./branchingRerolls"));
const CardPaths = lazy(() => import("./cardPaths"));
const WeeklyRerollsExport = lazy(() => import("./weeklyExport"));
const WeeklyPage = lazy(() => import("./weekly"));
const CoffeeEatingTime = lazy(() => import("./coffeeEatingTime"));
const TODO = lazy(() => import("./todo"));
const Loading = () => <>hi</>;

const Layout: FunctionalComponent = () => (
	<>
		<div>
			<Link to={import.meta.env.BASE_URL}>{"<-- All Tools"}</Link>
		</div>
		<Outlet />
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
					<Route
						path="TODO.html"
						element={
							<Suspense fallback={<Loading />}>
								<TODO />
							</Suspense>
						}
					/>
					<Route
						path="test.html"
						element={
							<Suspense fallback={<Loading />}>
								<TODO />
							</Suspense>
						}
					/>
					<Route element={<GameLayout />}>
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
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}
