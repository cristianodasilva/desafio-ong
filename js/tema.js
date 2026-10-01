/* ==============================
   TEMA (CLARO / ESCURO / ALTO CONTRASTE)
   ============================== */
const chaveTema = "ongEsperancaTema";

// "automatico" segue as configurações do sistema operacional.
const preferenciasValidas = [
    "automatico",
    "claro",
    "escuro",
    "alto-contraste"
];

const mediaEscuro = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

const mediaContraste = window.matchMedia(
    "(prefers-contrast: more)"
);

/* ==============================
   PREFERÊNCIA SALVA
   ============================== */
function lerPreferencia() {
    try {
        const salva = localStorage.getItem(
            chaveTema
        );

        if (preferenciasValidas.includes(salva)) {
            return salva;
        }
    } catch (erro) {
        // localStorage pode estar bloqueado (modo privado, etc.).
        console.error(
            "Não foi possível ler o tema salvo.",
            erro
        );
    }

    return "automatico";
}

function salvarPreferencia(preferencia) {
    try {
        localStorage.setItem(
            chaveTema,
            preferencia
        );
    } catch (erro) {
        console.error(
            "Não foi possível salvar o tema.",
            erro
        );
    }
}

/* ==============================
   APLICAÇÃO DO TEMA
   ============================== */
function resolverTema(preferencia) {
    if (preferencia !== "automatico") {
        return preferencia;
    }

    if (mediaContraste.matches) {
        return "alto-contraste";
    }

    if (mediaEscuro.matches) {
        return "escuro";
    }

    return "claro";
}

function aplicarTema(preferencia) {
    document.documentElement.dataset.tema =
        resolverTema(
            preferencia
        );
}

/* ==============================
   INICIALIZAÇÃO DO SELETOR
   ============================== */
export function inicializarTema() {
    const seletor = document.querySelector(
        "#seletor-tema"
    );

    const preferencia = lerPreferencia();

    aplicarTema(
        preferencia
    );

    if (seletor) {
        seletor.value = preferencia;

        seletor.addEventListener(
            "change",
            () => {
                salvarPreferencia(
                    seletor.value
                );

                aplicarTema(
                    seletor.value
                );
            }
        );
    }

    // No modo automático, acompanha mudanças do sistema
    // enquanto a página estiver aberta.
    const acompanharSistema = () => {
        if (lerPreferencia() === "automatico") {
            aplicarTema(
                "automatico"
            );
        }
    };

    mediaEscuro.addEventListener(
        "change",
        acompanharSistema
    );

    mediaContraste.addEventListener(
        "change",
        acompanharSistema
    );
}
