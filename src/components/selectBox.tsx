import React from "react"
import { timeOptions } from "./selectBoxOptions"

const SelectBox = (props) => {
  const options = timeOptions
  // console.log(props)
  console.log(options[0][0])
  return (
    <>
      <select name="time">
        <option value="" hidden>時間を選択してください。</option>
        {options.map((option) => (
          <option key={option[0]} value={option[1]}>
            {option[1]}
          </option>
        ))}
      </select>
      <span>{props.time}</span>
    </>
  )
}

export default SelectBox
