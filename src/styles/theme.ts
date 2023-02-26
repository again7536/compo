import { merge } from "lodash";

const getTheme = (isDark?: boolean) => {
  const theme = {
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

  if (isDark)
    return merge(theme, {
      colors: {
        background: theme.colors.black,
        text: "#e5e5e5",
        primary: theme.colors.melon,
        secondary: theme.colors.paleDogwood,
      },
    });

  return merge(theme, {
    background: theme.colors.white,
    text: "#000000",
    primary: theme.colors.melon,
    secondary: theme.colors.paleDogwood,
  });
};

export default getTheme;
