import React from 'react';
import Confirm from "./confirm"
// import "../App.scss"

export default {
  title: "components/Confirm",
  component: Confirm,
  argTypes: { 
    handleClick: { action: "handleClick"},
  },
}

const Template = (args) => (
  <Confirm {...args} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'primary'
}