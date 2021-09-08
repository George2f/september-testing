import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterInput, Header, Screen } from '../../components';
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
      {loading && <div>Loading...</div>}
      { posts.map((post) => (
        <div key={post.id.toString()}>
          <Link to={`/post/${post.id}`}>
            <h4>{post.user?.username}</h4>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default PostsScreen;
