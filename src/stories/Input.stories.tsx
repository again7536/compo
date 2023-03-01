import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "@/components/Input/Input";
import { useState } from "react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>("default");
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};
