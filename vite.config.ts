import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
//@ts-ignore
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   manifest,
    //   devOptions: {
    //     enabled: false,
    //     /* other options */
    //   },
    //   workbox: {
    //     globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
    //     navigateFallback: "/fallback.html",
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
