import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { InputText } from './inputText'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('render inputText component', () => {
  render(
    <Provider store={store}>
      <InputText />
    </Provider>
  )
  screen.debug()
})