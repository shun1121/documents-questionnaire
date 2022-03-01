import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Confirm from './components/confirm/confirm'
import App from './App'
// import App from './App'

// const renderBook = (book: BookState): RenderResult =>
//   render(
//     <Provider store={store}>
//       <BookInfo title={book.title} author={book.author} id={book.id} />
//     </Provider>
//   );

describe('input test', () => {
  it('App test', () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const button = getByText(/回答状況を確認/)
    screen.debug(button)
    // expect(getByText(/回答状況を確認/)).toBeInTheDocument();
    // screen.debug()
    // userEvent.type(screen.getByRole('textbox'), "you're goddamn right!");
    // expect(screen.getByRole('textbox')).toHaveValue("you're goddamn right!")
    // expect(handleChange).toHaveBeenCalledTimes(21);
  })
})
