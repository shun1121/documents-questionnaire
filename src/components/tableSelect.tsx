import React, { VFC } from "react"
import { useDispatch } from "react-redux"
import { checkRadio } from "../features/questionnaire/questionnaireSlice"
import "../App.scss"

type RadioBtnVal = {
  id: string;
  value: string;
}

const TableSelect: VFC = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event: any) => {
    const id = event.target.name[1]
    const value = event.target.value
    const latest: RadioBtnVal = {
      id: id,
      value: value
    }
    dispatch(checkRadio(latest))
  }
  
  return (
    <>
      <table
        style={{
          border: "1px black solid",
          borderCollapse: "collapse",
          margin: "0 auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px black solid" }}>質問</th>
            <th style={{ border: "1px black solid" }}>とても同意</th>
            <th style={{ border: "1px black solid" }}>少し同意</th>
            <th style={{ border: "1px black solid" }}>あまり同意しない</th>
            <th style={{ border: "1px black solid" }}>全く同意しない</th>
          </tr>
        </thead>
        <tbody>
          <tr className="1">
            <td className="questionTtl" style={{ border: "1px black solid" }}><span>1. </span>英語の授業中、教師は英語のみで教えるべきだ。</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr className="2">
            <td className="questionTtl" style={{ border: "1px black solid" }}><span>2. </span>英語の例文や文章の音読をもっと取り入れるべきだ。</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr className="3">
            <td className="questionTtl" style={{ border: "1px black solid" }}><span>3. </span>中学英語段階で基本の発音記号は教えておくべきだ。</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr className="4">
            <td className="questionTtl" style={{ border: "1px black solid" }}><span>4. </span>英語の授業では、英語らしく発音しなければならない環境を作るべきだ。</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableSelect
