import React from 'react';
import Button1 from "./storyButton"

export default {
  title: "components/StoryButton",
  component: Button1,
  argTypes: { 
    handleClick: { action: "handleClick"},
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    }
  },
}

const Template = (args) => (
  <Button1 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: '回答状況を確認',
}
export const Close = Template.bind({})
Close.args = {
  primary: true,
  label: '閉じる',
  size: 'medium',
  color: 'white',
  id: 'button'
}
export const Green= Template.bind({})
Green.args = {
  backgroundColor: 'green',
  label: '回答状況を確認',
  size: 'small',
  color: 'white'
}
export const Black = Template.bind({})
Black.args = {
  backgroundColor: 'black',
  label: '回答状況を確認',
  size: 'large',
  color: 'white'
}
export const Blue = () => <Button1 label="Click" backgroundColor="blue" />