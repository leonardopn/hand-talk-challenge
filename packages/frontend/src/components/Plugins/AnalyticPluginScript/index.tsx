"use client";

import { useThemeChangeCounterContext } from "@/contexts/ThemeChangeCounterContext";
import Script from "next/script";

export function AnalyticPluginScript() {
	const { setThemeChangeCounter } = useThemeChangeCounterContext();

	return (
		<Script
			src={"/plugins/pluginAnalytics/index.js"}
			strategy="afterInteractive"
			onLoad={() => {
				window.AnalyticsPlugin.setConfigs(
					process.env.NEXT_PUBLIC_ANALYTICS_PLUGIN_TOKEN || "",
					() => {
						let currentThemeChangeCounter = 0;

						setThemeChangeCounter(oldState => {
							currentThemeChangeCounter = oldState;
							return 0;
						});

						return currentThemeChangeCounter;
					}
				);
			}}
		/>
	);
}
