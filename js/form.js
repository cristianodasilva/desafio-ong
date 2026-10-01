/* ==============================
   IMPORTAÇÃO DO STORAGE
   ============================== */
import {
    salvarDadosFormulario,
    carregarDadosFormulario
} from "./storage.js";

/* ==============================
   MÁSCARA DE CPF
   ============================== */
function aplicarMascaraCpf(campo) {
    let valor = campo.value.replace(
        /\D/g,
        ""
    );

    valor = valor.substring(
        0,
        11
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    campo.value = valor;
}

/* ==============================
   MÁSCARA DE TELEFONE
   ============================== */
function aplicarMascaraTelefone(campo) {
    let valor = campo.value.replace(
        /\D/g,
        ""
    );

    valor = valor.substring(
        0,
        11
    );

    if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{1,4})$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 2) {
       valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    }

    campo.value = valor;
}

/* ==============================
   MÁSCARA DE CEP
   ============================== */
function aplicarMascaraCep(campo) {
    let valor = campo.value.replace(
        /\D/g,
        ""
    );

    valor = valor.substring(
        0,
        8
    );

    if (valor.length > 5) {
        valor = valor.replace(
            /^(\d{5})(\d{1,3})$/,
            "$1-$2"
        );
    }

    campo.value = valor;
}

/* ==============================
   MENSAGEM DE ERRO
   ============================== */
function mostrarErro(campo, mensagem) {
    // As cores ficam no CSS (.campo-erro), para seguirem o tema.
    campo.classList.add(
        "campo-erro"
    );

    let mensagemErro = campo.parentElement.querySelector(
        ".mensagem-erro"
    );

    if (!mensagemErro) {
        mensagemErro = document.createElement(
            "small"
        );

        mensagemErro.className = "mensagem-erro";
        campo.parentElement.appendChild(
            mensagemErro
        );
    }

    mensagemErro.textContent = mensagem;
}

/* ==============================
   REMOVER ERRO
   ============================== */
function removerErro(campo) {
    campo.classList.remove(
        "campo-erro"
    );

    const mensagemErro = campo.parentElement.querySelector(
        ".mensagem-erro"
    );

    if (mensagemErro) {
        mensagemErro.remove();
    }
}

/* ==============================
   VALIDAÇÃO DO CAMPO
   ============================== */
function validarCampo(campo) {
    if (!campo) {
        return true;
    }

    const valor = campo.value.trim();

    // Campo obrigatório vazio.
    if (valor === "") {
        mostrarErro(
            campo,
            "Este campo é obrigatório."
        );

        return false;
    }

    // Validação do CPF.
    if (campo.id === "cpf") {
        const cpfValido =
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(
                valor
            );

        if (!cpfValido) {
            mostrarErro(
                campo,
                "Digite o CPF no formato correto."
            );

            return false;
        }
    }

    // Validação do telefone.
    if (campo.id === "telefone") {
        const telefoneValido =
            /^\(\d{2}\) \d{5}-\d{4}$/.test(
                valor
            );

        if (!telefoneValido) {
            mostrarErro(
                campo,
                "Digite o telefone no formato correto."
            );

            return false;
        }
    }

    // Validação do e-mail.
    if (campo.id === "email") {
        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                valor
            );

        if (!emailValido) {
            mostrarErro(
                campo,
                "Digite um e-mail válido."
            );

            return false;
        }
    }

    // Validação do CEP.
    if (campo.id === "cep") {
        const cepValido =
            /^\d{5}-\d{3}$/.test(
                valor
            );

        if (!cepValido) {
            mostrarErro(
                campo,
                "Digite o CEP no formato correto."
            );

            return false;
        }
    }

    removerErro(campo);

    return true;
}

/* ==============================
   VALIDAÇÃO DO FORMULÁRIO
   ============================== */
function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll(
        "input"
    );

    let formularioValido = true;

    let primeiroCampoComErro = null;

    campos.forEach((campo) => {
        const campoValido = validarCampo(
            campo
        );

        if (!campoValido) {
            formularioValido = false;

            if (!primeiroCampoComErro) {

                primeiroCampoComErro = campo;
            }
        }
    });

    if (primeiroCampoComErro) {
        primeiroCampoComErro.focus();
    }

    return formularioValido;
}


/* ==============================
   INICIALIZAÇÃO DO FORMULÁRIO
   ============================== */
export function inicializarFormulario() {
    const campoCpf = document.querySelector(
        "#cpf"
    );

    const campoTelefone = document.querySelector(
        "#telefone"
    );

    const campoCep = document.querySelector(
        "#cep"
    );

    const campoEmail = document.querySelector(
        "#email"
    );

    const campoNome = document.querySelector(
        "#nome"
    );

    const formulario = document.querySelector(
        "#formulario-voluntario"
    );

    if (!formulario) {
        return;
    }

    /* ==========================
       RESTAURA DADOS SALVOS
       ========================== */
    carregarDadosFormulario(
        formulario
    );

    /* ==========================
       NOME
       ========================== */
    if (campoNome) {

        campoNome.addEventListener(
            "input",
            () => {
                validarCampo(
                    campoNome
                );

                salvarDadosFormulario(
                    formulario
                );
            }
        );
    }

    /* ==========================
       CPF
       ========================== */
    if (campoCpf) {
        campoCpf.addEventListener(
            "input",
            () => {
                aplicarMascaraCpf(
                    campoCpf
                );

                validarCampo(
                    campoCpf
                );

                salvarDadosFormulario(
                    formulario
                );
            }
        );
    }

    /* ==========================
       TELEFONE
       ========================== */

    if (campoTelefone) {
        campoTelefone.addEventListener(
            "input",
            () => {
                aplicarMascaraTelefone(
                    campoTelefone
                );

                validarCampo(
                    campoTelefone
                );

                salvarDadosFormulario(
                    formulario
                );
            }
        );
    }

    /* ==========================
       E-MAIL
       ========================== */
    if (campoEmail) {
        campoEmail.addEventListener(
            "input",
            () => {
                validarCampo(
                    campoEmail
                );

                salvarDadosFormulario(
                    formulario
                );
            }
        );
    }

    /* ==========================
       CEP
       ========================== */
    if (campoCep) {
        campoCep.addEventListener(
            "input",
            () => {
                aplicarMascaraCep(
                    campoCep
                );

                validarCampo(
                    campoCep
                );

                salvarDadosFormulario(
                    formulario
                );
            }
        );
    }

    /* ==========================
       ENVIO DO FORMULÁRIO
       ========================== */
    formulario.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const formularioValido =
                validarFormulario(
                    formulario
                );

            if (!formularioValido) {
                return;
            }

            salvarDadosFormulario(
                formulario
            );

            const toast = document.querySelector(
                "#toast"
            );

            if (toast) {
                toast.classList.add(
                    "visivel"
                );

                setTimeout(() => {
                    toast.classList.remove(
                        "visivel"
                    );
                }, 3000);
            }
        }
    );
}