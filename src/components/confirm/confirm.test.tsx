import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Confirm } from './confirm'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('render inputText component', () => {
  render(
    <Provider store={store}>
      <Confirm />
    </Provider>
  )
  expect(screen.getByText(/教師は英語のみで教えるべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/音読をもっと取り入れるべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/発音記号は教えておくべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/英語らしく発音できる環境を作るべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/深く学びたかった分野。/)).toBeInTheDocument();
  expect(screen.getByText(/一週間の英語の学習時間。/)).toBeInTheDocument();
  expect(screen.getByText(/本の英語教育に取り入れるべきもの。/)).toBeInTheDocument();
  expect(screen.getByText(/閉じる/)).toBeInTheDocument();
})