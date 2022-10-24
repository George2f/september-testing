import { render } from '@testing-library/react';
import Component from './CommentComponent';
import { Comment } from '../../types';

test('Checks if component logs rendering', () => {
  console.log = jest.fn();
  const comment : Comment = { id: 0, postId: 0 };
  render(<Component comment={comment} />);
  expect(console.log).toBeCalled();
});
