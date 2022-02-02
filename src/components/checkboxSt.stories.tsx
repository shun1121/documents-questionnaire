import React from 'react';
import { Checkbox1 } from "./checkbox1"

export default {
  title: "Components/checkbox1",
  component: Checkbox1,
  argTypes: {
    handleChange: { action: "handleChange"},
    fontSize: {
      control: {
        type: 'radio',
        options: ['10px', '15px', '20px']
      }
    }
  },
}

const Template = (args) => (
  <Checkbox1 {...args} />
)

export const CheckboxM = Template.bind({})
CheckboxM.args = {
  label: '読む',
  fontSize: '15px',
  color: 'black'
}
export const CheckboxS = Template.bind({})
CheckboxS.args = {
  label: '書く',
  fontSize: '10px',
  color: '#1ea8fd'
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