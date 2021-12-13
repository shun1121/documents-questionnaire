import React, {useEffect, useState} from "react"
import TableRow from "./tableRow"
import "../App.scss"

type label = {
  for?: string
  class?: string
}
type Q1 = {
  value?: string
  id?: string
}

const TableSelect = () => {
  const [value1, setValue1] = useState([])
  const [value2, setValue2] = useState([])
  const [value3, setValue3] = useState([])
  const [value4, setValue4] = useState([])

  useEffect(() => {
    const Q1 = document.getElementsByName('q1')[0] as Q1
    const id = document.getElementsByClassName('1')[0]
    console.log(Q1.value)
    console.log(id.className)
  },[])

  const handleInputChange1 = (event: any) => {
    const inputValue = event.target.value
    const id = document.getElementsByClassName('1')[0]
    const option: any = {
      id: id.className,
      value: inputValue
    }
    setValue1(option)
  }
  console.log(value1)
  
  const handleInputChange2 = (event: any) => {
    const inputValue = event.target.value
    const id = document.getElementsByClassName('2')[0]
    const option: any = {
      id: id.className,
      value: inputValue
    }
    setValue2(option)
  }
  console.log(value2)

  const handleInputChange3 = (event: any) => {
    const inputValue = event.target.value
    const id = document.getElementsByClassName('3')[0]
    const option: any = {
      id: id.className,
      value: inputValue
    }
    setValue3(option)
  }
  console.log(value3)

  const handleInputChange4 = (event: any) => {
    const inputValue = event.target.value
    const id = document.getElementsByClassName('4')[0]
    const option: any = {
      id: id.className,
      value: inputValue
    }
    setValue4(option)
  }
  console.log(value4)

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
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" id="a1" onChange={handleInputChange1} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" id="a2" onChange={handleInputChange1} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" id="a3" onChange={handleInputChange1} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" id="a4" onChange={handleInputChange1} /></td>
          </tr>
          <tr className="2">
            <td style={{ border: "1px black solid" }}><label htmlFor="bb" className="label2">2</label>昼ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="とても同意" onChange={handleInputChange2} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="少し同意" onChange={handleInputChange2} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="あまり同意しない" onChange={handleInputChange2} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q2" value="全く同意しない" onChange={handleInputChange2} /></td>
          </tr>
          <tr className="3">
            <td style={{ border: "1px black solid" }}>晩ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="とても同意" onChange={handleInputChange3} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="少し同意" onChange={handleInputChange3} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="あまり同意しない" onChange={handleInputChange3} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q3" value="全く同意しない" onChange={handleInputChange3} /></td>
          </tr>
          <tr className="4">
            <td style={{ border: "1px black solid" }}>夜ごはんは食べなくてもいい</td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="とても同意" onChange={handleInputChange4} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="少し同意" onChange={handleInputChange4} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="あまり同意しない" onChange={handleInputChange4} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q4" value="全く同意しない" onChange={handleInputChange4} /></td>
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