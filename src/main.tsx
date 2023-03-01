import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, Global } from "@emotion/react";
import { App } from "@/app";
import "./index.css";
import THEMES from "./styles/theme";
import globalStyle from "./styles/global";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <ThemeProvider theme={THEMES.light}>
      <App />
      <Global styles={globalStyle} />
    </ThemeProvider>
  </StrictMode>
);
