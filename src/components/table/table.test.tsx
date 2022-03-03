import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { StoryTable } from './storyTable'
import { Provider } from 'react-redux'
import { store } from '../../app/store';

test('renders table component', () => {
  const handleInputChange = jest.fn();
  const { getByText, container, getByTestId } = render(
    <Provider store={store}>
      <StoryTable handleInputChange={handleInputChange} />
    </Provider>
  )
  expect(getByText(/英語の授業中、教師は英語のみで教えるべきだ。/)).toBeInTheDocument();
  expect(getByText(/英語の例文や文章の音読をもっと取り入れるべきだ/)).toBeInTheDocument();
  expect(getByText(/中学英語段階で基本の発音記号は教えておくべきだ。/)).toBeInTheDocument();
  expect(getByText(/英語の授業では、英語らしく発音しなければならない環境を作るべきだ。/)).toBeInTheDocument();

  expect(container.getElementsByClassName('td1').length).toEqual(4)
  expect(container.getElementsByClassName('td2').length).toEqual(4)
  expect(container.getElementsByClassName('td3').length).toEqual(4)
  expect(container.getElementsByClassName('td4').length).toEqual(4)

  const q1 = getByTestId('button1-1')
  const q2 = getByTestId('button1-2')
  const q3 = getByTestId('button1-3')
  const q4 = getByTestId('button1-4')

  fireEvent.click(q2)
  expect(handleInputChange).toHaveBeenCalledTimes(1);
  expect(q1).not.toBeChecked()
  expect(q2).toBeChecked()
  expect(q3).not.toBeChecked()
  expect(q4).not.toBeChecked()
})
