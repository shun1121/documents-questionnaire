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
  value: '読む',
  fontSize: '15px',
  color: 'black',
}
export const CheckboxS = Template.bind({})
CheckboxS.args = {
  value: '書く',
  fontSize: '10px',
  color: '#1ea8fd',
  checked: true
}