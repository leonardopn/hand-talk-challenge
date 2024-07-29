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
				test: /\.(sa|sc|c)ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
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
