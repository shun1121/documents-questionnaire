import React from 'react'
import { StorySelectbox } from './storySelectbox'
import { timeOptions } from "./selectBoxOptions"

export default {
  title: "components/StorySelectbox",
  component: StorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
    // options: { 
    //   control: {
    //     type: 'radio',
    //     options: ["0~2", "2~4", "4~6", "6~8", "8~"],
    //   }
    // }
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
export const SelectedBox1 = Template.bind({})
SelectedBox1.args = {
  time: '時間',
  value: '2~4'
}
export const SelectedBox2 = Template.bind({})
SelectedBox2.args = {
  time: '時間',
  value: '4~6'
}