import { FC, useEffect, useState } from 'react';
import Body from '../../components/Body';
import FilterInput from '../../components/FilterInput';
import Header from '../../components/Header';
import PostComponent from '../../components/PostComponent';
import Screen from '../../components/Screen';
import withGreeting from '../../hoc/withGreeting';
import hooks from '../../hooks';
import { greet, GreetingProps } from '../../services/greeting';

interface PostsScreenProps extends GreetingProps {
  componentName?: string
}

const defaultProps = {
  componentName: 'PostsScreen',
};

let filterDelayTimer : NodeJS.Timeout;

const PostsScreen : FC<PostsScreenProps> = ({ componentName, greeting }) => {
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
    <Screen title="Posts | Septesting">
      <Header>
        <FilterInput
          query={query}
          onSubmit={handleFilterSumbit}
          onQueryChange={handleQueryChange}
        />
      </Header>
      <Body title="Posts">
        {loading && <div>Loading...</div>}
        {posts.map((post) => (
          <PostComponent
            post={post}
            key={post.id.toString()}
            link={`/posts/${post.id}`}
            componentName={`post: ${post.id}`}
          />
        ))}
      </Body>
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default withGreeting(PostsScreen);
