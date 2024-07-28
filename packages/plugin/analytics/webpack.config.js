const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/index.ts",
	mode: "production",
	plugins: [new Dotenv()],
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		library: "MyPlugin",
		libraryTarget: "umd",
		umdNamedDefine: true,
	},
};