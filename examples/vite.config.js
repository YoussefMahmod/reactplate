import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // legacy({
    //   targets: ["Chrome >= 49", "not IE 11"],
    //   polyfills: ["es/promise"],
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    // }),
    VitePWA({
      strategies: "generateSW",
      registerType: "prompt",
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: undefined,
      },
      manifest: {
        name: "App",
        short_name: "App",
        display: "fullscreen",
        theme_color: "#FFFFFF",
        icons: [
          {
            src: "/src/assets/img/Reactplate.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./src/components"),
      "%": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
});
