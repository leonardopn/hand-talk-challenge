import { IPost } from "@/interfaces/Post";
import { Card } from "../Card";
import { PostCard } from "../PostCard";

const posts: IPost[] = [
	{
		id: 1,
		title: "Como implementar um estimador de tempo de leitura em suas postagens",
		content:
			"Descubra como um simples cálculo de tempo de leitura pode enriquecer a experiência dos seus leitores e elevar seu conteúdo.",
		link: "https://www.leonardopetta.dev/blog/como-implementar-um-estimador-de-tempo-de-leitura-em-suas-postagens",
		date: "12/05/2024",
		readingTime: "4 min. de leitura",
	},
	{
		id: 2,
		title: "Criando um blog com Next 14 e Prismic CMS",
		content:
			"Aprenda a construir um blog pessoal com Next.js 14 e Prismic CMS. Este tutorial prático mostrará como configurar e integrar essas ferramentas para criar um blog dinâmico, focando em rotas, gestão de conteúdo modular e componentes reutilizáveis.",
		link: "https://www.leonardopetta.dev/blog/criando-um-blog-com-next14-e-prismic-cms",
		date: "02/05/2024",
		readingTime: "24 min. de leitura",
	},
	{
		id: 3,
		title: "Abrindo as cortinas: conheça meu novo site/blog!",
		content:
			"Ideia antiga, projeto novo. Acompanhe como foi a criação de meu site pessoal e blog em poucos dias utilizando tecnologias modernas.",
		link: "https://www.leonardopetta.dev/blog/abrindo-as-cortinas-conheca-meu-novo-site-blog",
		date: "20/04/2024",
		readingTime: "4 min. de leitura",
	},
];

export function UserPosts() {
	return (
		<Card>
			<h2 className="font-extraBold text-md">Últimas Postagens</h2>
			{posts.map(post => {
				return <PostCard post={post} key={post.id} />;
			})}
		</Card>
	);
}
