import { render } from '@testing-library/react';
import IComment from '../../types/IComment';
import Component from './CommentItem';

describe('CommentItem', () => {
  it('Checks if component logs rendering', () => {
    const mock = jest.fn();
    const comment : IComment = { id: 0, postId: 0 };
    render(<Component greet={mock} componentName="Test" comment={comment} />);
    expect(mock).toBeCalledWith('Test: 0');
  });
});
