import React from "react"
import Checkbox from "./components/checkbox"
import InputText from "./components/inputText"
import QuestionnaireTitle from "./components/questionnaireTitle"
import Questions from "./components/questions"
import SelectBox from "./components/selectBox"
import TableSelect from "./components/tableSelect"
import "./App.scss"

const App = () => {
  const handleSubmit = (e) => {
    alert('submitted')
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <QuestionnaireTitle />
        <Questions questionNum="1" />
        <TableSelect />
        <Questions questionNum="2" />
        <Checkbox />
        <Questions questionNum="3" />
        <SelectBox time="時間" />
        <Questions questionNum="4" />
        <InputText />
        <div>
          <input type="submit" value="送信" />
        </div>
      </form>
    </div>
  )
}

export default App
