import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsConfigPaths(),
    eslint(),
  ],
}));
