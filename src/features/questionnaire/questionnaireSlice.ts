import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

export interface QuestionnaireState {
  result1: { id: string, value: string },
  result2: { id: string, value: string },
  result3: { id: string, value: string },
  result4: { id: string, value: string },
  checkbox: string[],
  selectValue: string,
  inputValue: string,
  confirm: boolean,
  // isModalOpen: boolean
}

const initialState: QuestionnaireState = {
  result1: { id: '101', value: 'とても同意' },
  result2: { id: '102', value: 'とても同意' },
  result3: { id: '103', value: 'とても同意' },
  result4: { id: '104', value: 'とても同意' },
  checkbox: [],
  selectValue: '',
  inputValue: '',
  confirm: false,
  // isModalOpen: true
}

export const QuestionnaireSlice = createSlice({
  name: 'questionnaire',
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
        const filterCheckedItems = state.checkbox.filter((item: string) => item !== action.payload)
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
    // ModalOpen: (state, action) => {
    //   state.isModalOpen = action.payload
    // }
  }
})

export const { checkRadio, checkbox, selectBox, inputText, confirmOpen } = QuestionnaireSlice.actions
export const result1 = (state: RootState): QuestionnaireState["result1"] => state.questionnaire.result1
export const result2 = (state: RootState): QuestionnaireState["result2"] => state.questionnaire.result2
export const result3 = (state: RootState): QuestionnaireState["result3"] => state.questionnaire.result3
export const result4 = (state: RootState): QuestionnaireState["result4"] => state.questionnaire.result4
export const selectCheckboxItems = (state: RootState): QuestionnaireState["checkbox"] => state.questionnaire.checkbox
export const selectVal = (state: RootState): QuestionnaireState["selectValue"] => state.questionnaire.selectValue
export const storedText = (state: RootState): QuestionnaireState["inputValue"] => state.questionnaire.inputValue
export const confirmFlg = (state: RootState): QuestionnaireState["confirm"] => state.questionnaire.confirm
// export const isModalOpen = (state: RootState): QuestionnaireState["isModalOpen"] => state.questionnaire.isModalOpen
export default QuestionnaireSlice.reducer