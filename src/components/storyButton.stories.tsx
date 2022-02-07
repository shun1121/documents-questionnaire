import React from 'react';
import Button1 from "./StoryButton"

export default {
  title: "components/Button1",
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
export const Green:any = Template.bind({})
Green.args = {
  backgroundColor: 'green',
  label: '回答状況を確認',
  size: 'medium',
  color: 'white'
}
export const Black = Template.bind({})
Black.args = {
  backgroundColor: 'black',
  label: '回答状況を確認',
  size: 'small',
  color: 'white'
}
export const Yellow = Template.bind({})
Yellow.args = {
  backgroundColor: 'yellow',
  label: '回答状況を確認',
  size: 'large',
  color: 'grey'
}
export const Blue = () => <Button1 label="Click" backgroundColor="blue" />