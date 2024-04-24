// @ts-nocheck
import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	base: "/plateup-set-seed-tools/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				branching: resolve(__dirname, "branching-rerolls.html"),
				weekly: resolve(__dirname, "weekly.html"),
				seedSearcher: resolve(__dirname, "seed-searcher.html"),
				turboSeedSearcher: resolve(__dirname, "turbo-seed-searcher.html"),
				normalSeedSearcher: resolve(__dirname, "normal-seed-searcher.html"),
				coffee: resolve(__dirname, "coffee.html"),
				todo: resolve(__dirname, "todo.html"),
				versus: resolve(__dirname, "versus-seeds.html"),
				cardPaths: resolve(__dirname, "card-paths.html"),
				// worker: resolve(__dirname, "workers/seedSearcher.ts"),
				weeklyExport: resolve(__dirname, "weekly-export.html"),
				scumming: resolve(__dirname, "scumming.html"),
				iceCream: resolve(__dirname, "ice-cream.html"),
			},
		},
	},
});
