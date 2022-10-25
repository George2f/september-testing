import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import IPost from '../types/IPost';

const usePost = (): [IPost|undefined, (postId: number) => void] => {
  const [post, setPost] = useState<IPost>();

  const getPost = (postId : number) => {
    networking.getRequest(endpoints.singlePostEndpoint(postId))
      .then((response) => {
        setPost(response);
      })
      .catch((error) => console.log('Get single post error: ', error));
  };

  return [post, getPost];
};

export default usePost;
