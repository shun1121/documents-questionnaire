import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { Checkbox } from './checkbox';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('InputText', () => {
  test('renders Checkbox component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Checkbox />
      </Provider>
    );
    expect(getByText(/おおお/)).toBeInTheDocument();
    // screen.debug();

    // screen.getByText('Search:');
  });
});