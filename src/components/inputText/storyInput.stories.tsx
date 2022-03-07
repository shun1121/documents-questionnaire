import React from "react"
import { StoryInput } from "./storyInput"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "components/StoryInput",
  component: StoryInput,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
}　as ComponentMeta<typeof StoryInput>;

const Template: ComponentStory<typeof StoryInput> = (args) => {
  console.log(args)
  return <StoryInput {...args} />
}

export const Default = Template.bind({})
Default.args = {
  value: "",
}
export const Input = Template.bind({})
Input.args = {
  text: "😂💁emojiいいね",
}
