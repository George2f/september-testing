import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import IComment from '../types/IComment';

const useComments = () : [IComment[], (postId : number) => void] => {
  const [comments, setComments] = useState<IComment[]>([]);

  const getComments = (postId: number) => {
    networking.getRequest(endpoints.postCommentsEndpoint(postId))
      .then((response) => setComments(response))
      .catch((error) => console.log('Get comments error:', error));
  };

  return [comments, getComments];
};

export default useComments;
