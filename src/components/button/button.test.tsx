import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { StoryButton } from './storyButton'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

test('render inputText component', () => {
  render(
    <Provider store={store}>
      <StoryButton />
    </Provider>
  )
  screen.debug()
})