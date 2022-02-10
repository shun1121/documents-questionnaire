import React from 'react';
import Stack from "./Stack"

export default {
  title: "components/StoryStack",
  component: Stack,
  // controlsに追加して、storybook側で値を自由に変更したい。
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 },
    handleClick: { action: "handleClick"},
    // direction: { control: { type: 'radio', options: ["row", "column"]}}
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
       style={{
         width: "50px",
         height: "50px",
         backgroundColor: "red",
         display: "flex",
         justifyContent: "center",
         alignItems: "center"
       }}
      >
        {n+1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false
}
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false
}
