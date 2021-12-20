import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { inputText, storedText } from "../features/questionnaire/questionnaireSlice"

const InputText: VFC = () => {
  const dispatch = useDispatch()
  const text = useSelector(storedText)

  const handleChange = (e: any) => {
    const inputValue = e.target.value
    dispatch(inputText(inputValue))
  }

  return (
    <>
      <textarea value={text} onChange={handleChange} />
    </>
  )
}

export default InputText
