import React from 'react';
import Confirm from "./confirm"

export default {
  title: "components/StoryConfirm",
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
  excess: false
}
export const Excess = Template.bind({})
Excess.args = {
  excess: true
}