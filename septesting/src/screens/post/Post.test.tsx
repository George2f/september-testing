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
    const mock = jest.fn();
    render(
      <MemoryRouter>
        <Component greet={mock} componentName="Test" />
      </MemoryRouter>,
    );
    expect(mock).toBeCalledWith('Test');
  });
});
