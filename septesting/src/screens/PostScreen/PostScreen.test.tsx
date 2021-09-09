import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from './PostScreen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
  );
  expect(console.log).toBeCalled();
});
