import React from "react"
import { StorySelectbox } from "./storySelectbox"

export default {
  title: "components/StorySelectbox",
  component: StorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
  },
}

const Template = (args) => <StorySelectbox {...args} />

export const Selectbox = Template.bind({})
Selectbox.args = {
  time: "時間",
  value: "時間を選択してください。",
}
