import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Component from './Error404';

describe('Error404', () => {
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
