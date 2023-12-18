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
				worker: resolve(__dirname, "workers/seedSearcher.ts"),
			},
		},
	},
});
