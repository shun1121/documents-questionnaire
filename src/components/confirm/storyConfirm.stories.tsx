import React from "react"
import { Confirm } from "./confirm"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "components/StoryConfirm",
  component: Confirm,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />

export const Default = Template.bind({})
Default.args = {
  excess: false,
}
export const Excess = Template.bind({})
Excess.args = {
  excess: true,
}
