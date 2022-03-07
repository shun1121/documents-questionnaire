import React from "react"
import { Error } from "./error"
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "components/StoryError",
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: "aa",
}
