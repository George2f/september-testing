import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './PostComponent';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  const post = { id: 1 };
  render(<Component post={post} link="" />);
  expect(console.log).toBeCalled();
});
