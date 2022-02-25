import React, { VFC } from "react"
import { useDispatch } from "react-redux"
import { checkRadio } from "../../features/questionnaire/questionnaireSlice"
import "../../App.scss"
import { StoryTable } from "./storyTable"

type RadioBtnVal = {
  id: string
  value: string
}

export const TableSelect: VFC = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name[1]
    const value = event.target.value
    const latest: RadioBtnVal = {
      id: name,
      value: value,
    }
    // console.log(latest)
    dispatch(checkRadio(latest))
  }

  return <StoryTable handleInputChange={handleInputChange} />
}

export default TableSelect
