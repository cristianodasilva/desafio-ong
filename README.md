# ONG Esperança

Projeto desenvolvido para uma ONG fictícia chamada **ONG Esperança**, com o objetivo de apresentar suas ações, projetos e permitir o cadastro de usuários interessados.

## Apresentação do projeto

A aplicação apresenta informações sobre a ONG Esperança e suas principais áreas de atuação. O projeto possui páginas para apresentação da organização, visualização dos projetos e cadastro de usuários.

O desenvolvimento foi realizado utilizando tecnologias web básicas, com foco em organização do código, responsividade, acessibilidade e boas práticas de desenvolvimento.

## Funcionalidades

* Página inicial com apresentação da ONG.
* Seção com informações sobre a organização.
* Página de projetos e iniciativas da ONG.
* Cadastro de usuários através de formulário.
* Validação dos campos do formulário.
* Máscaras e orientações para preenchimento dos campos.
* Armazenamento de dados utilizando `localStorage`.
* Navegação responsiva com menu adaptado para diferentes tamanhos de tela.
* Elementos dinâmicos utilizando JavaScript.
* Recursos de acessibilidade para facilitar a navegação.

## Tecnologias utilizadas

* **HTML5** — estrutura e organização semântica das páginas.
* **CSS3** — estilização, responsividade, Grid, Flexbox e design system.
* **JavaScript** — interações, validações, navegação e manipulação de dados.
* **LocalStorage** — armazenamento de informações no navegador.
* **Git** — controle de versão.
* **GitHub** — hospedagem do repositório e gerenciamento do desenvolvimento.

## Estrutura do projeto

```text
DESAFIO-ONG/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── img/
│   └── imagens do projeto
├── js/
│   ├── form.js
│   ├── nav.js
│   ├── projetos.js
│   ├── script.js
│   └── storage.js
├── .gitignore
└── README.md
```

## Pré-requisitos

Para executar o projeto são necessários:

* Navegador atualizado, como Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.
* Editor de código, como Visual Studio Code.
* Git, caso o projeto seja obtido através do repositório.

O projeto não possui dependências externas obrigatórias e não utiliza Node.js ou npm.

## Instalação

Clone o repositório utilizando o Git:

```bash
git clone https://github.com/cristianodasilva/desafio-ong.git
```

Entre na pasta do projeto:

```bash
cd desafio-ong
```

Como o projeto utiliza HTML, CSS e JavaScript sem um gerenciador de pacotes, não é necessário executar `npm install`.

## Execução

O projeto pode ser executado diretamente pelo navegador.

Durante o desenvolvimento, recomenda-se utilizar o **Live Server** no Visual Studio Code para iniciar um servidor local e facilitar a visualização das páginas.

A página inicial está localizada em:

```text
html/index.html
```

Também é possível acessar diretamente:

```text
html/projetos.html
html/cadastro.html
```

## Build

O projeto atualmente não utiliza uma ferramenta de build ou empacotamento, como Vite, Webpack ou outra solução baseada em Node.js.

Por esse motivo, não existe um comando `npm run build`. Os arquivos HTML, CSS e JavaScript são utilizados diretamente pelo navegador.

## Testes

A validação do projeto foi realizada manualmente durante o desenvolvimento, utilizando o navegador e o Live Server.

Foram verificados:

* Navegação entre as páginas.
* Funcionamento do menu responsivo.
* Funcionamento do formulário de cadastro.
* Validação dos campos obrigatórios.
* Formatação e orientações dos campos.
* Persistência dos dados no `localStorage`.
* Exibição dos projetos.
* Responsividade em diferentes tamanhos de tela.
* Navegação por teclado e recursos de acessibilidade.

## Acessibilidade

Foram implementadas melhorias de acessibilidade nas páginas do projeto, considerando boas práticas e referências da **WCAG 2.1**.

Entre as melhorias realizadas estão:

* Link para pular diretamente ao conteúdo principal.
* Uso de elementos HTML semânticos.
* Identificação das áreas principais da página.
* Atributos ARIA em elementos interativos.
* Identificação dos menus de navegação.
* Suporte à navegação por teclado.
* Uso de `aria-live` em conteúdo atualizado dinamicamente.
* Orientações adicionais nos campos do formulário.
* Uso de atributos `autocomplete` quando aplicável.

## Git e GitHub

O projeto utiliza Git para controle de versão e GitHub para hospedagem do repositório.

Foi adotado um fluxo baseado no **GitFlow**, utilizando:

* `main` — versão estável do projeto.
* `develop` — branch principal de desenvolvimento.
* `feature/*` — branches destinadas ao desenvolvimento de novas funcionalidades ou melhorias.

Também foram utilizados **Conventional Commits**, Issues, Milestones e Pull Requests para organizar o desenvolvimento.

### Repositório

O código-fonte do projeto está disponível no GitHub:

https://github.com/cristianodasilva/desafio-ong
