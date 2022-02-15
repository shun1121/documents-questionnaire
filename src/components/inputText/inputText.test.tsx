import React from 'react';
import { render, screen } from '@testing-library/react';

import { InputText } from './inputText';

describe('InputText', () => {
  test('renders InputText component', () => {
    screen.debug();
    render(<InputText />);

    // screen.getByText('Search:');
  });
});