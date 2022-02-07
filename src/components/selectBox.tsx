import React, { VFC } from "react"
import { timeOptions } from "./selectBoxOptions"
import { useDispatch, useSelector } from "react-redux"
import { selectBox, selectVal } from "../features/questionnaire/questionnaireSlice"
import { StorySelectbox } from "./StorySelectbox"
// import { TestStorySelectbox } from "./testSelect"

interface Props {
  time: string;
}

const SelectBox: VFC<Props> = (props) => {
  const dispatch = useDispatch()
  const selectedValue = useSelector(selectVal)
  const options = timeOptions

  const handleChange = (e: any) => {
    const selectVal = e.target.value
    dispatch(selectBox(selectVal))
  }

  return (
    <>
      <StorySelectbox
        options={options}
        time={props.time}
        value={selectedValue? selectedValue : 'default'}
        handleChange={handleChange}
      />
      {/* <TestStorySelectbox /> */}
      {/* <select name="time" value={selectedValue} onChange={handleChange}>
        <option hidden>時間を選択してください。</option>
        {options.map((option) => (
          <option key={option[0]} value={option[1]}>
            {option[1]}
          </option>
        ))}
      </select>
      <span>{props.time}</span> */}
    </>
  )
}

export default SelectBox
