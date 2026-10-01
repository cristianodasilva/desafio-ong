import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
        server: {
        open: "/html/index.html"
    },
    build: {
        rollupOptions: {
            input: {
                index: fileURLToPath(
                    new URL(
                        "./html/index.html",
                        import.meta.url
                    )
                ),
                projetos: fileURLToPath(
                    new URL(
                        "./html/projetos.html",
                        import.meta.url
                    )
                ),
                cadastro: fileURLToPath(
                    new URL(
                        "./html/cadastro.html",
                        import.meta.url
                    )
                )
            }
        }
    }
});
