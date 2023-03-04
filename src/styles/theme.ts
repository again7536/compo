import { Theme } from "@emotion/react";
import { merge } from "lodash";
import { createTheme } from "styled-breakpoints";

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
  size: {
    1: "10pt",
    2: "12pt",
    3: "14pt",
    4: "18pt",
    5: "22pt",
    6: "30pt",
    7: "64pt",
    8: "102pt",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
    xxxl: "1920px",
  },
  container: {
    xs: "100%",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
    xxxl: "1920px",
  },
};

// for styled-breakpoint
createTheme(baseTheme.breakpoints);

const THEMES: { light: Theme; dark: Theme } = {
  light: merge(baseTheme, {
    colors: {
      background: baseTheme.colors.white,
      text: "#000000",
      primary: baseTheme.colors.melon,
      secondary: baseTheme.colors.paleDogwood,
    },
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

export default THEMES;
