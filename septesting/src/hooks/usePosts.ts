import { useState } from 'react';
import endpoints from '../consts/endpoints';
import networking from '../services/networking';
import useUsers from './useUsers';
import IPost from '../types/IPost';
import IUser from '../types/IUser';

const filterPosts = (filter = '', nonFiltered: IPost[] = []) : IPost[] => {
  if (filter.length === 0) {
    return nonFiltered;
  }

  return nonFiltered.filter((post) => {
    const included = post.user?.username.toLowerCase().includes(filter.toLowerCase());
    return included;
  });
};

const fetchPosts = async (
  getUsers: () => Promise<IUser[]>,
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>,
  setFilteredPosts : React.Dispatch<React.SetStateAction<IPost[]>>,
) => {
  return networking.getRequest(endpoints.POSTS_ENDPOINT)
    .then((responsePosts : IPost[]) => {
      getUsers().then((responseUsers) => {
        const enhancedPosts = responsePosts.map((post) => {
        // eslint-disable-next-line no-param-reassign
          post.user = responseUsers.find((user) => user.id === post.userId);
          return post;
        });
        setPosts(enhancedPosts);
        setFilteredPosts(filterPosts('', enhancedPosts));
      });
    })
    .catch((error) => console.log('Get Posts error:', error));
};

const usePosts = () : [IPost[], (filter?: string, callback?: () =>void) => void] => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [getUsers] = useUsers();
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const getPosts = (filter = '', callback: () =>void = () => null) => {
    if (posts.length > 0) {
      setFilteredPosts(filterPosts(filter, posts));
      return callback?.();
    }

    return fetchPosts(getUsers, setPosts, setFilteredPosts).finally(callback);
  };

  return [filteredPosts, getPosts];
};

export default usePosts;
