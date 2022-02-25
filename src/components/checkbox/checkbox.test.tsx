import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { Checkbox } from './checkbox';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { StoryCheckbox } from './storyCheckbox';

test('renders Checkbox component', () => {
  // const handleChange = jest.fn();
  const { getByText } = render(
    <Provider store={store}>
      <Checkbox />
      {/* <StoryCheckbox
        color="black"
        fontSize="15px"
        handleChange={handleChange}
        type="checkbox"
        name="checkbox"
        value="読む"
        checked={checkedItems.includes("読む")}
      /> */}
    </Provider>
  );
  expect(getByText(/読む/)).toBeInTheDocument();
  expect(getByText(/聞く/)).toBeInTheDocument();
  expect(getByText(/話す/)).toBeInTheDocument();
  expect(getByText(/聞く/)).toBeInTheDocument();
});