import React, {useEffect, useState} from "react"
import TableRow from "./tableRow"
import "../App.scss"

const questions = [
  {
    questionNum: "1",
    questionTxt: "朝ごはんは食べなくてもいい",
    choices: {
      1: "とても同意",
      2: "少し同意",
      3: "あまり同意しない",
      4: "全く同意しない"
    }
  },
  {
    questionNum: "2",
    questionTxt: "昼ごはんは食べなくてもいい",
    choices: {
      1: "とても同意",
      2: "少し同意",
      3: "あまり同意しない",
      4: "全く同意しない"
    }
  },
  {
    questionNum: "3",
    questionTxt: "晩ごはんは食べなくてもいい",
    choices: {
      1: "とても同意",
      2: "少し同意",
      3: "あまり同意しない",
      4: "全く同意しない"
    }
  },
  {
    questionNum: "4",
    questionTxt: "夜ごはんは食べなくてもいい",
    choices: {
      1: "とても同意",
      2: "少し同意",
      3: "あまり同意しない",
      4: "全く同意しない"
    }
  }
]

const TableSelect = () => {
  const [question, setQuestion] = useState(questions[0])

  const onClickHandler = () => {
    const currentNumber = question.questionNum;
    // 回答したのが最後の質問であれば完了画面に遷移
    // if (Number(currentNumber) === questions.length) {
    //   window.location.href = "/thankyou";
    // }
    // まだ質問が残っていれば次の質問を表示
    setQuestion(questions[currentNumber]);
  };
  return (
    <>
      <div>
        {"質問 " +
          question.questionNum +
          "/" +
          questions.length +
          "：" +
          question.questionTxt}
      </div>
      <div>
        {Object.keys(question.choices).map(
          (choice, index) => (
            <div>
              <input type="radio" name="q1" value="とても同意" onChange={() => onClickHandler()} />
              {/* <button
                onClick={() => onClickHandler()}
              > */}
                {index + 1 + ". " + question.choices[choice]}
              {/* </button> */}
            </div>
          )
        )}
      </div>
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
            <td style={{ border: "1px black solid" }}>{question.questionNum}. {question.questionTxt}</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" id="a1" defaultChecked /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" id="a2" /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" id="a3" /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" id="a4" /></td>
          </tr>
          {/* <tr className="1">
            <td style={{ border: "1px black solid" }}><label htmlFor="aa" className="label1">1</label>朝ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" id="a1" defaultChecked /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" id="a2" /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" id="a3" /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" id="a4" /></td>
          </tr> */}
          {/* <tr className="2">
            <td style={{ border: "1px black solid" }}><label htmlFor="bb" className="label2">2</label>昼ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="とても同意" onChange={handleInputChange} defaultChecked /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr> */}
          {/* <tr>
            <td style={{ border: "1px black solid" }}>晩ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="とても同意" onChange={handleInputChange} defaultChecked /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td style={{ border: "1px black solid" }}>夜ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="とても同意" onChange={handleInputChange} defaultChecked /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q41" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr> */}
          {/* <TableRow question="朝ごはんは食べなくてもいい" />
          <TableRow question="昼ごはんは食べなくてもいい" />
          <TableRow question="晩ごはんは食べなくてもいい" />
          <TableRow question="夜ごはんは食べなくてもいい" /> */}
        </tbody>
      </table>
      {/* <div>
        <div>
          <div className="wrap">
            <div className="options">
              <div>質問</div>
              <div>とても同意</div>
              <div>少し同意</div>
              <div>あまり同意しない</div>
              <div>全く同意しない</div>
            </div>
            <div className="question">
              <div>朝ごはんは食べなくてもいい</div>
            </div>
            <div className="radioButtons">
              <div>
                <input type="radio" name="q1" value="とても同意" onChange={handleInputChange} />
              </div>
              <div>
                <input type="radio" name="q1" value="少し同意" onChange={handleInputChange} />
              </div>
              <div>
                <input type="radio" name="q1" value="あまり同意しない" onChange={handleInputChange} />
              </div>
              <div>
                <input type="radio" name="q1" value="全く同意しない" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>質問</div>
              <div>とても同意</div>
              <div>少し同意</div>
              <div>あまり同意しない</div>
              <div>全く同意しない</div>
            </div>
            <div>昼ごはんは食べなくてもいい</div>
            <div>
              <div>
                <input type="radio" name="q2" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q2" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q2" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q2" value="agree to some extent" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>質問</div>
              <div>とても同意</div>
              <div>少し同意</div>
              <div>あまり同意しない</div>
              <div>全く同意しない</div>
            </div>
            <div>
              <div>晩ごはんは食べなくてもいい</div>
            </div>
            <div>
              <div>
                <input type="radio" name="q3" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q3" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q3" value="agree to some extent" />
              </div>
              <div>
                <input type="radio" name="q3" value="agree to some extent" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default TableSelect
