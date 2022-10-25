import { render } from '@testing-library/react';
import Component from './FilterInput';

describe('FilterInput', () => {
  it('Checks if component logs rendering', () => {
    console.log = jest.fn();
    render(<Component onQueryChange={() => 0} query="" onSubmit={() => 0} />);
    expect(console.log).toBeCalled();
  });
});
