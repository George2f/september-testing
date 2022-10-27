import { render } from '@testing-library/react';
import Component from './Head';

describe('Head', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    render(<Component greet={mock} componentName="Test" />);
    expect(mock).toBeCalledWith('Test');
  });
});
