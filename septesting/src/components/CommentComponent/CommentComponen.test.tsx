import { render } from '@testing-library/react';
import IComment from '../../types/IComment';
import Component from './CommentComponent';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  const comment : IComment = { id: 0, postId: 0 };
  render(<Component comment={comment} />);
  expect(console.log).toBeCalled();
});
