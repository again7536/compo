import { merge } from "lodash";

const baseTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#202020",
    melon: "#FEC5BB",
    paleDogwood: "#FCD5CE",
    mistyTree: "#FAE1DD",
    seaShell: "#F8EDEB",
    platinum1: "#E8E8E4",
    platinum2: "#D8E2DC",
    linen: "#ECE4DB",
    champagnePink: "#FFE5D9",
    apricot: "#FFD7BA",
    peach: "#FEC89A",
  },
  fonts: {
    logo: "Pacifico",
    body: "Sarabun",
    menu: "Montserrat",
  },
};

const THEMES = {
  light: merge(baseTheme, {
    background: baseTheme.colors.white,
    text: "#000000",
    primary: baseTheme.colors.melon,
    secondary: baseTheme.colors.paleDogwood,
  }),
  dark: merge(baseTheme, {
    colors: {
      background: baseTheme.colors.black,
      text: "#e5e5e5",
      primary: baseTheme.colors.melon,
      secondary: baseTheme.colors.paleDogwood,
    },
  }),
};

export default THEMES.light;
