import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from './Error404Screen';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
  );
  expect(console.log).toBeCalled();
});
