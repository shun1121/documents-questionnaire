import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import { checkbox } from "../../features/questionnaire/questionnaireSlice"
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { StoryCheckbox } from './storyCheckbox';

test('renders Checkbox component', () => {
  store.dispatch(checkbox('読む'))
  const state = store.getState().questionnaire
  const checkedItems = state.checkbox
  const handleChange = jest.fn();

  const { getByText } = render(
    <Provider store={store}>
      <StoryCheckbox
        data-testid='checkbox1'
        color="black"
        fontSize="15px"
        handleChange={handleChange}
        type="checkbox"
        name="checkbox"
        value="読む"
        checked={checkedItems.includes("読む")}
      />
    </Provider>
  );

  const checkBtn = getByText('読む')
  fireEvent.click(checkBtn)
  expect(handleChange).toBeCalledTimes(1)
  expect(getByText(/読む/)).toBeInTheDocument();
});
