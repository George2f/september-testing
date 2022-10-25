import { render } from '@testing-library/react';
import Component from './FilterButton';

describe('FilterButton', () => {
  it('Checks if component logs rendering', () => {
    console.log = jest.fn();
    render(<Component onClick={() => 0} />);
    expect(console.log).toBeCalled();
  });
});
