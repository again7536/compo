import { Header, Container, Col } from "@/components";
import { css, useTheme } from "@emotion/react";
import * as S from "./Home.style";

function Home() {
  const theme = useTheme();
  return (
    <Container
      style={{
        outer: css`
          background-color: ${theme.colors.mistyTree};
        `,
      }}
    >
      <Header />
      <section>
        <S.HomeRow>
          <Col xxxl={1} />
          <Col xs={12} md={6} xxxl={5}>
            <S.HomeTitle>
              Share <br />
              Your <br />
              Components
            </S.HomeTitle>
          </Col>
        </S.HomeRow>
      </section>
    </Container>
  );
}

export default Home;
