import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Inspect from "vite-plugin-inspect";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    viteCompression({ algorithm: "gzip" }), // Habilita Gzip
    viteCompression({ algorithm: "brotliCompress" }), // Habilita Brotli
  ],
});
