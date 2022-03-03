import { store } from './app/store';
import {
  checkRadio,
  checkbox,
  selectBox,
  inputText,
  confirmOpen,
  flgOpen
} from "./features/questionnaire/questionnaireSlice"
import { timeOptions } from './components/selectbox/selectBoxOptions'

describe('RTK tests', () => {
  test('check initial radiobutton state', () => {
    const state = store.getState().questionnaire
    const result1 = state.result1
    expect(result1.id).toBe('');
    expect(result1.value).toBe('');
  })
  
  test('check if radioButtons work with RTK', () => {
    store.dispatch(checkRadio({ id: '1', value: '全く同意しない'}))
    const state1 = store.getState().questionnaire
    const result1 = state1.result1
    expect(result1.id).toBe('1');
    expect(result1.value).toBe('全く同意しない');
  
    store.dispatch(checkRadio({ id: '2', value: 'とても同意'}))
    const state2 = store.getState().questionnaire
    const result2 = state2.result2
    expect(result2.id).toBe('2');
    expect(result2.value).toBe('とても同意');
  });
  
  test('check dispatched checkbox items', () => {
    store.dispatch(checkbox('読む'))
    store.dispatch(checkbox('書く'))
    const state = store.getState().questionnaire
    const checkedItems = state.checkbox
    expect(checkedItems.length).toEqual(2);
    expect(checkedItems).toEqual(expect.arrayContaining(['読む', '書く']));
  })

  test('check dispatched selectBox item', () => {
    const options = timeOptions
    const firstOption = options[0][1]
    store.dispatch(selectBox(firstOption))
    const state = store.getState().questionnaire
    const selectedItem = state.selectValue
    expect(selectedItem).toBe(firstOption)
  })

  test('check inputText dispatched finely', () => {
    store.dispatch(inputText("you're goddamn right!"))
    const state = store.getState().questionnaire
    const inputVal = state.inputValue
    expect(inputVal).toBe("you're goddamn right!")
  })

  test('check confirmOpen dispatched finely', () => {
    store.dispatch(confirmOpen(true))
    const state = store.getState().questionnaire
    const confirmVal = state.confirm
    expect(confirmVal).toBe(true)
  })

  test('check flgOpen dispatched finely', () => {
    store.dispatch(flgOpen(true))
    const state = store.getState().questionnaire
    const flgVal = state.flg
    expect(flgVal).toBe(true)
  })
})
