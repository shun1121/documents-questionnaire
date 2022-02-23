import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { StoryTable } from './storyTable'
import { Provider } from 'react-redux'
import { store } from '../../app/store';
import { TableSelect } from './tableSelect'

test('renders table component', () => {
  render(
    <Provider store={store}>
      <TableSelect />
      {/* <StoryTable handleInputChange={handleInputChange} /> */}
    </Provider>
  )
  expect(screen.getByText(/英語の授業中、教師は英語のみで教えるべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/英語の例文や文章の音読をもっと取り入れるべきだ/)).toBeInTheDocument();
  expect(screen.getByText(/中学英語段階で基本の発音記号は教えておくべきだ。/)).toBeInTheDocument();
  expect(screen.getByText(/英語の授業では、英語らしく発音しなければならない環境を作るべきだ。/)).toBeInTheDocument();
})