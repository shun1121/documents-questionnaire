import React from "react"

const Questions = (props) => {
  if (props.questionNum === "1") {
    return (
      <p>1. 以下の質問にお答えください。</p>
    )
  } else if (props.questionNum === "2") {
    return (
      <p>2. 英語4技能でもっと学びたかった分野はどれですか。(複数選択有り)</p>
    )
  } else if (props.questionNum === "3") {
    return (
      <p>3. あなたは一週間に英語を何時間勉強していますか。</p>
    )
  } else {
    return (
      <p>4. 日本の英語教育に取り入れるべきだと思うものを記述してください(400字以内)</p>
    )
  }
}

export default Questions
