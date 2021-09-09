import { useState } from 'react';
import endpoints from '../services/endpoints';
import { endpoints as endpointConsts } from '../consts';
import networking from '../services/networking';
import { Post, User } from '../types';
import { useUsers } from './users';

const filterPosts = (filter = '', nonFiltered: Post[]) : Post[] => {
  if (filter.length === 0) {
    return nonFiltered;
  }

  return nonFiltered.filter((post) => {
    const included = post.user?.username.toLowerCase().includes(filter.toLowerCase());
    return included;
  });
};

const fetchPosts = async (
  getUsers: () => Promise<User[]>,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
  setFilteredPosts : React.Dispatch<React.SetStateAction<Post[]>>,
) => {
  return networking.getRequest(endpointConsts.POSTS_ENDPOINT)
    .then((responsePosts : Post[]) => {
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

const usePosts = () : [Post[], (filter?: string, callback?: () =>void) => void] => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [getUsers] = useUsers();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const getPosts = (filter = '', callback?: () =>void) => {
    if (posts.length > 0) {
      setFilteredPosts(filterPosts(filter, posts));
      return callback?.();
    }

    return fetchPosts(getUsers, setPosts, setFilteredPosts).finally(callback);
  };

  return [filteredPosts, getPosts];
};

const usePost = (): [Post|undefined, (postId: number) => void] => {
  const [post, setPost] = useState<Post>();

  const getPost = (postId : number) => {
    networking.getRequest(endpoints.singlePostEndpoint(postId))
      .then((response) => {
        setPost(response);
      })
      .catch((error) => console.log('Get single post error: ', error));
  };

  return [post, getPost];
};

export default {
  usePosts,
  usePost,
};
