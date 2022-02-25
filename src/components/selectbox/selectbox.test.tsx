import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';

import { SelectBox } from './selectbox';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders SelectBox component', () => {
  const { getByDisplayValue, getByText } = render(
    <Provider store={store}>
      <SelectBox time="時間" />
    </Provider>
  );
  expect(getByDisplayValue(/時間を選択してください。/)).toBeInTheDocument();
  expect(getByText('時間')).toBeInTheDocument()

  const dropdown = screen.getByRole('combobox')
  fireEvent.change(dropdown, {
    target: { value: "0~2" }
  });
  expect(screen.getByText("0~2")).toBeInTheDocument();
  fireEvent.change(dropdown, {
    target: { value: "2~4" }
  });
  expect(screen.getByText("2~4")).toBeInTheDocument();
  fireEvent.change(dropdown, {
    target: { value: "4~6" }
  });
  expect(screen.getByText("4~6")).toBeInTheDocument();
  fireEvent.change(dropdown, {
    target: { value: "6~8" }
  });
  expect(screen.getByText("6~8")).toBeInTheDocument();
  fireEvent.change(dropdown, {
    target: { value: "8~" }
  });
  expect(screen.getByText("8~")).toBeInTheDocument();
});