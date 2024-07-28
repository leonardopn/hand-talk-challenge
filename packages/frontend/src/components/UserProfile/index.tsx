import * as Avatar from "@radix-ui/react-avatar";
import { Button } from "../Button";

export function UserProfile() {
	return (
		<div className="gap-xs flex flex-col items-center">
			<Avatar.Root>
				<Avatar.Image
					className="rounded-circular size-36"
					src="https://avatars.githubusercontent.com/u/39427966?v=4"
					alt="Imagem do usuário"
				/>
				<Avatar.Fallback delayMs={600}>LP</Avatar.Fallback>
			</Avatar.Root>

			<h1 className="font-extraBold text-md max-w-72 text-center">
				Leonardo Petta do Nascimento
			</h1>
			<a href="https://github.com/leonardopn" target="_blank" rel="noreferrer">
				<Button aria-label="Entre em contato">Entre em contato</Button>
			</a>
		</div>
	);
}
