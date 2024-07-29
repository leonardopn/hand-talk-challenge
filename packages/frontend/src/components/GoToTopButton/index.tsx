"use client";

import { ArrowBigUp } from "lucide-react";
import { Button } from "../Button";
import { useWindowScroll } from "react-use";

export function GoToTopButton() {
	const { y } = useWindowScroll();

	function goToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	if (y <= 20) {
		return null;
	}

	return (
		<Button
			onClick={goToTop}
			aria-label="Botão voltar para o topo"
			colorScheme="purple"
			className="fixed bottom-3 right-3 px-2 py-2 animate-in fade-in">
			<ArrowBigUp />
		</Button>
	);
}
