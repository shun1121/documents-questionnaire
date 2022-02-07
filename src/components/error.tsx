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
      <div className="caution">全ての項目を記入してください。</div>
      <div className="close">
        <button onClick={flgClose}>閉じる</button>
      </div>
    </div>
  )
}

export default Error
