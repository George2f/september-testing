import { useState } from 'react';
import networking from '../services/networking';
import endpoints from '../consts/endpoints';
import IUser from '../types/IUser';

const useUsers = () : [ () => Promise<IUser[]>, IUser[]] => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () : Promise<IUser[]> => {
    return networking.getRequest(endpoints.USERS_ENDPOINT)
      .then((response) => {
        setUsers(response);
        return response;
      })
      .catch((error) => console.log('Get Users error:', error));
  };

  return [getUsers, users];
};

export default useUsers;
