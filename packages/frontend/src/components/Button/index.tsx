import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<"button"> {
	"aria-label": string;
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={twMerge(
				`bg-brand-secondary-main text-brand-primary-main py-nano px-xxxs font-semiBold rounded-xs
				hover:bg-brand-secondary-medium active:bg-brand-secondary-light transition-colors focus:outline-none
				focus:ring-2 focus:ring-highlight-primary-light`,
				props.className
			)}>
			{children}
		</button>
	);
}
