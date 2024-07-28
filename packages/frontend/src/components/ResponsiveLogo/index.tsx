import { getImageProps } from "next/image";
import defaultTheme from "tailwindcss/defaultTheme";

export function ResponsiveLogo() {
	const common: Omit<Parameters<typeof getImageProps>[0], "src"> = {
		alt: "Hand talk logo",
		width: 45,
		height: 45,
	};

	const {
		props: { src: logoIcon },
	} = getImageProps({ ...common, src: "/img/logo-icon.svg" });

	const {
		props: { src: logoFull },
	} = getImageProps({ ...common, className: "size-md", src: "/img/logo-full.svg" });

	return (
		<picture>
			<source media={`(max-width: ${defaultTheme.screens.sm})`} srcSet={logoIcon} />
			<source media={`(min-width: ${defaultTheme.screens.sm})`} srcSet={logoFull} />
			<img alt="Hand talk logo" />
		</picture>
	);
}
