import { configureStore } from "@reduxjs/toolkit"
import QuestionnaireReducer from "../features/questionnaire/questionnaireSlice"

export const store = configureStore({
  reducer: {
    questionnaire: QuestionnaireReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
