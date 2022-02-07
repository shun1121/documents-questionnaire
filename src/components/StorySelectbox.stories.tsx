import React from 'react'
import { StorySelectbox } from './StorySelectbox'
import { timeOptions } from "./selectBoxOptions"

export default {
  title: "components/StorySelectbox",
  component: StorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
  }
}

const Template = (args) => <StorySelectbox {...args} />

export const Selectbox = Template.bind({})
Selectbox.args = {
  time: "時間",
  options: [
    [1, "0~2"],
    [2, "2~4"],
    [3, "4~6"],
    [4, "6~8"],
    [5, "8~"],
  ]
}