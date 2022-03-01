import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { StoryButton } from './storyButton'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('render button component', () => {
  const handleClick = jest.fn();
  render(
    <Provider store={store}>
      <StoryButton
        id="button"
        handleClick={handleClick}
        label="回答状況を確認"
        primary
      />
    </Provider>
  )

  const button = screen.getByText(/回答状況を確認/)
  // expect(button).toHaveStyle('background-color: ButtonFace')
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1);
})