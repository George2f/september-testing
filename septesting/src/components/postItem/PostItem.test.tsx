import { render } from '@testing-library/react';
import Component from './PostItem';

describe('PostItem', () => {
  it('Checks if component logs rendering', () => {
    console.log = jest.fn();
    const post = { id: 1 };
    render(<Component post={post} link="" />);
    expect(console.log).toBeCalled();
  });
});
