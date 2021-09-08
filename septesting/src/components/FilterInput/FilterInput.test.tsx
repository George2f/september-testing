import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './FilterInput';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(<Component onQueryChange={() => 0} query="" onSubmit={() => 0} />);
  expect(console.log).toBeCalled();
});
