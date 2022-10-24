import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Component from './HomeScreen';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (mockHistoryPush),
}));

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>,
  );
  expect(console.log).toBeCalled();
});
