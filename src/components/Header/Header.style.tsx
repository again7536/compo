import styled from "@emotion/styled";

const HeaderNav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const HeaderButtonGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 20px;

  font-size: ${(props) => props.theme.size[3]};
  line-height: ${(props) => props.theme.size[3]};

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export { HeaderNav, HeaderButtonGroup };
