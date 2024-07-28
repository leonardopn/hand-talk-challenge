import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonVariant = tv({
	base: "py-nano px-xxxs font-semiBold rounded-xs transition-colors focus:outline-none focus:ring-2 text-neutral-high-lightest",
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
}

export function Button({ children, colorScheme = "primary", ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={twMerge(buttonVariant({ color: colorScheme }), props.className)}>
			{children}
		</button>
	);
}
