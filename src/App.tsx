import React from "react"
import Checkbox from "./components/checkbox"
import InputText from "./components/inputText"
import QuestionnaireTitle from "./components/questionnaireTitle"
import Questions from "./components/questions"
import SelectBox from "./components/selectBox"
import TableSelect from "./components/tableSelect"
import "./App.scss"
import TestCheckbox from "./components/TestCheckbox"

const App = () => {
  return (
    <div className="App">
      <QuestionnaireTitle />
      <Questions questionNum="1" />
      <TableSelect />
      <Questions questionNum="2" />
      <Checkbox />
      {/* <Checkbox text="読む" />
      <Checkbox text="書く" />
      <Checkbox text="話す" />
      <Checkbox text="聞く" /> */}
      <Questions questionNum="3" />
      <TestCheckbox />  
      <SelectBox time="時間" />
      <Questions questionNum="4" />
      <InputText />
    </div>
  )
}

export default App
