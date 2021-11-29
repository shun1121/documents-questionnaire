import React from "react"

const Checkbox = (props) => {
  const {text} = props
  return (
    <>
      <input type="checkbox" />
      <span>{text}</span>
    </>
  )
}

export default Checkbox

