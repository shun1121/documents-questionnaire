import React from 'react'
import { StorySelectbox } from './storySelectbox'
import { timeOptions } from "./selectBoxOptions"

export default {
  title: "components/StorySelectbox",
  component: StorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
  }
}

const options = () => timeOptions.map((option) => {
  return option[1]
})
console.log(options)

const Template = (args) => <StorySelectbox {...args} />

export const Selectbox = Template.bind({})
Selectbox.args = {
  time: '時間',
  value: '時間を選択してください。',
}