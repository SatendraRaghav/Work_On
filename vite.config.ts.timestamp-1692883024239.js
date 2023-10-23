// vite.config.ts
import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

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
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest_default,
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
        navigateFallback: "/fallback.html"
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("C:\\Users\\Satendra_Raghav\\Projects\\CompanyProject\\old\\Work_On", "./src")
    }
  },
  build: {
    chunkSizeWarningLimit: 1600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0Lmpzb25cIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICBtYW5pZmVzdCxcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIC8qIG90aGVyIG9wdGlvbnMgKi9cclxuICAgICAgfSxcclxuICAgICAgd29ya2JveDoge1xyXG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57anMsY3NzLGh0bWx9XCIsIFwiKiovKi57c3ZnLHBuZyxqcGcsZ2lmfVwiXSxcclxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiBcIi9mYWxsYmFjay5odG1sXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxVc2Vyc1xcXFxTYXRlbmRyYV9SYWdoYXZcXFxcUHJvamVjdHNcXFxcQ29tcGFueVByb2plY3RcXFxcb2xkXFxcXFdvcmtfT25cIiwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNjAwLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFFWDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsY0FBYyxDQUFDLHNCQUFzQix3QkFBd0I7QUFBQSxRQUM3RCxrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxzRUFBc0UsT0FBTztBQUFBLElBQ2pHO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
