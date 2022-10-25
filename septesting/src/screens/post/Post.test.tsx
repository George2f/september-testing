import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Component from './Post';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Post', () => {
  it('Checks if component logs rendering', () => {
    console.log = jest.fn();
    render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>,
    );
    expect(console.log).toBeCalled();
  });
});
