import React, {useState} from "react"
import TableRow from "./tableRow"
import "../App.scss"

const TableSelect = () => {
  const [results, setResults] = useState([])

  const handleInputChange = (event: any) => {
    const checkedValue = event.target.value
    const questionNum = event.target.name[1]
    const questionResults = document.getElementsByClassName(questionNum)[0]
    const result: any = {
      id: questionResults.className,
      value: checkedValue
    }
    const resultKeys = Object.keys(results)
    const resultKeyNum = resultKeys.map(val => Number(val))
    const resultId = resultKeyNum.map(num => num+1)

    if (Object.keys(resultId).includes(result.id)) {
      const ChangeRadioBtn = results.map(result => {
        if (result.id === questionNum) {
          // 該当のresultオブジェクトを展開し、新しいidとvalueを代入する）
          return {
            ...result,
            id: questionResults.className,
            value: checkedValue
          }
        }
        return result
      })
      setResults(ChangeRadioBtn)
    } else {
      setResults([...results, result])
    }
  }
  console.log(results)
  
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
            <td style={{ border: "1px black solid" }}>朝ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" id="a1" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" id="a2" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" id="a3" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" id="a4" onChange={handleInputChange} /></td>
          </tr>
          <tr className="2">
            <td style={{ border: "1px black solid" }}>昼ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr className="3">
            <td style={{ border: "1px black solid" }}>晩ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
          <tr className="4">
            <td style={{ border: "1px black solid" }}>夜ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="全く同意しない" onChange={handleInputChange} /></td>
          </tr>
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