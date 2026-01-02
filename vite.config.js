import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/", // カスタムドメインなら基本これでOK
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
            },
        },
    },
});
