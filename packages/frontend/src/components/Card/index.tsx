import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export function Card({ children, className, ...props }: CardProps) {
	return (
		<div
			className={twMerge(
				"gap-xs flex flex-col items-center bg-neutral-high-lightest shadow-level1 p-xxxs",
				className
			)}
			{...props}>
			{children}
		</div>
	);
}
