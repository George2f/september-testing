import { render } from '@testing-library/react';
import Component from './Head';

describe('Head', () => {
  it('Checks if component logs rendering', () => {
    console.log = jest.fn();
    render(<Component />);
    expect(console.log).toBeCalled();
  });
});
