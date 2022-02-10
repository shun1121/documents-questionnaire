import React, { VFC } from "react"
import { timeOptions } from "./selectBoxOptions"
import { useDispatch, useSelector } from "react-redux"
import { selectBox, selectVal } from "../../features/questionnaire/questionnaireSlice"
import { StorySelectbox } from "./storySelectbox"

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
        value={selectedValue? selectedValue : '時間を選択してください。'}
        handleChange={handleChange}
      />
    </>
  )
}

export default SelectBox
