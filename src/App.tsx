import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import Checkbox from "./components/checkbox"
import InputText from "./components/inputText"
import QuestionnaireTitle from "./components/questionnaireTitle"
import Questions from "./components/questions"
import SelectBox from "./components/selectBox"
import TableSelect from "./components/tableSelect"
import "./App.scss"
import { confirmOpen, confirmFlg } from "./features/questionnaire/questionnaireSlice"
import Confirm from "./components/confirm"

const App: VFC = () => {
  const dispatch = useDispatch()
  const confirm = useSelector(confirmFlg)
  
  const handleSubmit = (e: any) => {
    dispatch(confirmOpen(!confirm))
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
          <input type="submit" value="回答状況を表示" />
        </div>
      </form>
      {confirm ? (
        <div id="overlay">
          <Confirm />
        </div>
      ) : <></>}
    </div>
  )
}

export default App
