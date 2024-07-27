/**
 * Objeto mapeado humanamente para cada status de resposta HTTP
 */
export const httpStatusCodes = {
	// Respostas informativas (100–199)
	"Continue (100)": 100,
	"Mudando Protocolos (101)": 101,
	"Processando (102)": 102,
	"Dicas Antecipadas (103)": 103,

	// Respostas de sucesso (200–299)
	"OK (200)": 200,
	"Criado (201)": 201,
	"Aceito (202)": 202,
	"Informação Não Autorizada (203)": 203,
	"Sem Conteúdo (204)": 204,
	"Conteúdo Reiniciado (205)": 205,
	"Conteúdo Parcial (206)": 206,
	"Status Múltiplo (207)": 207,
	"Já Relatado (208)": 208,
	"IM Usado (226)": 226,

	// Mensagens de redirecionamento (300–399)
	"Múltiplas Escolhas (300)": 300,
	"Movido Permanentemente (301)": 301,
	"Encontrado (302)": 302,
	"Veja Outros (303)": 303,
	"Não Modificado (304)": 304,
	"Use Proxy (305)": 305,
	"Redirecionamento Temporário (307)": 307,
	"Redirecionamento Permanente (308)": 308,

	// Respostas de erro do cliente (400–499)
	"Requisição Inválida (400)": 400,
	"Não Autorizado (401)": 401,
	"Pagamento Necessário (402)": 402,
	"Proibido (403)": 403,
	"Não Encontrado (404)": 404,
	"Método Não Permitido (405)": 405,
	"Não Aceitável (406)": 406,
	"Autenticação de Proxy Necessária (407)": 407,
	"Tempo de Requisição Esgotado (408)": 408,
	"Conflito (409)": 409,
	"Gone (410)": 410,
	"Comprimento Necessário (411)": 411,
	"Pré-condição Falhou (412)": 412,
	"Payload Muito Grande (413)": 413,
	"URI Muito Longo (414)": 414,
	"Tipo de Mídia Não Suportado (415)": 415,
	"Intervalo Não Satisfatório (416)": 416,
	"Expectativa Falhou (417)": 417,
	"Sou um bule de chá (418)": 418, // Piada de 1º de Abril do RFC 2324
	"Requisição Mal Direcionada (421)": 421,
	"Entidade Não Processável (422)": 422,
	"Bloqueado (423)": 423,
	"Falha de Dependência (424)": 424,
	"Muito Cedo (425)": 425,
	"Atualização Necessária (426)": 426,
	"Pré-condição Necessária (428)": 428,
	"Muitas Requisições (429)": 429,
	"Campos de Cabeçalho de Requisição Muito Grandes (431)": 431,
	"Indisponível por Motivos Legais (451)": 451,

	// Respostas de erro do servidor (500–599)
	"Erro Interno do Servidor (500)": 500,
	"Não Implementado (501)": 501,
	"Gateway Inválido (502)": 502,
	"Serviço Indisponível (503)": 503,
	"Tempo de Gateway Esgotado (504)": 504,
	"Versão HTTP Não Suportada (505)": 505,
	"Variante Também Negocia (506)": 506,
	"Armazenamento Insuficiente (507)": 507,
	"Loop Detectado (508)": 508,
	"Não Estendido (510)": 510,
	"Autenticação de Rede Necessária (511)": 511,
} as const;
