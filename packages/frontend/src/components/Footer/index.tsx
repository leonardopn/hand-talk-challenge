import { Heart } from "lucide-react";

export function Footer() {
	return (
		<footer
			className="bg-brand-secondary-main text-brand-primary-main h-20 text-center flex flex-col justify-center
				shadow-level1 mt-auto">
			<p>
				Feito com <Heart className="inline fill-brand-primary-main size-xxs" /> por{" "}
				<a href="https://www.handtalk.me" target="_blank" rel="noreferrer">
					Hand Talk.
				</a>
			</p>
			<p>Copyright 2024. Todos os direitos reservados.</p>
		</footer>
	);
}
