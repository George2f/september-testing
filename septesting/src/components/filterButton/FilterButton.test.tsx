import { render } from '@testing-library/react';
import Component from './FilterButton';

describe('FilterButton', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    render(<Component greet={mock} componentName="Test" onClick={() => null} />);
    expect(mock).toBeCalledWith('Test');
  });
});
