import { MobileButtonDrawer } from "../MobileButtonDrawer";
import { ResponsiveLogo } from "../ResponsiveLogo";

export function TopBar() {
	return (
		<div className="bg-brand-secondary-main p-nano flex w-full items-center justify-between h-16 shadow-level1">
			<a href="https://www.handtalk.me" className="hover:scale-105 transition-transform">
				<ResponsiveLogo />
			</a>
			<MobileButtonDrawer />
		</div>
	);
}
