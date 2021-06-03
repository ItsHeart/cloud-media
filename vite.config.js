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
				modifyVars: {
					"base-font-family": "Roboto, Noto, Helvetica, Arial, sans-serif",
					"price-integer-font-family":
						"Roboto, Noto, Helvetica, Arial, sans-serif",
					"action-bar-background-color": "#EBEBEB",
					"action-bar-icon-background-color": "#EBEBEB",
					"nav-bar-background-color": "#222831",
					"nav-bar-title-text-color": "#fff",
					"badge-background-color": "#00adb5",
					"nav-bar-icon-color": "#fff",
					"nav-bar-text-color": "#fff",
					"tabs-bottom-bar-color": "#222831"
				}
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
		// 按需引入样式源文件
		styleImport({
			libs: [
				{
					libraryName: "vant",
					esModule: true,
					resolveStyle: (name) => `vant/es/${name}/style/less`
				}
			]
		})
	]
});
