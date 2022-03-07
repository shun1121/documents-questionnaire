import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectBox,
  selectVal,
} from "../../features/questionnaire/questionnaireSlice"
import { timeOptions } from "./selectBoxOptions"
import { StorySelectbox } from "./storySelectbox"

interface Props {
  time: string
}

export const SelectBox: VFC<Props> = ({ time }) => {
  const dispatch = useDispatch()
  const selectedValue = useSelector(selectVal)
  const options = timeOptions

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectVal = e.target.value
    dispatch(selectBox(selectVal))
  }

  return (
    <>
      <StorySelectbox
        options={options}
        time={time}
        value={selectedValue ? selectedValue : "時間を選択してください。"}
        handleChange={handleChange}
      />
    </>
  )
}

export default SelectBox
