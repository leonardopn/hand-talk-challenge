declare global {
	interface Window {
		AnalyticsPlugin: {
			setConfigs: (
				token: string,
				getThemeChangeCount: () => number,
				buttonStyle?: CSSStyleDeclaration
			) => void;
			clearConfigs: () => void;
		};
	}
}

export {};
