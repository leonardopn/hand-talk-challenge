import Image, { getImageProps } from "next/image";
import defaultTheme from "tailwindcss/defaultTheme";

export function ResponsiveLogo() {
	const common: Omit<Parameters<typeof getImageProps>[0], "src"> = {
		alt: "Hand talk logo",
		width: 20,
		height: 20,
		className: "w-10 sm:w-40",
	};

	const {
		props: { src: logoIcon },
	} = getImageProps({ ...common, src: "/img/logo-icon.svg" });

	const {
		props: { src: logoFull, ...restProps },
	} = getImageProps({ ...common, src: "/img/logo-full.svg" });

	return (
		<picture>
			<source
				data-testid="logo-icon"
				media={`(max-width: ${defaultTheme.screens.sm})`}
				srcSet={logoIcon}
			/>
			<source
				data-testid="logo-full"
				media={`(min-width: ${defaultTheme.screens.sm})`}
				srcSet={logoFull}
			/>
			<Image alt={common.alt} {...restProps} src={logoIcon} />
		</picture>
	);
}
