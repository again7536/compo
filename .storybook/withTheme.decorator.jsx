import { Global, ThemeProvider } from "@emotion/react";
import THEMES from "../src/styles/theme";
import globalStyle from "../src/styles/global";

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  // <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
  return (
    <ThemeProvider theme={THEMES.light}>
      <Story />
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
};
