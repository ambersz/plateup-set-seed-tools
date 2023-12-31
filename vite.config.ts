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
				// coffee: resolve(__dirname, "coffee.html"),
				// worker: resolve(__dirname, "workers/seedSearcher.ts"),
			},
		},
	},
});
