import React from "react"

const TableSelect = () => {
  return (
    <>
      <table style={{border: "1px black solid", borderCollapse: "collapse"}}>
        <tr>
          <th style={{border: "1px black solid"}}>質問</th>
          <th style={{border: "1px black solid"}}>とても同意</th>
          <th style={{border: "1px black solid"}}>少し同意</th>
          <th style={{border: "1px black solid"}}>あまり同意しない</th>
          <th style={{border: "1px black solid"}}>全く同意しない</th>
        </tr>
        <tr>
          <td style={{border: "1px black solid"}}>バナナはおやつではない</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
        </tr>
        <tr>
          <td style={{border: "1px black solid"}}>バナナはおやつではない</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
        </tr>
        <tr>
          <td>バナナはおやつではない</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
        </tr>
        <tr>
          <td style={{border: "1px black solid"}}>バナナはおやつではない</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
          <td style={{border: "1px black solid"}}>○</td>
        </tr>
      </table>
    </>
  )
}

export default TableSelect
