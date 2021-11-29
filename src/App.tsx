import React from "react"
import ReactDOM from "react-dom"
import Checkbox from "./components/checkbox"
import InputText from "./components/inputText"
import QuestionnaireTitle from "./components/questionnaireTitle"
import Questions from "./components/questions"
import SelectBox from "./components/selectBox"
import TableSelect from "./components/tableSelect"

const App = () => {
  return (
    <div className="App">
      <QuestionnaireTitle />
      <Questions questionNum="1" />
      <TableSelect />
      <Questions questionNum="2" />
      <Checkbox text="読む" />
      <Checkbox text="書く" />
      <Checkbox text="話す" />
      <Checkbox text="聞く" />
      <Questions questionNum="3" />
      <SelectBox time="時間" />
      <Questions questionNum="4" />
      <InputText />
    </div>
  )
}

export default App
