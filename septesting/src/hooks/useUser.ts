import { useState } from 'react';
import endpoints from '../services/endpoints';
import networking from '../services/networking';
import IUser from '../types/IUser';

const useUser = () : [IUser|undefined, (id : number) => void] => {
  const [user, setUser] = useState<IUser>();

  const getUser = (id : number) => {
    networking.getRequest(endpoints.singleUserEndpoint(id))
      .then((response) => setUser(response))
      .catch((error) => console.log('Get User error:', error));
  };

  return [user, getUser];
};

export default useUser;
