import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './HomeScreen';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(<Component />);
  expect(console.log).toBeCalled();
});
