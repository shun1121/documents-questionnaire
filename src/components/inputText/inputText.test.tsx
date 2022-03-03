import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { StoryInput } from './storyInput'

describe('input test', () => {
  it('input test', () => {
    const handleChange = jest.fn();
    const text = "you're goddamn right!"
    render(
      <Provider store={store}>
        <StoryInput text={text} handleChange={handleChange} />
      </Provider>
    )
    userEvent.type(screen.getByRole('textbox'), "you're goddamn right!");
    expect(screen.getByRole('textbox')).toHaveValue("you're goddamn right!")
    expect(handleChange).toHaveBeenCalledTimes(21);
  })
})