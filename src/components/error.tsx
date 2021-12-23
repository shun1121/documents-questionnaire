import React, { VFC } from "react"
import { useDispatch } from "react-redux"
import { flgOpen } from "../features/questionnaire/questionnaireSlice"

const Error: VFC = () => {
  const dispatch = useDispatch()

  const flgClose = () => {
    dispatch(flgOpen(false))
  }

  return (
    <div className="content">
      <div>全ての項目を記入してください。</div>
      <div><button onClick={flgClose}>閉じる</button></div>
    </div>
  )
}

export default Error
