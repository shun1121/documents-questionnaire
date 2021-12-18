import React, {useState} from "react"
import "../App.scss"

const TableSelect = () => {
  const [results1, setResults1] = useState([])
  const [results2, setResults2] = useState([])
  const [results3, setResults3] = useState([])
  const [results4, setResults4] = useState([])

  const handleInputChange = (event: any) => {
    const id = event.target.name[1]
    const value = event.target.value
    const latest: any = {
      id: id,
      value: value
    }
    if (id === "1") {
      setResults1(latest)
    } else if (id === "2") {
      setResults2(latest)
    } else if (id === "3") {
      setResults3(latest)
    } else {
      setResults4(latest)
    }
  }
  console.log(results1)
  console.log(results2)
  console.log(results3)
  console.log(results4)
  
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
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="とても同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="少し同意" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="あまり同意しない" onChange={handleInputChange} /></td>
            <td style={{ border: "1px black solid" }}><input type="radio" name="q1" value="全く同意しない" onChange={handleInputChange} /></td>
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
        </tbody>
      </table>
    </>
  )
}

export default TableSelect
