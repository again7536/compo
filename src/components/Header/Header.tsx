import { Row, Col } from "@/components/Layout/Grid";
import Logo from "@/components/Logo/Logo";
import { css, useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useBreakpoint } from "styled-breakpoints/react-emotion";
import { up } from "styled-breakpoints";

function Header() {
  const theme = useTheme();
  const lgUp = useBreakpoint(up("lg"));

  return (
    <Row gutter={20}>
      <Col xs={10} lg={4}>
        <Logo />
      </Col>
      {lgUp && (
        <Col lg={4}>
          <nav
            css={css`
              height: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div>Components</div>
            <div>About</div>
            <div>Contact</div>
          </nav>
        </Col>
      )}
      <Col xs={2} lg={4}>
        <div
          css={css`
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0 20px;
          `}
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} fontSize={theme.size[2]} />
          <FontAwesomeIcon icon={faUser} fontSize={theme.size[2]} />
          {lgUp || <FontAwesomeIcon icon={faBars} fontSize={theme.size[2]} />}
        </div>
      </Col>
    </Row>
  );
}

export default Header;
