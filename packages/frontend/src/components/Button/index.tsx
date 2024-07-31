import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonVariant = tv({
	base: "py-nano px-xxxs font-semiBold rounded-xs transition-colors focus:outline-none focus:ring-2 text-neutral-high-lightest no-underline",
	variants: {
		color: {
			primary:
				"bg-brand-secondary-main hover:bg-brand-secondary-medium active:bg-brand-secondary-light focus:ring-highlight-primary-light",
			purple: "bg-highlight-primary-main hover:bg-highlight-primary-medium active:bg-highlight-primary-light focus:ring-brand-secondary-light",
		},
	},
});

interface ButtonProps extends React.ComponentProps<"button"> {
	"aria-label": string;
	colorScheme?: keyof (typeof buttonVariant)["variants"]["color"];
	linkProps?: React.ComponentProps<typeof Link>;
}

export function Button({ children, linkProps, colorScheme = "primary", ...props }: ButtonProps) {
	if (linkProps) {
		return (
			<Link
				{...linkProps}
				className={twMerge(buttonVariant({ color: colorScheme }), props.className)}>
				{children}
			</Link>
		);
	}

	return (
		<button
			{...props}
			className={twMerge(buttonVariant({ color: colorScheme }), props.className)}>
			{children}
		</button>
	);
}
