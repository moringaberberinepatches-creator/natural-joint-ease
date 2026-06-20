import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: { transformer: "lightningcss" },
  plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html",
    },
  },
});