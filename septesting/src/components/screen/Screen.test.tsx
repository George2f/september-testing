import { render } from '@testing-library/react';
import Component from './Screen';

describe('Screen', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    render(<Component greet={mock} componentName="Test" />);
    expect(mock).toBeCalledWith('Test');
  });
});
