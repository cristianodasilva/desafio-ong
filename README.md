# ONG Esperança

Projeto desenvolvido para uma ONG fictícia chamada **ONG Esperança**, com o objetivo de apresentar suas ações, projetos e permitir o cadastro de usuários interessados.

## Apresentação do projeto

A aplicação apresenta informações sobre a ONG Esperança e suas principais áreas de atuação. O projeto possui páginas para apresentação da organização, visualização dos projetos e cadastro de usuários.

O desenvolvimento foi realizado utilizando tecnologias web básicas, com foco em organização do código, responsividade, acessibilidade e boas práticas de desenvolvimento. O **Vite** é utilizado como servidor de desenvolvimento e ferramenta de build.

## Funcionalidades

* Página inicial com apresentação da ONG.
* Seção com informações sobre a organização.
* Página de projetos e iniciativas da ONG.
* Cadastro de usuários através de formulário.
* Validação dos campos do formulário.
* Máscaras e orientações para preenchimento dos campos.
* Armazenamento de dados utilizando `localStorage`.
* Navegação responsiva com menu adaptado para diferentes tamanhos de tela.
* Seletor de tema com modo claro, modo escuro e modo de alto contraste, que respeita as preferências do sistema e guarda a escolha do usuário.
* Elementos dinâmicos utilizando JavaScript.
* Recursos de acessibilidade para facilitar a navegação.

## Tecnologias utilizadas

* **HTML5** — estrutura e organização semântica das páginas.
* **CSS3** — estilização, responsividade, Grid, Flexbox, design system e temas com variáveis CSS.
* **JavaScript** — interações, validações, navegação, troca de tema e manipulação de dados.
* **LocalStorage** — armazenamento de informações no navegador, como os dados do formulário e a preferência de tema.
* **Vite** — servidor de desenvolvimento e empacotamento (build) do projeto.
* **Node.js e npm** — ambiente de execução e gerenciador de pacotes, necessários para rodar o Vite.
* **Git** — controle de versão.
* **GitHub** — hospedagem do repositório e gerenciamento do desenvolvimento.
* **Vercel** — publicação (deploy) do site online.

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
│   └── voluntarios.jpg
├── js/
│   ├── form.js
│   ├── nav.js
│   ├── projetos.js
│   ├── script.js
│   ├── storage.js
│   └── tema.js
├── .gitignore
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

As pastas `node_modules/` (dependências) e `dist/` (resultado do build) são geradas automaticamente e não fazem parte do repositório.

## Pré-requisitos

Para executar o projeto são necessários:

* **Node.js** (versão LTS recente) e **npm**, que já vem junto com o Node.js. Download em https://nodejs.org
* Navegador atualizado, como Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.
* Editor de código, como Visual Studio Code.
* Git, caso o projeto seja obtido através do repositório.

Para conferir se o Node.js e o npm estão instalados:

```bash
node -v
npm -v
```

## Instalação

Clone o repositório utilizando o Git:

```bash
git clone https://github.com/cristianodasilva/desafio-ong.git
```

Entre na pasta do projeto:

```bash
cd desafio-ong
```

Instale as dependências:

```bash
npm install
```

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O navegador abrirá automaticamente em `http://localhost:5173/html/index.html`. Caso não abra, acesse esse endereço manualmente.

Como o `index.html` fica dentro da pasta `html/` e não na raiz do projeto, o endereço `http://localhost:5173/` sozinho retorna erro 404. Por isso o `vite.config.js` define a opção `server.open`, que abre a página correta automaticamente.

Também é possível acessar diretamente:

```text
http://localhost:5173/html/projetos.html
http://localhost:5173/html/cadastro.html
```

> As páginas de projetos e de cadastro são carregadas dentro da página inicial pela navegação da aplicação. Quando abertas diretamente, são exibidas sem o cabeçalho e sem o seletor de tema, sempre no tema claro.

## Build

Para gerar a versão otimizada do projeto para produção:

```bash
npm run build
```

Os arquivos são gerados na pasta `dist/`, com CSS e JavaScript minificados e imagens processadas. Os três arquivos HTML (`index`, `projetos` e `cadastro`) ficam em `dist/html/`.

Para testar o resultado do build localmente:

```bash
npm run preview
```

Depois, acesse `http://localhost:4173/html/index.html`.

### Configuração do Vite

O arquivo `vite.config.js` possui duas configurações principais:

* `server.open` — abre o navegador diretamente em `/html/index.html` ao rodar `npm run dev`.
* `build.rollupOptions.input` — informa ao Vite os três arquivos HTML do projeto, já que nenhum deles está na raiz.

Nos arquivos HTML, os caminhos de CSS, JavaScript e imagens partem da raiz do projeto, e os scripts utilizam `type="module"`:

```html
<link rel="stylesheet" href="/css/style.css">
<script type="module" src="/js/script.js"></script>
```

### Scripts disponíveis

