import Image from "next/image";
import { Card } from "../Card";
import { Button } from "../Button";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		id: 1,
		name: "Sistema de Trade Marketing",
		description:
			"Um sistema abrangente de trade marketing que integra diversas ferramentas para otimizar campanhas e promoções de marketing.",
		link: "https://github.com/leonardopn/sistema-de-trade-marketing",
		photo: "https://images.unsplash.com/photo-1426024120108-99cc76989c71?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		name: "App de Inventário Mobile",
		description:
			"Uma aplicação mobile projetada para gestão de inventário, com funcionalidades offline e sincronização de dados.",
		link: "https://github.com/leonardopn/app-de-inventario-mobile",
		photo: "https://images.unsplash.com/photo-1651130539584-f3fae3232e4a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		name: "Plataforma de E-commerce",
		description:
			"Uma plataforma de e-commerce completa com interfaces amigáveis, processamento seguro de pagamentos e rastreamento de pedidos em tempo real.",
		link: "https://github.com/leonardopn/plataforma-de-ecommerce",
		photo: "https://images.unsplash.com/photo-1651130533706-ec3fc4701211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		name: "Aplicativo de Chat em Tempo Real",
		description:
			"Um aplicativo de chat em tempo real com suporte a chats em grupo, compartilhamento de mídia e notificações push.",
		link: "https://github.com/leonardopn/app-chat-tempo-real",
		photo: "https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export function UserProjects() {
	return (
		<Card>
			<h2 className="font-extraBold text-md">Projetos</h2>
			{projects.map(project => {
				return (
					<div
						key={project.id}
						className="w-full border-thin rounded-md p-4 border-neutral-high-light dark:border-neutral-high-dark flex
							flex-col gap-xxs">
						<Image
							className="w-full h-40 rounded-xs object-cover shadow-level1"
							src={project.photo}
							alt={`Imagem do projeto ${project.name}`}
							width={1366}
							height={768}
						/>
						<section className="text-center">
							<h3 className="font-bold text-sm">{project.name}</h3>
							<p className="text-neutral-low-medium dark:text-neutral-high-medium">
								{project.description}
							</p>
						</section>

						<a href={project.link} target="_blank" rel="noreferrer">
							<Button
								aria-label="Ver mais"
								className="items-center justify-center flex gap-2 w-full">
								Ver mais <ExternalLink className="inline size-5" />
							</Button>
						</a>
					</div>
				);
			})}
			<a
				href="https://www.leonardopetta.dev/projects"
				target="_blank"
				rel="noreferrer"
				className="w-full">
				<Button
					colorScheme="purple"
					aria-label="Ver todos os projetos"
					className="items-center justify-center flex gap-2 w-full">
					Ver todos os projetos <ExternalLink className="inline size-5" />
				</Button>
			</a>
		</Card>
	);
}
