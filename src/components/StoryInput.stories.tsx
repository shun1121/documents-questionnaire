import React from 'react'
import { StoryInput } from './StoryInput'

export default {
  title: "components/StoryInput",
  component: StoryInput,
  argTypes: {
    handleChange: { action: "handleChange" },
  }
}

const Template = (args) => {
  <StoryInput {...args} />
}

export const Input = Template.bind({})
Input.args = {
  // text: "こんにちは",
}