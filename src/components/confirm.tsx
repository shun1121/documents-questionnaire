import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  confirmOpen,
  result1,
  result2,
  result3,
  result4,
  selectCheckboxItems,
  selectVal,
  storedText,
} from "../features/questionnaire/questionnaireSlice"

type PropType = {
  excess?: boolean;
}

const Confirm: VFC<PropType> = ({ excess }) => {
  const dispatch = useDispatch()
  const answer1 = useSelector(result1)
  const answer2 = useSelector(result2)
  const answer3 = useSelector(result3)
  const answer4 = useSelector(result4)
  const checkbox = useSelector(selectCheckboxItems)
  const select = useSelector(selectVal)
  const text = useSelector(storedText)

  const confirmClose = () => {
    dispatch(confirmOpen(false))
  }

  return (
    <>
      {excess ? (
        <div className="content">
          <div>400字以内で記述してください。</div>
          <div className="close">
            <button onClick={confirmClose}>閉じる</button>
          </div>
        </div>
      ) : (
        <div className="content">
          <div className="resultWrapper firstColumn">
            <p className="question">教師は英語のみで教えるべきだ。</p>
            <p className="answer">{answer1.value}</p>
          </div>
          <div className="resultWrapper">
            <p className="question">音読をもっと取り入れるべきだ。</p>
            <p className="answer">{answer2.value}</p>
          </div>
          <div className="resultWrapper">
            <p className="question">発音記号は教えておくべきだ。</p>
            <p className="answer">{answer3.value}</p>
          </div>
          <div className="resultWrapper">
            <p className="question">英語らしく発音できる環境を作るべきだ。</p>
            <p className="answer">{answer4.value}</p>
          </div>
          <div className="resultWrapper">
            <p className="question">深く学びたかった分野。</p>
            <p className="answer">{checkbox.join(', ')}</p>
          </div>
          <div className="resultWrapper">
            <p className="question">一週間の英語の学習時間。</p>
            <p className="answer">{select}時間</p>
          </div>
          <div className="resultWrapper lastColumn">
            <div className="question">日本の英語教育に取り入れるべきもの。</div>
            <div className="answer">{text}</div>
          </div>
          <div className="close">
            <button onClick={confirmClose}>閉じる</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Confirm
