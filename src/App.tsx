import React, { VFC } from "react"
import { useDispatch, useSelector } from "react-redux"
import Checkbox from "./components/checkbox"
import InputText from "./components/inputText"
import QuestionnaireTitle from "./components/questionnaireTitle"
import Questions from "./components/questions"
import SelectBox from "./components/selectBox"
import TableSelect from "./components/tableSelect"
import "./App.scss"
import {
  confirmOpen,
  confirmFlg,
  flgOpen,
  openFlg,
  result1,
  result2,
  result3,
  result4,
  selectCheckboxItems,
  selectVal,
  storedText,
} from "./features/questionnaire/questionnaireSlice"
import Confirm from "./components/confirm"
import Error from "./components/error"
import { StoryButton } from "./components/storyButton"

const App: VFC = () => {
  const dispatch = useDispatch()
  const confirm = useSelector(confirmFlg)
  const flg = useSelector(openFlg)
  const answer1 = useSelector(result1)
  const answer2 = useSelector(result2)
  const answer3 = useSelector(result3)
  const answer4 = useSelector(result4)
  const checkbox = useSelector(selectCheckboxItems)
  const select = useSelector(selectVal)
  const text = useSelector(storedText)

  const val1 = answer1.value
  const val2 = answer2.value
  const val3 = answer3.value
  const val4 = answer4.value
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (val1 === "" || val2 === "" || val3 === "" || val4 === "" 
    || checkbox.length === 0 || select === "" || text === "") {
      dispatch(flgOpen(!flg))
    } else {
      dispatch(confirmOpen(!confirm))
    }
    e.preventDefault()
  }

  // setTimeout(() => {
  //   const modal = document.getElementById('overlay')
  //   modal.addEventListener('click', (e: any) => {
  //     if (confirm && e.target === modal) {
  //       dispatch(confirmOpen(!confirm))
  //     } else if (flg && e.target === modal) {
  //       dispatch(flgOpen(!flg))
  //     }
  //   })
  // },0)
  if (confirm) {
    setTimeout(() => {
      const modal = document.getElementById('overlay')
      modal.addEventListener('click', (e: any) => {
        console.log(e.target)
        if (e.target === modal) {
          dispatch(confirmOpen(!confirm))
        }
      })
    },0)
  }
  if (flg) {
    setTimeout(() => {
      const modal2 = document.getElementById('overlay2')
      modal2.addEventListener('click', (e: any) => {
        if (e.target === modal2) {
          dispatch(flgOpen(!flg))
        }
      })
    },0)
  }
  
  return (
    <div className="App">
      <header className="header">
        <div>
          <QuestionnaireTitle />
        </div>
      </header>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <Questions questionNum="1" />
          <TableSelect />
          <Questions questionNum="2" />
          <Checkbox />
          <Questions questionNum="3" />
          <SelectBox time="時間" />
          <Questions questionNum="4" />
          <InputText />
          <div className="buttonWrapper" id="buttonWrapper">
            <StoryButton
              id="button"
              handleClick={() => {}}
              label="回答状況を確認"
              primary
            />
          </div>
        </form>
      </div>
      {confirm ? (
        <div id="overlay">
          {text.length <= 400 ? (
            <Confirm />
          ) : (
            <Confirm excess />
          )}
        </div>
      ) : (
        <></>
      )}
      {flg ? (
        <div id="overlay2">
          <Error />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
