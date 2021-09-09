import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Component from './HomeScreen';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <Router>
      <Component />
    </Router>,
  );
  expect(console.log).toBeCalled();
});
