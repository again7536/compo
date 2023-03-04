import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {
    colors: {
      white: string;
      black: string;
      background: string;
      text: string;

      melon: string;
      paleDogwood: string;
      mistyTree: string;
      seaShell: string;
      platinum1: string;
      platinum2: string;
      linen: string;
      champagnePink: string;
      apricot: string;
      peach: string;
    };
    fonts: {
      logo: string;
      body: string;
      menu: string;
    };
    size: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    container: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
