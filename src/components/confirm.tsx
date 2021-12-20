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

const Confirm: VFC = () => {
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
    // <div className="content">
    //   <table className="table">
    //     <tbody>
    //       <tr>
    //         <td>教師は英語のみで教えるべきだ :</td>
    //         <td>{answer1.value}</td>
    //       </tr>
    //       <tr>
    //         <td>音読をもっと取り入れるべきだ :</td>
    //         <td>{answer2.value}</td>
    //       </tr>
    //       <tr>
    //         <td>発音記号は教えておくべきだ :</td>
    //         <td>{answer3.value}</td>
    //       </tr>
    //       <tr>
    //         <td>英語らしく発音できる環境を作るべきだ :</td>
    //         <td>{answer4.value}</td>
    //       </tr>
    //       <tr>
    //         <td>もっと学びたかった分野はどれですか :</td>
    //         <td>{checkbox}</td>
    //       </tr>
    //       <tr>
    //         <td>一週間に英語を何時間勉強していますか :</td>
    //         <td>{select}時間</td>
    //       </tr>
    //       <tr className="inputText">
    //         <td>日本の英語教育に取り入れるべきものはなんですか :</td>
    //         <td>{text}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <div><button onClick={confirmClose}>閉じる</button></div>
    // </div>
    <div className="content">
      <div className="resultWrapper">
        <p className="question">教師は英語のみで教えるべきだ。 :</p>
        <p className="answer">{answer1.value}</p>
      </div>
      <div className="resultWrapper">
        <p className="question">音読をもっと取り入れるべきだ。 :</p>
        <p className="answer">{answer2.value}</p>
      </div>
      <div className="resultWrapper">
        <p className="question">発音記号は教えておくべきだ。 :</p>
        <p className="answer">{answer3.value}</p>
      </div>
      <div className="resultWrapper">
        <p className="question">英語らしく発音できる環境を作るべきだ。 :</p>
        <p className="answer">{answer4.value}</p>
      </div>
      <div className="resultWrapper">
        <p className="question">もっと学びたかった分野はどれですか？ :</p>
        <p className="answer">{checkbox}</p>
      </div>
      <div className="resultWrapper">
        <p className="question">一週間に英語を何時間勉強していますか？ :</p>
        <p className="answer">{select}時間</p>
      </div>
      <div className="resultWrapper">
        <div className="question">日本の英語教育に取り入れるべきものは？ :</div>
        <div className="answer">{text}</div>
      </div>
       {/* <div>音読をもっと取り入れるべきだ : {answer2.value}</div>
    //   <div>発音記号は教えておくべきだ : {answer3.value}</div>
    //   <div>英語らしく発音できる環境を作るべきだ : {answer4.value}</div>
    //   <div>もっと学びたかった分野はどれですか : {checkbox}</div>
    //   <div>一週間に英語を何時間勉強していますか : {select}時間</div>
    //   <div>日本の英語教育に取り入れるべきものはなんですか : {text}</div> */}
      <div><button onClick={confirmClose}>閉じる</button></div>
     </div>
  )
}

export default Confirm
