import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import consts from '../consts';
import { User } from '../types';

const useUsers = () : [User[], () => void] => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = () => {
    networking.getRequest(consts.endpoints.USERS_ENDPOINT)
      .then((response) => setUsers(response))
      .catch((error) => console.log('Get Users error:', error));
  };

  return [users, getUsers];
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

export default {
  useUsers,
  useUser,
};
