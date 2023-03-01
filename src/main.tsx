import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "@/app";
import THEMES from "./styles/theme";
import globalStyle from "./styles/global";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={THEMES.light}>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </ThemeProvider>
  </StrictMode>
);
