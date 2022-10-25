import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', async () => {
  console.log = jest.fn();
  act(() => {
    render(
      <MemoryRouter>
        <App greeting="Test greeting" />
      </MemoryRouter>,
    );
  });
  expect(console.log).toBeCalled();
});
