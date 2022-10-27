import { render } from '@testing-library/react';
import Component from './PostItem';

describe('PostItem', () => {
  it('Checks if component logs rendering', () => {
    const post = { id: 1 };
    const mock = jest.fn();
    render(<Component
      post={post}
      link=""
      greet={mock}
      componentName="Test"
    />);
    expect(mock).toBeCalledWith('Test');
  });
});
