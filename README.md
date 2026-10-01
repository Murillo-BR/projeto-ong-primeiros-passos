# ONG Primeiros Passos

Projeto front-end desenvolvido durante o processo de aprendizagem em desenvolvimento web, com o objetivo de aplicar na prática conceitos de HTML, CSS e JavaScript.

A aplicação apresenta informações sobre a ONG fictícia Primeiros Passos, seus projetos e formas de participação. O projeto também foi utilizado para praticar conceitos como navegação SPA, manipulação do DOM, validação de formulários, armazenamento local e modularização do código JavaScript.

## Sobre o desenvolvimento

Este projeto representa uma etapa do meu processo de formação em desenvolvimento front-end. Durante sua construção, diferentes recursos foram implementados gradualmente, permitindo aplicar na prática os conteúdos estudados e compreender melhor a organização de uma aplicação web.

O projeto foi desenvolvido utilizando principalmente JavaScript puro (Vanilla JavaScript), sem o uso de frameworks JavaScript, permitindo praticar os fundamentos da linguagem e compreender o funcionamento das funcionalidades implementadas.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Navegação entre páginas no formato SPA (Single Page Application), sem necessidade de recarregar completamente a página.
- Exibição dinâmica dos projetos da ONG utilizando JavaScript e manipulação do DOM.
- Formulário de cadastro com validação dos campos.
- Aplicação de máscaras de preenchimento para telefone, CPF e CEP.
- Armazenamento temporário dos dados do formulário no navegador utilizando `localStorage`.
- Recuperação automática dos dados preenchidos caso o usuário saia da página e retorne posteriormente.
- Organização do código JavaScript em módulos separados de acordo com suas responsabilidades.

## Tecnologias utilizadas

- **HTML5** — estrutura e conteúdo das páginas.
- **CSS3** — estilização e organização visual da aplicação.
- **JavaScript (Vanilla JS)** — lógica da aplicação, manipulação do DOM e interações com o usuário.
- **History API** — utilizada na navegação SPA e no gerenciamento das rotas no navegador.
- **Web Storage API (`localStorage`)** — utilizada para salvar e recuperar temporariamente os dados do formulário.
- **ES6 Modules** — utilizados para dividir o código JavaScript em módulos por responsabilidade, utilizando `import` e `export`.
- **IMask** — biblioteca externa utilizada para aplicar máscaras nos campos de telefone, CPF e CEP.
- **Git e GitHub** — utilizados para controle de versão, organização das branches e gerenciamento da evolução do projeto.

## Estrutura do projeto

O código JavaScript foi organizado em módulos, separando as principais responsabilidades da aplicação:

- `script.js` — inicialização da aplicação.
- `routes.js` — gerenciamento das rotas e da navegação SPA.
- `projetos.js` — dados e renderização dos projetos apresentados na aplicação.
- `cadastro.js` — criação e configuração do formulário, validações, eventos e aplicação das máscaras.
- `storage.js` — armazenamento, recuperação e remoção dos dados do formulário no `localStorage`.

A modularização foi realizada utilizando ES6 Modules, com `import` e `export`.

## Como executar o projeto localmente

O projeto utiliza o Vite como ferramenta de desenvolvimento e build. Para executá-lo localmente:

1. Clone o repositório:

   git clone https://github.com/Murillo-BR/projeto-ong-primeiros-passos.git

2. Acesse a pasta do projeto:

   cd projeto-ong-primeiros-passos

3. Instale as dependências:

   npm install

4. Inicie o servidor de desenvolvimento:

   npm run dev

5. Acesse no navegador o endereço fornecido pelo Vite.

A biblioteca IMask continua sendo carregada por CDN para aplicação das máscaras nos campos do formulário.

## Build e testes

O projeto utiliza Vite para preparar a aplicação para produção. O comando:

    npm run build

gera a versão otimizada na pasta `dist`, incluindo a minificação dos recursos utilizados pela aplicação.

Para visualizar localmente a versão de produção gerada, pode ser utilizado:

    npm run preview

Durante o desenvolvimento, foram realizados testes manuais no navegador, incluindo navegação SPA, menu responsivo, navegação por teclado, formulário, validação dos campos, máscaras, persistência no `localStorage` e funcionamento das rotas.

A imagem principal também foi otimizada para produção, com conversão de PNG para WebP e adequação de sua resolução ao tamanho de exibição.

## Validação do código

Durante o desenvolvimento, os códigos HTML e CSS foram verificados utilizando as ferramentas de validação do W3C (World Wide Web Consortium).

A validação foi utilizada para identificar possíveis erros na estrutura do HTML e nas regras de CSS, contribuindo para a revisão e melhoria do código desenvolvido.

## Deploy

A aplicação está publicada na Vercel e integrada ao repositório GitHub.

A branch `master` é utilizada como fonte da versão de produção. Quando novas alterações são integradas a essa branch, a Vercel executa automaticamente um novo processo de build e deploy.

O arquivo `vercel.json` configura o redirecionamento necessário para o funcionamento das rotas da SPA em acessos diretos e atualizações de página.

Aplicação publicada:
https://projeto-ong-primeiros-passos.vercel.app/

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento do repositório e gerenciamento das alterações.

A organização do desenvolvimento foi baseada no fluxo GitFlow, utilizando diferentes branches de acordo com a finalidade das alterações:

- `master` — versão principal e estável do projeto.
- `develop` — branch utilizada para integrar alterações durante o desenvolvimento.
- `feature/*` — branches criadas para desenvolver alterações específicas antes de integrá-las à `develop`.

Durante o desenvolvimento, foram utilizadas branches como `feature/modularizacao`, `feature/documentacao-modulos` e `feature/readme`.

Os commits foram organizados utilizando o padrão Conventional Commits em alterações mais recentes, com mensagens como `docs: adiciona comentarios aos modulos`.

Também foram utilizados Issues, Milestones e Pull Requests no GitHub para registrar tarefas, organizar etapas do projeto e revisar a integração das alterações entre branches.

A primeira versão estável do projeto foi identificada pela tag `v1.0.0`, seguindo o padrão de versionamento semântico.