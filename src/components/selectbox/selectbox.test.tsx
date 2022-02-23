import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

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
});