import React from 'react';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { Checkbox } from './checkbox';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders Checkbox component', () => {
  // const handleChange = jest.fn();
  const { getByText } = render(
    <Provider store={store}>
      <Checkbox />
    </Provider>
  );
  expect(getByText(/読む/)).toBeInTheDocument();
  expect(getByText(/聞く/)).toBeInTheDocument();
  expect(getByText(/話す/)).toBeInTheDocument();
  expect(getByText(/聞く/)).toBeInTheDocument();
});