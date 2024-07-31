import { routePaths } from "@/constant/RoutePaths";
import * as Avatar from "@radix-ui/react-avatar";
import { Rss } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import { Card } from "../Card";

interface UserProfileProps {
	className?: string;
}

export function UserProfile({ className }: UserProfileProps) {
	return (
		<Card className={twMerge("items-center", className)} id={routePaths.userProfile.path}>
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

			<Button
				linkProps={{
					href: "https://github.com/leonardopn",
					target: "_blank",
					rel: "noreferrer",
				}}
				aria-label="Entre em contato"
				className="w-full flex items-center justify-center gap-2"
				colorScheme="purple">
				Entre em contato <Rss className="inline size-5" />
			</Button>
		</Card>
	);
}
