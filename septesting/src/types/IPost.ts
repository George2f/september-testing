import IUser from './IUser';

interface IPost {
  id: number,
  userId?: number,
  title?: string,
  body?: string,
  user?: IUser
}

export default IPost;
