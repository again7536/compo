import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";
import THEMES from "./styles/theme";
import globalStyle from "./styles/global";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
