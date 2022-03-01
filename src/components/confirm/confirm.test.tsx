import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Confirm } from './confirm'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import {
  checkRadio,
  checkbox,
  selectBox,
  inputText,
} from "../../features/questionnaire/questionnaireSlice"
import { timeOptions } from '../../components/selectbox/selectBoxOptions'

test('render Confirm component', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <Confirm />
    </Provider>
  )
  const twoToFour = timeOptions[1][1]
  store.dispatch(checkRadio({ id: '1', value: '全く同意しない'}))
  store.dispatch(checkRadio({ id: '2', value: 'あまり同意しない'}))
  store.dispatch(checkRadio({ id: '3', value: '少し同意'}))
  store.dispatch(checkRadio({ id: '4', value: 'とても同意'}))
  store.dispatch(checkbox('読む'))
  store.dispatch(checkbox('書く'))
  store.dispatch(selectBox(twoToFour))
  store.dispatch(inputText("you're goddamn right!"))
  const state = store.getState().questionnaire
  const radioBtn1Val = state.result1.value
  const radioBtn2Val = state.result2.value
  const radioBtn3Val = state.result3.value
  const radioBtn4Val = state.result4.value
  const checkedItems = state.checkbox
  const selectedHour = state.selectValue
  const text = state.inputValue

  expect(getByText(/教師は英語のみで教えるべきだ。/)).toBeInTheDocument();
  expect(getByText(radioBtn1Val)).toBeInTheDocument();
  expect(getByText(/音読をもっと取り入れるべきだ。/)).toBeInTheDocument();
  expect(getByText(radioBtn2Val)).toBeInTheDocument();
  expect(getByText(/発音記号は教えておくべきだ。/)).toBeInTheDocument();
  expect(getByText(radioBtn3Val)).toBeInTheDocument();
  expect(getByText(/英語らしく発音できる環境を作るべきだ。/)).toBeInTheDocument();
  expect(getByText(radioBtn4Val)).toBeInTheDocument();
  expect(getByText(/深く学びたかった分野。/)).toBeInTheDocument();
  expect(checkedItems).toEqual(expect.not.arrayContaining(['聞く', '話す']));
  expect(getByText(/読む/)).toBeInTheDocument();
  expect(getByText(/書く/)).toBeInTheDocument();
  expect(getByText(/一週間の英語の学習時間。/)).toBeInTheDocument();
  expect(getByTestId('selectHour')).toHaveTextContent(`${selectedHour}時間`);
  expect(getByText(/本の英語教育に取り入れるべきもの。/)).toBeInTheDocument();
  expect(getByText(text)).toBeInTheDocument()
  expect(getByText(/閉じる/)).toBeInTheDocument();
});

test('render Confirm excess component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Confirm excess />
    </Provider>
  )
  expect(getByText('400字以内で記述してください。')).toBeInTheDocument()
  expect(getByText(/閉じる/)).toBeInTheDocument();
})
 