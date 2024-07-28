import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
		fontWeight: {
			regular: "400",
			semiBold: "600",
			bold: "700",
			extraBold: "800",
		},
		fontSize: {
			xxxs: "0.75rem", // 12px
			xxs: "0.875rem", // 14px
			xs: "1rem", // 16px
			sm: "1.25rem", // 20px
			md: "1.5rem", // 24px
			lg: "2rem", // 32px
		},
		lineHeight: {
			default: "100%",
			sm: "130%",
			md: "140%",
			lg: "150%",
		},
		borderRadius: {
			none: "0",
			xs: ".25rem", // 8px,
			sm: ".5rem", // 8px,
			md: "0.75rem", // 12px,
			xd: "1.375rem", // 22px
			circular: "50%",
		},
		borderWidth: {
			none: "0",
			thin: "0.125rem", //2px
		},
		opacity: {
			medium: "0.5",
		},
		boxShadow: {
			level1: "0px 4px 8px rgba(0, 0, 0, 0.08)",
		},

		extend: {
			fontFamily: {
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				quark: "0.25rem", // 4px
				nano: "0.5rem", // 8px
				xxxs: "0.75rem", // 12px
				xxs: "1rem", // 16px
				xs: "1.5rem", // 24px
				sm: "2rem", // 32px
			},
		},
	},
	plugins: [],
};
export default config;
