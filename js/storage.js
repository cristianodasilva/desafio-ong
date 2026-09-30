/* ==============================
   LOCALSTORAGE
   ============================== */
const chaveCadastro = "ongEsperancaCadastro";

/* ==============================
   SALVAR DADOS
   ============================== */
export function salvarDadosFormulario(formulario) {
    const dados = {
        nome: formulario.querySelector(
            "#nome"
        )?.value || "",

        cpf: formulario.querySelector(
            "#cpf"
        )?.value || "",

        telefone: formulario.querySelector(
            "#telefone"
        )?.value || "",

        email: formulario.querySelector(
            "#email"
        )?.value || "",

        cep: formulario.querySelector(
            "#cep"
        )?.value || ""
    };

    const dadosString = JSON.stringify(
        dados
    );

    localStorage.setItem(
        chaveCadastro,
        dadosString
    );
}

/* ==============================
   CARREGAR DADOS
   ============================== */
export function carregarDadosFormulario(formulario) {
    const dadosString = localStorage.getItem(
        chaveCadastro
    );

    if (!dadosString) {
        return;
    }

    try {
        const dados = JSON.parse(
            dadosString
        );

        const campoNome = formulario.querySelector(
            "#nome"
        );

        const campoCpf = formulario.querySelector(
            "#cpf"
        );

        const campoTelefone = formulario.querySelector(
            "#telefone"
        );

        const campoEmail = formulario.querySelector(
            "#email"
        );

        const campoCep = formulario.querySelector(
            "#cep"
        );

        if (campoNome) {
            campoNome.value = dados.nome || "";
        }

        if (campoCpf) {
            campoCpf.value = dados.cpf || "";
        }

        if (campoTelefone) {
            campoTelefone.value = dados.telefone || "";
        }

        if (campoEmail) {
            campoEmail.value = dados.email || "";
        }

        if (campoCep) {
            campoCep.value = dados.cep || "";
        }

    } catch (erro) {
        console.error(
            "Não foi possível recuperar os dados salvos.",
            erro
        );
    }
}