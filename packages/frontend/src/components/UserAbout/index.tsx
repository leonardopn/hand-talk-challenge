import { Card } from "../Card";

const skills = [
	{
		category: "Front-End",
		technologies: ["React", "Next.js", "React Native", "Material-UI (MUI)"],
	},
	{
		category: "Back-End",
		technologies: ["Node.js", "Express.js"],
	},
	{
		category: "Linguagens",
		technologies: ["JavaScript", "TypeScript"],
	},
	{
		category: "Bancos de dados",
		technologies: ["MongoDB", "Firebase Firestore", "Firebase Realtime Database"],
	},
	{
		category: "Serviços em nuvem",
		technologies: ["Firebase Functions", "Firebase Authentication", "Firebase Hosting"],
	},
	{
		category: "Ferramentas de desenvolvedor",
		technologies: ["Git", "Webpack", "Babel"],
	},
	{
		category: "Outras tecnologias",
		technologies: ["RESTful APIs", "GraphQL", "Redux", "Context API"],
	},
];

export function UserAbout() {
	return (
		<Card className="items-stretch">
			<section className="flex flex-col gap-xxs text-justify">
				<h2 className="font-extraBold text-md">Sobre mim</h2>
				<p>
					Olá! Meu nome é Leonardo Petta do Nascimento e sou um desenvolvedor de software
					apaixonado por criar soluções inovadoras e eficientes. Com mais de 5 anos de
					experiência no desenvolvimento de aplicações web e móveis, tenho um sólido
					conhecimento em tecnologias como React, Firebase, Typescript, Next.js, MUI e
					MongoDB.
				</p>
				<p>
					Minha jornada na tecnologia começou com um interesse em resolver problemas
					complexos através da programação. Desde então, tenho me dedicado a aprender e
					dominar novas ferramentas e frameworks para entregar produtos de alta qualidade
					e desempenho. Atualmente, estou focado em desenvolver soluções de trade
					marketing, trabalhando em um projeto desafiador que envolve a construção de um
					ecossistema integrado de sistemas e serviços.
				</p>
			</section>
			<section className="flex flex-col gap-xxs text-justify">
				<h3 className="font-extraBold text-sm">Habilidades</h3>
				<ul className="space-y-3">
					{skills.map(skill => (
						<li key={skill.category}>
							<h4 className="font-bold">{skill.category}:</h4>
							<ul>
								{skill.technologies.map(tech => (
									<li key={tech} className="list-disc ml-5">
										{tech}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
		</Card>
	);
}
