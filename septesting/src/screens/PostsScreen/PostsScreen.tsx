import React, { useEffect, useContext } from 'react';
import { Screen } from '../../components';
import hooks from '../../hooks';
import { greet, GreetingContext } from '../../services/greeting';

type PostsScreenProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'Posts Screen',
};

const PostsScreen : React.FC<PostsScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  const [posts, getPosts] = hooks.posts.usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Screen>
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
