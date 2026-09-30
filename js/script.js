/* ==============================
   IMPORTAÇÃO DOS MÓDULOS
   ============================== */    
import {
    inicializarLinks,
    obterRota,
    inicializarMenu,
    inicializarDropdown
} from "./nav.js";

import {
    renderizarProjetos
} from "./projetos.js";

import {
    inicializarFormulario
} from "./form.js";

/* ==============================
   ROTEAMENTO DA SPA
   ============================== */
const app = document.querySelector(
    "#app"
);

const rotas = {
    "/projetos": "projetos.html",
    "/cadastro": "cadastro.html"
};

// Guarda o conteúdo original da página inicial.
// Será restaurado quando o usuário voltar para "/".
const conteudoInicio = app
    ? app.innerHTML
    : "";

/* ==============================
   NAVEGAÇÃO
   ============================== */
async function navegar(rota) {
    if (!app) {
        return;
    }

    /* ==========================
       PÁGINA INICIAL
       ========================== */
    if (rota === "/") {
        app.innerHTML = conteudoInicio;

        return;
    }

    /* ==========================
       PÁGINAS INTERNAS
       ========================== */
    const arquivo = rotas[rota];

    if (!arquivo) {
        return;
    }

    try {
        const resposta = await fetch(
            arquivo
        );

        if (!resposta.ok) {
            throw new Error(
                `Erro ao carregar ${arquivo}`
            );
        }

        const html = await resposta.text();

        const documento = new DOMParser().parseFromString(
            html,
            "text/html"
        );

        const novoConteudo = documento.querySelector(
            "main"
        );

        if (!novoConteudo) {
            throw new Error(
                "Conteúdo principal não encontrado."
            );
        }

        // Substitui o conteúdo atual pelo conteúdo
        // da página selecionada.
        app.innerHTML = novoConteudo.innerHTML;

        // Inicializa novamente os recursos
        // do conteúdo que acabou de entrar no DOM.
        inicializarFormulario();

        // Gera os projetos quando a página
        // de projetos for carregada.
        renderizarProjetos();


        /* ==========================
           NAVEGAÇÃO PARA UMA SEÇÃO
           ========================== */
        const hash = window.location.hash;

        const partes = hash.split("#");

        if (partes.length > 2) {
            const id = partes[2];

            const elemento = document.getElementById(
                id
            );

            if (elemento) {
                elemento.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    } catch (erro) {
        console.error(
            erro
        );

        app.innerHTML = `
            <section class="container">

                <h2>Erro ao carregar conteúdo</h2>

                <p>
                    Não foi possível carregar esta página.
                </p>

            </section>
        `;
    }
}

/* ==============================
   ALTERAÇÃO DA ROTA
   ============================== */
window.addEventListener(
    "hashchange",
    () => {
        const rota = obterRota();

        // Carrega a página correspondente à rota.
        navegar(
            rota
        );
    }
);

/* ==============================
   INICIALIZAÇÃO
   ============================== */
inicializarLinks();

inicializarMenu();

inicializarDropdown();

// Carrega a rota atual ao abrir a aplicação.
navegar(
    obterRota()
);