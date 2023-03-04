import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconListItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { text: string; icon: IconDefinition };

const ListItemStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 15px;
  height: 35px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px 0;
  padding: 10px;
  width: 200px;
`;

const ListHeader = styled.div`
  ${ListItemStyle}

  font-size: ${({ theme }) => theme.size[3]};
`;

const ListSubHeader = styled.div`
  ${ListItemStyle}

  font-size: ${({ theme }) => theme.size[1]};
`;

const ListItem = styled.div`
  ${ListItemStyle}

  font-size: ${({ theme }) => theme.size[2]};
`;

const IconListItem = ({ text, icon, ...props }: IconListItemProps) => (
  <ListItem {...props}>
    <FontAwesomeIcon icon={icon} />
    {text}
  </ListItem>
);

const Divider = styled.hr`
  width: 100%;
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.mistyTree};
`;

export { List, ListHeader, ListSubHeader, ListItem, IconListItem, Divider };
