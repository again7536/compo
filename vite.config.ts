import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        presets: [
          ["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }],
        ],
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsConfigPaths(),
    eslint(),
  ],
}));
