import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { useState } from "react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Checkbox checked={checked} onClick={() => setChecked((prev) => !prev)} />;
};
