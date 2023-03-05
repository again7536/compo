import { Row, Col } from "@/components/Layout/Grid";
import { Logo } from "@/components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useBreakpoint } from "styled-breakpoints/react-emotion";
import { up } from "styled-breakpoints";
import { Link } from "react-router-dom";
import * as S from "./Header.style";

function Header() {
  const lgUp = useBreakpoint(up("lg"));

  return (
    <Row gutter={20}>
      <Col xs={10} lg={4}>
        <Logo />
      </Col>
      {lgUp && (
        <Col lg={4}>
          <S.HeaderNav>
            <Link to="/components">Components</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </S.HeaderNav>
        </Col>
      )}
      <Col xs={2} lg={4}>
        <S.HeaderButtonGroup>
          {lgUp && <FontAwesomeIcon icon={faCircleHalfStroke} />}
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          {lgUp || <FontAwesomeIcon icon={faBars} />}
        </S.HeaderButtonGroup>
      </Col>
    </Row>
  );
}

export { Header };
