import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Component from './Error404Screen';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>,
  );
  expect(console.log).toBeCalled();
});
