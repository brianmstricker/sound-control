import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
 plugins: [react()],
 build: {
  outDir: "dist",
  rollupOptions: {
   input: {
    index: resolve(__dirname, "index.html"),
    background: resolve(__dirname, "src/background.ts"),
   },
   output: {
    entryFileNames: "[name].js",
   },
  },
 },
});
