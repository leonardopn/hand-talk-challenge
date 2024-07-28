import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			brand: {
				primary: {
					main: "#F5F5F5",
					light: "#c4c4c4",
					medium: "#666666",
					dark: "#333333",
				},
				secondary: {
					main: "#F06F06",
					lightest: "#FBC5A0",
					light: "#FAAE4B",
					medium: "#FB8C01",
					dark: "#CC5E05",
				},
			},
			highlight: {
				primary: {
					main: "#413987",
					lightest: "#E0E6F9",
					light: "#5B69C2",
					medium: "#542DC2",
					dark: "#121A5C",
				},
			},
			neutral: {
				low: {
					main: "#333333",
					lightest: "#979797",
					light: "#818181",
					medium: "#666666",
					dark: "#000000",
				},
				high: {
					main: "#F5F5F5",
					lightest: "#ffffff",
					light: "#DEDEDE",
					medium: "#C4C4C4",
					dark: "#AEAEAE",
				},
			},
			feedback: {
				success: {
					main: "#20C6AD",
					light: "#CCFCDE",
					medium: "#00E9B4",
					dark: "#006666",
				},
				info: {
					main: "#3B98D2",
					light: "#DCFCFE",
					medium: "#48C1F8",
					dark: "#103C75",
				},
				alert: {
					main: "#FCC002",
					lightest: "#FCF6B2",
					light: "#FCFA37",
					medium: "#FBD24F",
					dark: "#CA9A00",
				},
				error: {
					main: "#FF4D4D",
					lightest: "#FFB3B3",
					light: "#FF8080",
					medium: "#FF6666",
					dark: "#B23535",
				},
			},
			accessibility: {
				primary: {
					main: "#003087",
				},
			},
		},
	},
	plugins: [],
};
export default config;
