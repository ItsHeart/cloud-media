import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

const path = require("path");

export default defineConfig({
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				// 覆盖样式变量
				modifyVars: {}
			}
		}
	},
	resolve: {
		alias: [
			{ find: /^~/, replacement: "" },
			{
				find: "@",
				replacement: path.resolve(__dirname, "./src")
			}
		]
	},
	plugins: [
		vue(),
		styleImport({
			libs: [
				{
					libraryName: "vant",
					esModule: true,
					resolveStyle: (name) => `vant/es/${name}/style`
				}
			]
		})
	]
});
