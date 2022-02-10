import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inputText, storedText } from "../../features/questionnaire/questionnaireSlice"
import { StoryInput } from './storyInput'

const InputText: VFC = () => {
  const dispatch = useDispatch()
  const text = useSelector(storedText)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    dispatch(inputText(inputValue))
  }

  return (
    <StoryInput text={text} handleChange={handleChange} />
  )
}

export default InputText
