import endpoints from '../consts/endpoints';

const singlePostEndpoint = (id : number) : string => `${endpoints.POSTS_ENDPOINT}/${id}`;

const singleUserEndpoint = (id : number) : string => `${endpoints.USERS_ENDPOINT}/${id}`;

const userFromEmailEndpoint = (email : string) : string => `${endpoints.USERS_ENDPOINT}?email=${email}`;

const postCommentsEndpoint = (id : number) : string => `${endpoints.POSTS_ENDPOINT}/${id}/comments`;

export default {
  singlePostEndpoint,
  singleUserEndpoint,
  userFromEmailEndpoint,
  postCommentsEndpoint,
};
