import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders learn react link', async () => {
    const mock = jest.fn();
    act(() => {
      render(
        <MemoryRouter>
          <App greet={mock} componentName="Test" />
        </MemoryRouter>,
      );
    });
    expect(mock).toBeCalledWith('Test');
  });
});
