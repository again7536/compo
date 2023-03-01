import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

type BreakpointKey = keyof Theme["breakpoints"];
type ColProps = { [key in BreakpointKey]?: number };

interface RowProps {
  margin?: number;
  gutter?: number;
}

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

export { Col, Row };
