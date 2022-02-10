import React, { VFC } from "react"
import { useDispatch } from "react-redux"
import { flgOpen } from "../../features/questionnaire/questionnaireSlice"
import { StoryButton } from "../button/storyButton"

const Error: VFC = () => {
  const dispatch = useDispatch()

  const flgClose = () => {
    dispatch(flgOpen(false))
  }

  return (
    <div className="content">
      <div className="caution">全ての項目を記入してください。</div>
      <div className="close">
        <StoryButton
          color="white"
          handleClick={flgClose}
          label="閉じる"
          primary
          size='medium'
        />
      </div>
    </div>
  )
}

export default Error
