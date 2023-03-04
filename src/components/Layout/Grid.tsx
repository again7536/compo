import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

type BreakpointKey = keyof Theme["breakpoints"];
type ColProps = { [key in BreakpointKey]?: number };

interface RowProps {
  margin?: number;
  gutter?: number;
}

interface ContainerProps {
  children: React.ReactNode;
}

const CONTAINER_PADDING = 30;

const Col = styled.div<ColProps>`
  ${(props) =>
    Object.entries(props.theme.breakpoints)
      .map(([key, value]) => {
        const width = props[key as BreakpointKey];
        return width ? `@media (min-width: ${value}) {width: ${(100 / 12) * width}%}\n` : "";
      })
      .join("")}
`;

const Row = styled.div<RowProps>`
  display: flex;
  width: calc(100% - ${(props) => (props.margin ?? 0) * 2}px});
  margin: 0 ${(props) => props.margin ?? 0}px;
  gap: 0 ${(props) => props.gutter ?? 20}px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ContainerInner = styled.div`
  padding: 0 ${CONTAINER_PADDING}px;

  ${(props) =>
    Object.entries(props.theme.breakpoints)
      .map(([key, value]) => {
        const width = props.theme.container[key as BreakpointKey];
        return width
          ? `@media (min-width: ${value}) {width: calc(${width} - ${CONTAINER_PADDING * 2}px)}\n`
          : "";
      })
      .join("")}
`;

const Container = ({ children }: ContainerProps) => (
  <ContainerWrapper>
    <ContainerInner>{children}</ContainerInner>
  </ContainerWrapper>
);

export { Col, Row, Container };
