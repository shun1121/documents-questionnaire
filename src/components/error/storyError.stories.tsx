import React from 'react'
import Error from './error'

export default {
  title: 'components/StoryError',
  component: Error
}

const Template = (args) => (
  <Error {...args} />
)

export const Default = Template.bind({})
Default.args = {
  variant: 'aa'
}