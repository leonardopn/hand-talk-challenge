import { MobileButtonDrawer } from "../MobileButtonDrawer";
import { ResponsiveLogo } from "../ResponsiveLogo";

export function TopBar() {
	return (
		<div className="bg-brand-secondary-main p-nano flex h-12 w-full items-center justify-between sm:h-16">
			<ResponsiveLogo />
			<MobileButtonDrawer />
		</div>
	);
}
