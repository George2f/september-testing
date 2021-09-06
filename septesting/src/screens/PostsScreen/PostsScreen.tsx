import React, { useEffect } from 'react';
import { Screen } from '../../components';
import hooks from '../../hooks';
import logging from '../../services/logging';

type PostsScreenProps = {
greeting: string,
componentName?: string
};

const defaultProps = {
  componentName: 'Posts Screen',
};

const PostsScreen : React.FC<PostsScreenProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);

  const [posts, getPosts] = hooks.posts.usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Screen greeting={greeting}>
      Posts screen
      {posts.map((post) => (
        <div key={post.id.toString()}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default PostsScreen;
