import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/plugin/main.js"),
      fileName: "index",
      formats: ["cjs", 'es'],
    },
  },
});
