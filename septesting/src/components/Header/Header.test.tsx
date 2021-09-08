import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './Header';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(<Component />);
  expect(console.log).toBeCalled();
});
