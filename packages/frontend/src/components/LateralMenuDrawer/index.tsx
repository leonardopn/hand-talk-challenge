"use client";
import { routePaths } from "@/constant/RoutePaths";
import { Menu, PanelRightClose } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Drawer } from "vaul";
import { Button } from "../Button";
import { ThemeModeToggle } from "../ThemeModeToggle";

export function LateralMenuDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	function goToHeading(id: string) {
		const element = document.getElementById(id);

		if (element) {
			setTimeout(() => {
				window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
			}, 500);
		}
		setIsOpen(false);
	}

	return (
		<Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
			<Drawer.Trigger
				className="lg:hidden"
				aria-label="Botão para abrir a gaveta com links"
				aria-controls="lateral-menu">
				<Menu className="text-brand-primary-main size-6 hover:scale-110 transition-transform" />
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-neutral-low-main/medium z-50" />
				<Drawer.Description>
					Menu lateral para acesso ao conteúdo principal
				</Drawer.Description>
				<Drawer.Content
					id="lateral-menu"
					className="bg-neutral-high-lightest dark:bg-brand-primary-dark flex flex-col h-full max-w-sm w-full mt-24 fixed
						bottom-0 right-0 z-50 gap-2">
					<header className="bg-brand-secondary-main dark:bg-highlight-primary-main p-4 h-16 flex justify-between">
						<div className="flex gap-2 items-center">
							<Drawer.Close
								className="w-fit text-neutral-high-lightest"
								aria-label="Botão para fechar a gaveta">
								<PanelRightClose />
							</Drawer.Close>
							<ThemeModeToggle />
						</div>

						<Drawer.Title>
							<Image
								src="/img/logo-full.svg"
								width={250}
								height={100}
								alt="Logo Hand talk"
								className="w-32"
							/>
						</Drawer.Title>
					</header>

					<section className="flex flex-col p-4 space-y-4 overflow-y-auto">
						{Object.keys(routePaths).map(key => {
							const value = routePaths[key as keyof typeof routePaths];

							return (
								<Button
									className="w-full"
									key={key}
									aria-label={`Botão para a rota: ${value.title}`}
									colorScheme="purple"
									onClick={() => {
										goToHeading(value.path);
									}}>
									{value.title}
								</Button>
							);
						})}
					</section>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
