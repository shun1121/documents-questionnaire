import React from 'react'
import { StoryInput } from './storyInput'

export default {
  title: "components/StoryInput",
  component: StoryInput,
  argTypes: {
    handleChange: { action: "handleChange" },
  }
}

const Template = (args) => {
  return (
   <StoryInput {...args} />
  )
}

export const Input = Template.bind({})
Input.args = {
  // text: "こんにちは",
}