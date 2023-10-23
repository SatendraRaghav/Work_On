// vite.config.ts
import * as path from "path";
import react from "file:///C:/Users/Prakhar/Desktop/Hyperform3/incentivo/frontend/user_Interface/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Prakhar/Desktop/Hyperform3/incentivo/frontend/user_Interface/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///C:/Users/Prakhar/Desktop/Hyperform3/incentivo/frontend/user_Interface/node_modules/vite-plugin-pwa/dist/index.js";

// manifest.json
var manifest_default = {
  name: "Hyperform ",
  short_name: "Hyperform",
  description: "powdered by ImpaktApps",
  theme_color: "#ffffff",
  icons: [
    {
      src: "hyperformLogo192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "hyperformLogo512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "hyperformLogo512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\Prakhar\\Desktop\\Hyperform3\\incentivo\\frontend\\user_Interface";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest_default,
      devOptions: {
        enabled: false
        /* other options */
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
        navigateFallback: "/index.html"
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    chunkSizeWarningLimit: 1600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFByYWtoYXJcXFxcRGVza3RvcFxcXFxIeXBlcmZvcm0zXFxcXGluY2VudGl2b1xcXFxmcm9udGVuZFxcXFx1c2VyX0ludGVyZmFjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUHJha2hhclxcXFxEZXNrdG9wXFxcXEh5cGVyZm9ybTNcXFxcaW5jZW50aXZvXFxcXGZyb250ZW5kXFxcXHVzZXJfSW50ZXJmYWNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QcmFraGFyL0Rlc2t0b3AvSHlwZXJmb3JtMy9pbmNlbnRpdm8vZnJvbnRlbmQvdXNlcl9JbnRlcmZhY2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgbWFuaWZlc3QsXHJcbiAgICAgIGRldk9wdGlvbnM6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAvKiBvdGhlciBvcHRpb25zICovXHJcbiAgICAgIH0sXHJcbiAgICAgIHdvcmtib3g6IHtcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFtcIioqLyoue2pzLGNzcyxodG1sfVwiLCBcIioqLyoue3N2ZyxwbmcsanBnLGdpZn1cIl0sXHJcbiAgICAgICAgbmF2aWdhdGVGYWxsYmFjazogXCIvaW5kZXguaHRtbFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNjAwLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAie1xyXG4gIFwibmFtZVwiOiBcIkh5cGVyZm9ybSBcIixcclxuICBcInNob3J0X25hbWVcIjogXCJIeXBlcmZvcm1cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwicG93ZGVyZWQgYnkgSW1wYWt0QXBwc1wiLFxyXG4gIFwidGhlbWVfY29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgXCJpY29uc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwic3JjXCI6IFwiaHlwZXJmb3JtTG9nbzE5Mi5wbmdcIixcclxuICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwic3JjXCI6IFwiaHlwZXJmb3JtTG9nbzUxMi5wbmdcIixcclxuICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwic3JjXCI6IFwiaHlwZXJmb3JtTG9nbzUxMi5wbmdcIixcclxuICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIFwicHVycG9zZVwiOiBcImFueSBtYXNrYWJsZVwiXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVosWUFBWSxVQUFVO0FBQ3ZhLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7OztBQ0h4QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsWUFBYztBQUFBLEVBQ2QsYUFBZTtBQUFBLEVBQ2YsYUFBZTtBQUFBLEVBQ2YsT0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLEtBQU87QUFBQSxNQUNQLE9BQVM7QUFBQSxNQUNULE1BQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBTztBQUFBLE1BQ1AsT0FBUztBQUFBLE1BQ1QsTUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFPO0FBQUEsTUFDUCxPQUFTO0FBQUEsTUFDVCxNQUFRO0FBQUEsTUFDUixTQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjs7O0FEdkJBLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUE7QUFBQSxNQUVYO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsc0JBQXNCLHdCQUF3QjtBQUFBLFFBQzdELGtCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
