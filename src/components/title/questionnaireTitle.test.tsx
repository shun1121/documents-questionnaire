import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { QuestionnaireTitle } from './questionnaireTitle';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders Checkbox component', () => {
  render(
    <Provider store={store}>
      <QuestionnaireTitle />
    </Provider>
  )
  screen.getByText(/日本の英語教育に関するアンケート/)
  expect(screen.getByText(/日本の英語教育に関するアンケート/)).toBeInTheDocument();
});