import React, { VFC, useState } from "react"
import { timeOptions } from "./selectBoxOptions"
import { useDispatch, useSelector } from "react-redux"
import { selectBox, selectVal } from "../features/questionnaire/questionnaireSlice"

type Props = {
  time: string;
}

const SelectBox: VFC<Props> = (props) => {
  const [selectValue, setSelectValue] = useState("")
  const dispatch = useDispatch()
  const selectedValue = useSelector(selectVal)
  const options = timeOptions

  const handleChange = (e: any) => {
    const selectVal = e.target.value
    setSelectValue(selectVal)
    dispatch(selectBox(selectVal))
  }
  console.log(selectValue)

  return (
    <>
      <select name="time" value={selectedValue} onChange={handleChange}>
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
