import { render } from '@testing-library/react';
import Component from './Screen';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(<Component />);
  expect(console.log).toBeCalled();
});
