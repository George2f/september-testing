import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Screen } from '../../components';
import hooks from '../../hooks';
import { GreetingContext, greet } from '../../services/greeting';

type PostScreenProps = {
  componentName?: string,
};

const defaultProps = {
  componentName: 'PostScreen',
};

const PostScreen : React.FC<PostScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  const { id } = useParams<{id:string}>();

  const [post, getPost] = hooks.posts.usePost();
  const [comments, getComments] = hooks.comments.useComments();
  const [user, getUser] = hooks.users.useUser();

  useEffect(() => {
    getPost(parseInt(id, 10));
    getComments(parseInt(id, 10));
  }, []);

  useEffect(() => {
    if (post?.userId) {
      getUser(post?.userId);
    }
  }, [post]);

  return (
    <Screen>
      <h1>
        Post screen
      </h1>
      <h3>
        {user?.name}
      </h3>
      <h2>
        {post?.title}
      </h2>
      <strong>
        {post?.body}
      </strong>
      {comments.map((comment) => (
        <div key={comment.id.toString()}>
          <p><strong>{comment.email}</strong></p>
          <p>{comment?.body}</p>
        </div>
      ))}
    </Screen>
  );
};

PostScreen.defaultProps = defaultProps;

export default PostScreen;
