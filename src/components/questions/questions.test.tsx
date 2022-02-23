import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { Questions } from './questions';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

test('renders Checkbox component', () => {
  const { getByTestId } = render(
    // <Provider store={store}>
    <>
      <Questions questionNum="1" />
      <Questions questionNum="2" />
      <Questions questionNum="3" />
      <Questions questionNum="4" />
    </>  
    // </Provider>
  );
  expect(getByTestId('q1')).toHaveTextContent("1. 以下の質問にお答えください。");
  expect(getByTestId('q2')).toHaveTextContent("2. 英語4技能でもっと学びたかった分野はどれですか。(複数選択有り)");
  expect(getByTestId('q3')).toHaveTextContent("3. あなたは一週間に英語を何時間勉強していますか。");
  expect(getByTestId('q4')).toHaveTextContent("4. 日本の英語教育に取り入れるべきだと思うものを記述してください(400字以内)");
});