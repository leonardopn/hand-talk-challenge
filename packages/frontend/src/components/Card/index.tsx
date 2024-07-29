import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export function Card({ children, className, ...props }: CardProps) {
	return (
		<div
			className={twMerge(
				`gap-xs flex flex-col bg-neutral-high-lightest dark:bg-brand-primary-dark shadow-level1 p-xxxs h-fit
				lg:rounded-sm`,
				className
			)}
			{...props}>
			{children}
		</div>
	);
}
