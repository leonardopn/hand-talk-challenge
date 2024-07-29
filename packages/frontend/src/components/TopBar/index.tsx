import { MobileButtonDrawer } from "../MobileButtonDrawer";
import { ResponsiveLogo } from "../ResponsiveLogo";
import { ThemeModeToggle } from "../ThemeModeToggle";

export function TopBar() {
	return (
		<div
			className="bg-brand-secondary-main p-nano flex w-full items-center justify-between h-16 shadow-level1
				dark:bg-highlight-primary-main">
			<a href="https://www.handtalk.me" className="hover:scale-105 transition-transform">
				<ResponsiveLogo />
			</a>
			<div className="flex gap-2 items-center">
				<ThemeModeToggle />
				<MobileButtonDrawer />
			</div>
		</div>
	);
}
