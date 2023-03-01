import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "@/components/Logo/Logo";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Primary: ComponentStory<typeof Logo> = () => <Logo />;
