import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './FilterButton';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(<Component onClick={() => 0} />);
  expect(console.log).toBeCalled();
});
