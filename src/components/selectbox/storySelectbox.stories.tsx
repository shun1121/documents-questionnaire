import React from "react"
import { StorySelectbox } from "./storySelectbox"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "components/StorySelectbox",
  component: StorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
} as ComponentMeta<typeof StorySelectbox>;

const Template: ComponentStory<typeof StorySelectbox> = (args) => <StorySelectbox {...args} />

export const Selectbox = Template.bind({})
Selectbox.args = {
  time: "時間",
  value: "時間を選択してください。",
}
