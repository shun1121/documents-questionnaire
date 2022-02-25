import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputText } from './inputText'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

describe('input test', () => {
  it('input test', () => {
    render(
      <Provider store={store}>
        <InputText />
      </Provider>
    )
    const inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, { target: { value: "you're goddamn right!" }});
    expect(inputValue).toHaveValue("you're goddamn right!");
  })
})
