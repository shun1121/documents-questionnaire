import React from 'react'
import { StoryTable } from './storyTable'

export default {
  title: 'Components/StoryTable',
  component: StoryTable,
  argTypes: {
    handleInputChange: { 
      action: "handleInputChange"
    }
  }
}

const Template = (args) => (
  <StoryTable {...args} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
}