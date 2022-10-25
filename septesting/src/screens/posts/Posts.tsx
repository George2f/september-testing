import { FC, useEffect, useState } from 'react';
import Body from '../../components/Body';
import FilterInput from '../../components/FilterInput';
import Header from '../../components/Header';
import PostComponent from '../../components/PostComponent';
import Screen from '../../components/Screen';
import withGreeting from '../../hoc/withGreeting';
import usePosts from '../../hooks/usePosts';
import { greet, GreetingProps } from '../../services/greeting';

interface IPostsProps extends GreetingProps {
  componentName?: string
}

let filterDelayTimer : NodeJS.Timeout;

const Posts : FC<IPostsProps> = ({ componentName = 'Posts', greeting }) => {
  greet(greeting, componentName);

  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get('q');

  const [query, setQuery] = useState(urlQuery || '');
  const [loading, setLoading] = useState(false);

  const [posts, getPosts] = usePosts();

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

export default withGreeting(Posts);
