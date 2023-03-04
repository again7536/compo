import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List, ListHeader, ListSubHeader, IconListItem, Divider } from "@/components/List/List";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

export const Primary: ComponentStory<typeof List> = () => (
  <List>
    <ListHeader>hi</ListHeader>
    <Divider />
    <ListSubHeader>hi2</ListSubHeader>
    <IconListItem icon={faBars} text="hi22222" />
    <IconListItem icon={faBars} text="hi332323" />
    <Divider />
    <ListSubHeader>hi2</ListSubHeader>
    <IconListItem icon={faBars} text="hi22222" />
    <IconListItem icon={faBars} text="hi332323" />
  </List>
);
