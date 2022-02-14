import React from "react"
import { StoryCheckbox } from "./storyCheckbox"
// import { Provider } from 'react-redux';
// import { store } from '../app/store'

export default {
  title: "components/StoryCheckbox",
  component: StoryCheckbox,
  // decorators: [story => <Provider store={store}>{story()}</Provider>],
  argTypes: {
    handleChange: { action: "handleChange" },
    fontSize: {
      control: {
        type: "radio",
        options: ["10px", "15px", "20px"],
      },
    },
  },
}

const Template = (args) => <StoryCheckbox {...args} />

export const CheckboxM = Template.bind({})
CheckboxM.args = {
  value: "読む",
  fontSize: "15px",
  color: "black",
  type: "checkbox",
  name: "checkbox",
}
export const CheckboxS = Template.bind({})
CheckboxS.args = {
  checked: true,
  value: "書く",
  fontSize: "10px",
  type: "checkbox",
  name: "checkbox",
}
