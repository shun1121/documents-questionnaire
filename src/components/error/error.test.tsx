import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Error } from './error'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('render inputText component', () => {
  render(
    <Provider store={store}>
      <Error />
    </Provider>
  )
  expect(screen.getByText(/全ての項目を記入してください。/)).toBeInTheDocument();
  expect(screen.getByText(/閉じる/)).toBeInTheDocument();
})
