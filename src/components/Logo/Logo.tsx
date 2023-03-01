import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

function Logo() {
  const theme = useTheme();

  return (
    <Link to="/">
      <h1
        css={css`
          display: inline-block;
          width: fit-content;
          font-family: ${theme.fonts.logo};
          font-size: ${theme.size[5]};
          color: ${theme.colors.black};
        `}
      >
        Compo
      </h1>
    </Link>
  );
}

export default Logo;
