import React from "react"

const TableRow = ({question}) => {
  return (
    <tr>
      <td style={{ border: "1px black solid" }}>{question}</td>
      <td style={{ border: "1px black solid" }}><input type="radio" name="question1" value="option1" defaultChecked /></td>
      <td style={{ border: "1px black solid" }}><input type="radio" name="question1" value="option2" /></td>
      <td style={{ border: "1px black solid" }}><input type="radio" name="question1" value="option3" /></td>
      <td style={{ border: "1px black solid" }}><input type="radio" name="question1" value="option4" /></td>
    </tr>
  )
}

export default TableRow