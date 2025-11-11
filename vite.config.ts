import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 🔹 ВАЖНО для GitHub Pages:
  base: "/",   // так как у тебя КАСТОМНЫЙ ДОМЕН spb-dsremont.ru
  build: {
    outDir: "dist", // стандартный каталог для билда
    emptyOutDir: true, // очищает dist перед новым билдом
  },
}));
