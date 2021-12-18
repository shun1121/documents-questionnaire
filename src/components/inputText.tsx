import React, { useState } from "react"

const InputText = () => {
  const [text, setText] = useState("")

  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  console.log(text)

  return (
    <>
      <textarea value={text} onChange={handleChange} />
    </>
  )
}

export default InputText
