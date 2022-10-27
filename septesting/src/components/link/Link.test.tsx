import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Component from './Link';

describe('Link', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    render(
      <BrowserRouter>
        <Component to="" greet={mock} componentName="Test" />
      </BrowserRouter>,
    );
    expect(mock).toBeCalledWith('Test');
  });
});