| Comando           | Descrição                                           |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento.               |
| `npm run build`   | Gera a versão de produção na pasta `dist/`.         |
| `npm run preview` | Executa localmente a versão gerada pelo build.      |

## Deploy

O projeto está publicado na Vercel e pode ser acessado em:

https://desafio-ong.vercel.app

A Vercel executa automaticamente `npm install` e `npm run build` a cada push na branch `develop`, e publica o conteúdo da pasta `dist/`.

Como o `index.html` fica em `dist/html/` e não na raiz, o arquivo `vercel.json` redireciona o endereço principal (`/`) para `/html/index.html`:

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "/html/index.html",
      "permanent": false
    }
  ]
}
```

## Testes

A validação do projeto foi realizada manualmente durante o desenvolvimento, utilizando o navegador e o servidor de desenvolvimento do Vite (`npm run dev`), além de conferir o resultado do build com `npm run preview`.

Foram verificados:

* Navegação entre as páginas.
* Funcionamento do menu responsivo.
* Funcionamento do formulário de cadastro.
* Validação dos campos obrigatórios.
* Formatação e orientações dos campos.
* Persistência dos dados no `localStorage`.
* Exibição dos projetos.
* Troca entre os temas claro, escuro e alto contraste em todas as páginas.
* Persistência do tema escolhido ao recarregar a página.
* Comportamento do modo automático com o tema do sistema em claro e em escuro.
* Responsividade em diferentes tamanhos de tela.
* Navegação por teclado e recursos de acessibilidade.
* Geração do build sem erros e funcionamento da versão gerada.
* Navegação e funcionamento do site publicado na Vercel.

## Temas

A aplicação possui um seletor de tema, representado por um ícone de círculo meio preenchido no canto superior direito do cabeçalho. Ao clicar nele, é possível escolher entre:

* **Automático** — segue as configurações do sistema operacional (`prefers-color-scheme` e `prefers-contrast`). É a opção padrão.
* **Claro**
* **Escuro**
* **Alto contraste**

A escolha é salva no `localStorage` (chave `ongEsperancaTema`) e mantida nos próximos acessos. No modo automático, a aplicação também acompanha mudanças no tema do sistema enquanto está aberta.

### Como funciona

* As cores ficam em variáveis CSS no arquivo `css/style.css`. O tema claro é o padrão (`:root`), e os temas escuro e alto contraste redefinem as mesmas variáveis nos blocos `[data-tema="escuro"]` e `[data-tema="alto-contraste"]`.
* O tema ativo é indicado pelo atributo `data-tema` no elemento `<html>`.
* O arquivo `js/tema.js` lê a preferência, aplica o tema, salva a escolha e acompanha o sistema.
* Um pequeno script no `<head>` do `html/index.html` aplica o tema antes de a página ser exibida, evitando o "flash" do tema claro.
* Duas variáveis merecem atenção ao criar ou alterar temas: `--cor-texto-destaque`, usada no texto sobre botões, badge e toast, e as variáveis `--cor-cabecalho-*`, usadas no cabeçalho e no menu do celular.

### Como alterar as cores ou criar um novo tema

1. Em `css/style.css`, crie um bloco `[data-tema="nome-do-tema"]` redefinindo as mesmas variáveis dos temas existentes.
2. Em `html/index.html`, adicione a nova opção ao `<select id="seletor-tema">`.
3. Inclua o nome do tema na lista `preferenciasValidas` do `js/tema.js` e na lista do script do `<head>` do `html/index.html`.
4. Confira a razão de contraste das novas cores antes de usá-las (veja a seção de acessibilidade).

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
* Modo escuro e modo de alto contraste, com paletas conferidas pela razão de contraste da WCAG 2.1: no mínimo 4,5:1 para textos e 3:1 para bordas de campos e indicadores de foco.
* Respeito às preferências de tema e de contraste definidas no sistema operacional.
* Seletor de tema com rótulo para leitores de tela e operável por teclado.
* Indicador de foco visível em links, botões, campos e no seletor de tema, inclusive sobre o cabeçalho.
* Mensagens e destaques de erro do formulário com cores que acompanham o tema ativo.

## Git e GitHub

O projeto utiliza Git para controle de versão e GitHub para hospedagem do repositório.

Foi adotado um fluxo baseado no **GitFlow**, utilizando:

* `main` — versão estável do projeto.
* `develop` — branch principal de desenvolvimento.
* `feature/*` — branches destinadas ao desenvolvimento de novas funcionalidades ou melhorias.

Também foram utilizados **Conventional Commits**, Issues, Milestones e Pull Requests para organizar o desenvolvimento.

O arquivo `.gitignore` deve incluir `node_modules/` e `dist/`, pois são pastas geradas automaticamente. Já o `package.json` e o `package-lock.json` devem ser versionados.

### Repositório

O código-fonte do projeto está disponível no GitHub:

https://github.com/cristianodasilva/desafio-ong
