import React from "react"
import { StoryTable } from "./storyTable"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Components/StoryTable",
  component: StoryTable,
  argTypes: {
    handleInputChange: {
      action: "handleInputChange",
    },
  },
} as ComponentMeta<typeof StoryTable>;

const Template: ComponentStory<typeof StoryTable> = (args) => <StoryTable {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: "primary",
}
