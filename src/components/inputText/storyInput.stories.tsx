import React from "react"
import { StoryInput } from "./storyInput"

export default {
  title: "components/StoryInput",
  component: StoryInput,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
}

const Template = (args) => {
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
