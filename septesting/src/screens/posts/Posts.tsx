import { FC, useEffect, useState } from 'react';
import Body from '../../components/body';
import FilterInput from '../../components/filterInput';
import Header from '../../components/header';
import PostItem from '../../components/postItem';
import Screen from '../../components/screen';
import withGreeting from '../../hoc/withGreeting';
import usePosts from '../../hooks/usePosts';
import greet from '../../services/greet';
import IGreetingProps from '../../types/IGreetingProps';

interface IPostsProps extends IGreetingProps {
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
          <PostItem
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
