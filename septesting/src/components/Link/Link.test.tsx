import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from './Link';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <BrowserRouter>
      <Component to="" />
    </BrowserRouter>,
  );
  expect(console.log).toBeCalled();
});
