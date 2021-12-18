import React, {useState} from "react"
import { timeOptions } from "./selectBoxOptions"

const SelectBox = (props) => {
  const [selectValue, setSelectValue] = useState("")
  const options = timeOptions

  const handleChange = (e: any) => {
    setSelectValue(e.target.value)
  }
  console.log(selectValue)

  return (
    <>
      <select name="time" value={selectValue} onChange={handleChange}>
        <option hidden>時間を選択してください。</option>
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
