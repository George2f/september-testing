import { endpoints } from '../consts';

const resolveHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  version: '1.0',
});

export const getRequest = (
  endpoint = '/',
  url = endpoints.BASE_URL,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) : Promise<any> => fetch(url + endpoint, {
  method: 'GET',
  headers: resolveHeaders(),
}).then((response) => response.json());

export default {
  getRequest,
};
