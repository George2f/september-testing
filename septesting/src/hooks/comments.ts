import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import { Comment } from '../types';

const useComments = () : [Comment[], (postId : number) => void] => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = (postId: number) => {
    networking.getRequest(endpoints.postCommentsEndpoint(postId))
      .then((response) => setComments(response))
      .catch((error) => console.log('Get comments error:', error));
  };

  return [comments, getComments];
};

export default {
  useComments,
};
