import { useState } from 'react';
import endpoints from '../services/endpoints';
import { endpoints as endpointConsts } from '../consts';
import networking from '../services/networking';
import { Post } from '../types';

const usePosts = () : [Post[], (filter?: string) => void] => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const filterPosts = (filter = '', nonFiltered: Post[]) : void => {
    if (filter.length === 0) {
      setFilteredPosts(nonFiltered);
    } else {
      setFilteredPosts(nonFiltered.filter((post) => post.userId?.toString() === filter));
    }
  };

  const getPosts = (filter = '') => {
    if (posts.length > 0) {
      filterPosts(filter, posts);
    } else {
      networking.getRequest(endpointConsts.POSTS_ENDPOINT)
        .then((response) => {
          setPosts(response);
          filterPosts('', response);
        })
        .then((error) => console.log('Get Posts error:', error));
    }
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
