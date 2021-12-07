import React from "react"
import TableRow from "./tableRow"

const TableSelect = () => {
  return (
    <>
      {/* <TableRow name="aaa" /> */}
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
          <TableRow question="朝ごはんは食べなくてもいい" />
          <TableRow question="昼ごはんは食べなくてもいい" />
          <TableRow question="晩ごはんは食べなくてもいい" />
          <TableRow question="夜ごはんは食べなくてもいい" />
        </tbody>
      </table>
    </>
  )
}

export default TableSelect
