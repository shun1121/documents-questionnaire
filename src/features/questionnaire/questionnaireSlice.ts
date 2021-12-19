import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

export interface QuestionnaireState {
  result1: { id: string, value: string },
  result2: { id: string, value: string },
  result3: { id: string, value: string },
  result4: { id: string, value: string },
  checkbox: string[],
  selectValue: string,
  inputValue: string
}

const initialState: QuestionnaireState = {
  result1: { id: '101', value: 'とても同意' },
  result2: { id: '102', value: 'とても同意' },
  result3: { id: '103', value: 'とても同意' },
  result4: { id: '104', value: 'とても同意' },
  checkbox: [],
  selectValue: '',
  inputValue: '生徒が英語を「できる」と感じる授業形態を導入する'
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
    }
  }
})

export const { checkRadio, checkbox, selectBox } = QuestionnaireSlice.actions
export const selectCheckboxItems = (state: RootState): QuestionnaireState["checkbox"] => state.questionnaire.checkbox
export const selectVal = (state: RootState): QuestionnaireState["selectValue"] => state.questionnaire.selectValue
export default QuestionnaireSlice.reducer