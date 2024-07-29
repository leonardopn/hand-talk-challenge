import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	roots: ["<rootDir>/src"],
	testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};

export default config;
