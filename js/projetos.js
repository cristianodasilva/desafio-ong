/* ==============================
   DADOS DOS PROJETOS
   ============================== */
const projetos = [
    {
        nome: "Projeto Alimentar",
        descricao:
            "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade."
    },
    {
        nome: "Projeto Educação",
        descricao:
            "Ações voltadas para educação e capacitação de crianças e jovens."
    },
    {
        nome: "Projeto Comunidade",
        descricao:
            "Campanhas e ações sociais realizadas junto à comunidade."
    }
];

/* ==============================
   TEMPLATE DOS PROJETOS
   ============================== */
function criarProjeto(projeto) {
    return `
        <article>
            <h3>${projeto.nome}</h3>

            <span class="badge">
                Projeto ativo
            </span>

            <p>
                ${projeto.descricao}
            </p>
        </article>
    `;
}

/* ==============================
   RENDERIZAÇÃO DOS PROJETOS
   ============================== */
export function renderizarProjetos() {
    const listaProjetos = document.querySelector(
        "#lista-projetos"
    );

    if (!listaProjetos) {
        return;
    }

    listaProjetos.innerHTML = projetos
        .map(criarProjeto)
        .join("");
}