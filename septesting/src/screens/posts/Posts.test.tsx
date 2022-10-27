import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Component from './Posts';

describe('Posts', () => {
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
