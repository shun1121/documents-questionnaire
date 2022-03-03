import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface QuestionnaireState {
  result1: { id: string; value: string }
  result2: { id: string; value: string }
  result3: { id: string; value: string }
  result4: { id: string; value: string }
  checkbox: string[]
  selectValue: string
  inputValue: string
  confirm: boolean
  flg: boolean
}

const questionnaireList: QuestionnaireState = {
  result1: { id: "", value: "" },
  result2: { id: "", value: "" },
  result3: { id: "", value: "" },
  result4: { id: "", value: "" },
  checkbox: [],
  selectValue: "",
  inputValue: "",
  confirm: false,
  flg: false,
}

const initialState: QuestionnaireState = questionnaireList

export const QuestionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    checkRadio: (state, action) => {
      if (action.payload.id === "1") {
        state.result1 = action.payload
      } else if (action.payload.id === "2") {
        state.result2 = action.payload
      } else if (action.payload.id === "3") {
        state.result3 = action.payload
      } else {
        state.result4 = action.payload
      }
    },
    checkbox: (state, action) => {
      if (state.checkbox.includes(action.payload)) {
        const filterCheckedItems = state.checkbox.filter(
          (item: string) => item !== action.payload
        )
        state.checkbox = filterCheckedItems
      } else {
        state.checkbox = [...state.checkbox, action.payload]
      }
    },
    selectBox: (state, action) => {
      state.selectValue = action.payload
    },
    inputText: (state, action) => {
      state.inputValue = action.payload
    },
    confirmOpen: (state, action) => {
      state.confirm = action.payload
    },
    flgOpen: (state, action) => {
      state.flg = action.payload
    },
  },
})

export const {
  checkRadio,
  checkbox,
  selectBox,
  inputText,
  confirmOpen,
  flgOpen,
} = QuestionnaireSlice.actions
export const result1 = (state: RootState): QuestionnaireState["result1"] =>
  state.questionnaire.result1
export const result2 = (state: RootState): QuestionnaireState["result2"] =>
  state.questionnaire.result2
export const result3 = (state: RootState): QuestionnaireState["result3"] =>
  state.questionnaire.result3
export const result4 = (state: RootState): QuestionnaireState["result4"] =>
  state.questionnaire.result4
export const selectCheckboxItems = (
  state: RootState
): QuestionnaireState["checkbox"] => state.questionnaire.checkbox
export const selectVal = (
  state: RootState
): QuestionnaireState["selectValue"] => state.questionnaire.selectValue
export const storedText = (
  state: RootState
): QuestionnaireState["inputValue"] => state.questionnaire.inputValue
export const confirmFlg = (state: RootState): QuestionnaireState["confirm"] =>
  state.questionnaire.confirm
export const openFlg = (state: RootState): QuestionnaireState["flg"] =>
  state.questionnaire.flg
export default QuestionnaireSlice.reducer
