import React from 'react'
import { TestStorySelectbox } from './testSelect'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "components/testSelect",
  component: TestStorySelectbox,
  argTypes: {
    handleChange: { action: "handleChange" },
  }
} as ComponentMeta<typeof TestStorySelectbox>;

const Template = (args) => {
  <TestStorySelectbox {...args} />
}

export const Selectbox = Template.bind({})
// Selectbox.args = {
//   time: "時間",
//   options: [
//     [1, "0~2"],
//     [2, "2~4"],
//     [3, "4~6"],
//     [4, "6~8"],
//     [5, "8~"],
//   ]
// }