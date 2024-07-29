import { useThemeChangeCounterContext } from "@/contexts/ThemeChangeCounterContext";
import { LoaderCircle, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { tv } from "tailwind-variants";

const buttonVariant = tv({
	base: "animate-in fade-in size-6 transition-colors cursor-pointer text-neutral-high-lightest",
});

export function ThemeModeToggle() {
	const [isClient, setIsClient] = useState(false);

	const { setThemeChangeCounter } = useThemeChangeCounterContext();
	const { setTheme, themes, theme } = useTheme();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const setNextTheme = useCallback(() => {
		const currentThemeIndex = themes.indexOf(theme || "system");
		const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
		const nextTheme = themes[nextThemeIndex];

		setTheme(nextTheme);
		setThemeChangeCounter(oldState => oldState + 1);
	}, [setTheme, setThemeChangeCounter, theme, themes]);

	const currentIconTheme = useMemo(() => {
		switch (theme) {
			case "light":
				return (
					<Sun
						data-testid="sun-icon"
						className={buttonVariant()}
						onClick={setNextTheme}
					/>
				);
			case "dark":
				return (
					<Moon
						data-testid="moon-icon"
						className={buttonVariant()}
						onClick={setNextTheme}
					/>
				);
			default:
				return (
					<SunMoon
						data-testid="sun-moon-icon"
						className={buttonVariant()}
						onClick={setNextTheme}
					/>
				);
		}
	}, [setNextTheme, theme]);

	return (
		<button
			data-testid="theme-toggle-button"
			className="focus:ring-highlight-primary-light hover:scale-110 transition-transform"
			aria-label="Botão para alternar entre tema claro e escuro">
			{isClient ? (
				currentIconTheme
			) : (
				<LoaderCircle className="animate-spin" aria-label="Ícone de carregando" />
			)}
		</button>
	);
}
