# Desafio Hand talk

[![wakatime](https://wakatime.com/badge/user/8fca51ef-168e-4305-aa1b-ac65b03510fe/project/ebbb84ab-a308-42d8-bdcd-7af2dbd40d51.svg)](https://wakatime.com/@leonardopn/projects/wuestpjnks?start=2024-07-23&end=2024-07-29) <- Tempo de desenvolvimento

## Sumário

-   [Sobre](#sobre)
-   [Configurações Gerais](#configurações-gerais)
-   [Configurações por projeto](#configurações-por-projeto)
    -   [Configurando o backend](#configurando-o-backend)
    -   [Configurando o frontend](#configurando-o-frontend)
    -   [Configurando o plugin](#configurando-o-plugin)
-   [Rodando o projeto](#rodando-o-projeto)
-   [Testando o Aplicativo](#testando-o-aplicativo)
-   [Criador](#criador)
-   [Licença](#licença)

## Sobre

Este é um projeto desenvolvido como desafio para a Hand Talk. Ele foi construído em um monorepo de 3 pacotes e dentro deste README estarão todas as informações necessárias para rodar o projeto como um todo. Qualquer informação mais específica por pacote será apresentada nos respectivos READMEs.

## Configurações Gerais

Para rodar o projeto localmente, é necessário seguir alguns passos gerais e alguns passos por projeto.

1. Clone o repositório em sua máquina usando git.

```bash
git clone https://github.com/leonardopn/hand-talk-challenge.git && cd hand-talk-challenge
```

2. Instale a versão do [Node.js 20 LTS](https://nodejs.org/en/download/package-manager).

3. Instale o yarn para utilizar a versão padronizada no projeto

```bash
npm install --global yarn
```

4. Instale as dependências

```bash
yarn install
```

## Configurações por projeto

Após ter feito toda a configuração geral, cada projeto vai necessitar de alguns passos adicionais.

### Configurando o backend

1. Crie o arquivo `packages/backend/.env` baseados no arquivo [.env.example](./packages/backend/.env.example)

    - Em anexo ao email, também deixei o arquivo `.env` que utilizei para facilitar o preenchimento.

2. Acesse o Firebase e gere as credenciais para acesso ao projeto neste [link](https://console.firebase.google.com/u/0/project/hand-talk-challenge-52473/settings/serviceaccounts/adminsdk?hl=pt-br). Com o arquivo JSON gerado, copie ele para a pasta `packages/backend/cert` e renomeie-o para `firebase-credentials.json`.

    - Em anexo ao email, também deixei o arquivo `firebase-credentials.json` que utilizei para facilitar o preenchimento.

### Configurando o frontend

1. Crie o arquivo `packages/frontend/.env.local` baseados no arquivo [.env.example](./packages/frontend/.env.example)
    - Em anexo ao email, também deixei o arquivo `.env.local` que utilizei para facilitar o preenchimento.

### Configurando o plugin

1. Crie o arquivo `packages/plugin/analytics/.env` baseados no arquivo [.env.example](./packages/plugin/analytics/.env.example)
    - Em anexo ao email, também deixei o arquivo `.env` que utilizei para facilitar o preenchimento.

## Rodando o projeto

Agora que todos os preparativos foram feitos, você pode rodar o projeto pelo terminal. Para isso, basta estar na pasta principal do monorepo e usar o comando `yarn start` no terminal.

O monorepo já está configurado para que todos os 3 pacotes rodem em sincronia e fiquem observando a mudanças nos arquivos para realizar o "fast refresh" do projeto.

Cada projeto pode ser executado separadamente também, basta executar `yarn start` na pasta principal de cada pacote.

## Testando o Aplicativo

A aplicação utiliza a biblioteca jest para realizar os testes. Da mesma forma que o comando apra iniciar todos os pacotes juntos, para executar todos os testes da aplicação, basta rodar `yarn test` na pasta principal do monorepo.

## Criador

-   Leonardo Petta do Nascimento
-   <leonardocps9@gmail.com>
-   [Linkedin](https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/)
-   [Site Pessoal](https://www.leonardopetta.dev/)

## Licença

O projeto está licenciado sob a [Licença MIT](./LICENSE.md).
