import { render } from '@testing-library/react';
import Component from './FilterInput';

describe('FilterInput', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    render(<Component
      greet={mock}
      componentName="Test"
      onQueryChange={() => 0}
      query=""
      onSubmit={() => 0}
    />);
    expect(mock).toBeCalledWith('Test');
  });
});
