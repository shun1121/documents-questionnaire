import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inputText, storedText } from "../features/questionnaire/questionnaireSlice"
import { StoryInput } from './storyInput'

const InputText = () => {
  const dispatch = useDispatch()
  const text = useSelector(storedText)

  const handleChange = (e: any) => {
    const inputValue = e.target.value
    dispatch(inputText(inputValue))
  }

  return (
    <StoryInput text={text} handleChange={handleChange} />
    // <>
    //   <textarea value={text} onChange={handleChange} />
    // </>
  )
}

export default InputText
