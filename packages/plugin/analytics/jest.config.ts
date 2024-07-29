import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	coverageProvider: "v8",
	testEnvironment: "node",
	roots: ["<rootDir>/src"],
	testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
	moduleFileExtensions: ["ts", "js"],
};

export default config;
