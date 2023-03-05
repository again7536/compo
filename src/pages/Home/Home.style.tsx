import { Row } from "@/components";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

const HomeTitle = styled.h1`
  font-size: ${(props) => props.theme.size[7]};
  line-height: ${(props) => props.theme.size[7]};

  ${up("sm")} {
    font-size: ${(props) => props.theme.size[8]};
    line-height: ${(props) => props.theme.size[8]};
  }
  ${up("xl")} {
    font-size: ${(props) => props.theme.size[9]};
    line-height: calc(${(props) => props.theme.size[9]} * 1.1);
  }
`;

const HomeRow = styled(Row)`
  margin-top: 15px;

  ${up("xl")} {
    margin-top: 70px;
  }
`;

export { HomeTitle, HomeRow };
