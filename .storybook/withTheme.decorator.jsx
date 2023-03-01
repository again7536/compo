import { Global, ThemeProvider } from "@emotion/react";
import THEMES from "../src/styles/theme";
import globalStyle from "../src/styles/global";
import { HashRouter, Route, Routes } from "react-router-dom";

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["light"]}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Story />}></Route>
        </Routes>
      </HashRouter>
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
};
