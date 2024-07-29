"use client";

import { LoaderCircle, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { tv } from "tailwind-variants";

const buttonVariant = tv({
	base: "animate-in fade-in size-6 transition-colors cursor-pointer text-neutral-high-lightest",
});

export function ThemeModeToggle() {
	const { setTheme, themes, theme } = useTheme();

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const setNextTheme = useCallback(() => {
		const currentThemeIndex = themes.indexOf(theme || "system");
		const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
		const nextTheme = themes[nextThemeIndex];

		setTheme(nextTheme);
	}, [setTheme, theme, themes]);

	const currentIconTheme = useMemo(() => {
		switch (theme) {
			case "light":
				return <Sun className={buttonVariant()} onClick={setNextTheme} />;
			case "dark":
				return <Moon className={buttonVariant()} onClick={setNextTheme} />;
			default:
				return <SunMoon className={buttonVariant()} onClick={setNextTheme} />;
		}
	}, [setNextTheme, theme]);

	return (
		<button
			className="focus:ring-highlight-primary-light hover:scale-110 transition-transform"
			aria-label="Botão para alternar entre tema claro e escuro">
			{isClient ? currentIconTheme : <LoaderCircle className="animate-spin" />}
		</button>
	);
}
