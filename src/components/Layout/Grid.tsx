import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";

type BreakpointKey = keyof Theme["breakpoints"];
type ColProps = { [key in BreakpointKey]?: number };

interface RowProps {
  margin?: number;
  gutter?: number;
}

interface ContainerProps {
  children: React.ReactNode;
  style?: {
    outer?: Interpolation<Theme>;
    inner?: Interpolation<Theme>;
  };
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
  height: 100%;
`;
const ContainerInner = styled.div`
  width: calc(${(props) => props.theme.container.xs} - 10px);
  height: 100%;
  padding: 0 5px;

  ${(props) =>
    Object.entries(props.theme.breakpoints)
      .map(([key, value]) => {
        if (key === "xs") return "";

        const width = props.theme.container[key as BreakpointKey];
        return `@media (min-width: ${value}) {
          width: calc(${width} - ${CONTAINER_PADDING * 2}px);
          padding: 0 ${CONTAINER_PADDING}px;
        }\n`;
      })
      .join("")} {
  }
`;

const Container = ({ children, style }: ContainerProps) => (
  <ContainerWrapper css={style?.outer}>
    <ContainerInner css={style?.inner}>{children}</ContainerInner>
  </ContainerWrapper>
);

export { Col, Row, Container };
