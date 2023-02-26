import { css } from "@emotion/react";

const globalStyle = css`
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-Thin.ttf");
    font-weight: 100;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-Light.ttf");
    font-weight: 300;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-Regular.ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-Medium.ttf");
    font-weight: 500;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-SemiBold.ttf");
    font-weight: 600;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-Bold.ttf");
    font-weight: 700;
  }
  @font-face {
    font-family: "Sarabun";
    src: url("../static/fonts/Sarabun/Sarabun-ExtraBold.ttf");
    font-weight: 800;
  }

  @font-face {
    font-family: "Pacifico";
    src: url("../static/fonts/Pacifico/Pacifico-Regular.ttf");
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../static/fonts/Montserrat/Montserrat-VariableFont_wght.ttf");
  }

  html,
  body {
    font-family: "Sarabun";
  }
`;

export default globalStyle;
