import React, { useEffect, useContext, useState } from 'react';
import {
  Body,
  FilterInput, Header, PostComponent, Screen,
} from '../../components';
import hooks from '../../hooks';
import { greet, GreetingContext } from '../../services/greeting';

type PostsScreenProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'PostsScreen',
};

let filterDelayTimer : NodeJS.Timeout;

const PostsScreen : React.FC<PostsScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get('q');

  const [query, setQuery] = useState(urlQuery || '');
  const [loading, setLoading] = useState(false);

  const [posts, getPosts] = hooks.posts.usePosts();

  const loadPosts = (filter: string) => {
    if (loading) return;
    setLoading(true);
    getPosts(filter, () => {
      setLoading(false);
    });
  };

  const handleFilterSumbit = () => {
    loadPosts(query);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    clearTimeout(filterDelayTimer);
    filterDelayTimer = setTimeout(() => {
      loadPosts(value);
    }, 500);
  };

  useEffect(() => {
    loadPosts(query);
  }, []);

  return (
    <Screen>
      <Header>
        <FilterInput
          query={query}
          onSubmit={handleFilterSumbit}
          onQueryChange={handleQueryChange}
        />
      </Header>
      <Body>
        {posts.length === 0 && <div>Loading...</div>}
        {posts.map((post) => (
          <PostComponent
            post={post}
            key={post.id.toString()}
            link={`/post/${post.id}`}
            componentName={`post: ${post.id}`}
          />
        ))}
      </Body>
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default PostsScreen;
