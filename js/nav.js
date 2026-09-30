/* ==============================
   INTERCEPTAÇÃO DOS LINKS
   ============================== */    
export function inicializarLinks() {
    document.addEventListener(
        "click",
        (event) => {
            const link = event.target.closest(
                "a[data-rota]"
            );

            if (!link) {
                return;
            }

            event.preventDefault();

            const endereco = link.getAttribute(
                "href"
            );

            // Altera a URL. A mudança dispara o evento hashchange.
            window.location.hash = endereco;
        }
    );
}

/* ==============================
   IDENTIFICAÇÃO DA ROTA
   ============================== */
export function obterRota() {
    const hash = window.location.hash;

    // Quando não existe uma rota,
    // consideramos que o usuário está na página inicial.
    if (!hash || hash === "#/") {
        return "/";
    }

    // Remove o primeiro "#".
    const rota = hash
        .substring(1)
        .split("#")[0];

    return rota;
}

/* ==============================
   MENU HAMBÚRGUER
   ============================== */
export function inicializarMenu() {
    const menuToggle = document.querySelector(
        ".menu-toggle"
    );

    const header = document.querySelector(
        "header"
    );

    if (!menuToggle || !header) {
        return;
    }

    menuToggle.addEventListener(
        "click",
        () => {
            const menuAberto = header.classList.toggle(
                "menu-aberto"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );
        }
    );
}

/* ==============================
   DROPDOWN DE PROJETOS
   ============================== */
export function inicializarDropdown() {
    const dropdown = document.querySelector(
        ".dropdown"
    );

    const dropdownToggle = document.querySelector(
        ".dropdown-toggle"
    );

    if (!dropdownToggle || !dropdown) {
        return;
    }

    dropdownToggle.addEventListener(
        "click",
        () => {
            const dropdownAberto =
                dropdown.classList.toggle(
                    "aberto"
                );

            dropdownToggle.setAttribute(
                "aria-expanded",
                dropdownAberto
            );
        }
    );
}