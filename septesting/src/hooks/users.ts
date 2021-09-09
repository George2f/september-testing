import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import consts from '../consts';
import { User } from '../types';

const useUsers = () : [ () => Promise<User[]>, User[]] => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () : Promise<User[]> => {
    return networking.getRequest(consts.endpoints.USERS_ENDPOINT)
      .then((response) => {
        setUsers(response);
        return response;
      })
      .catch((error) => console.log('Get Users error:', error));
  };

  return [getUsers, users];
};

const useUser = () : [User|undefined, (id : number) => void] => {
  const [user, setUser] = useState<User>();

  const getUser = (id : number) => {
    networking.getRequest(endpoints.singleUserEndpoint(id))
      .then((response) => setUser(response))
      .catch((error) => console.log('Get User error:', error));
  };

  return [user, getUser];
};

export {
  useUsers,
  useUser,
};

export default {
  useUsers,
  useUser,
};
