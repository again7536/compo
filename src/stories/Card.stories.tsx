import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, CardImage, CardBody, CardBodyTitle } from "@/components/Card/Card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => (
  <Card>
    <CardImage src="#" />
    <CardBody>
      <CardBodyTitle>hi</CardBodyTitle>
    </CardBody>
  </Card>
);
