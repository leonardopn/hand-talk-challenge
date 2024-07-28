"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { tv } from "tailwind-variants";

const buttonVariant = tv({
	base: "animate-in fade-in size-6 hover:text-highlight-primary-main transition-colors cursor-pointer text-neutral-high-lightest",
	variants: {
		color: {
			dark: "hidden dark:inline",
			light: "dark:hidden",
		},
	},
});

export function ThemeModeToggle() {
	const { setTheme } = useTheme();

	return (
		<button className="focus:ring-highlight-primary-light hover:scale-110 transition-transform">
			<Sun className={buttonVariant({ color: "light" })} onClick={() => setTheme("dark")} />
			<Moon className={buttonVariant({ color: "dark" })} onClick={() => setTheme("light")} />
		</button>
	);
}
