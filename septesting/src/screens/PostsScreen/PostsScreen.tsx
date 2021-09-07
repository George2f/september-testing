import React, { useEffect, useContext, useState } from 'react';
import { Header, Screen } from '../../components';
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

  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get('q');
  const [query, setQuery] = useState('');
  useEffect(() => {
    setQuery(urlQuery || '');
  }, [urlQuery]);

  const [posts, getPosts] = hooks.posts.usePosts();

  useEffect(() => {
    getPosts(query);
  }, []);

  return (
    <Screen>
      <Header>
        Header
      </Header>
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
