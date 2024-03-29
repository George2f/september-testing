import {
  FC,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import Body from '../../components/body';
import CommentItem from '../../components/commentItem';
import Header from '../../components/header';
import Link from '../../components/link';
import PostItem from '../../components/postItem';
import Screen from '../../components/screen';
import withGreeting from '../../hoc/withGreeting';
import useComments from '../../hooks/useComments';
import usePost from '../../hooks/usePost';
import useUser from '../../hooks/useUser';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

const Post : FC<IGreetingProps> = ({
  componentName = 'Post',
  greet,
}) => {
  greet?.(componentName);
  const { id } = useParams<{id:string}>();

  const [post, getPost] = usePost();
  const [comments, getComments] = useComments();
  const [user, getUser] = useUser();

  useEffect(() => {
    getPost(parseInt(id || '0', 10));
    getComments(parseInt(id || '0', 10));
  }, []);

  useEffect(() => {
    if (post?.userId) {
      getUser(post?.userId);
    }
  }, [post]);

  return (
    <Screen title={`${post?.title} | Septesting`}>
      <Header />
      <Body title={post?.title}>
        <p className={styles.backLink}>
          <Link to="/posts">
            {'< Back to posts'}
          </Link>
        </p>
        {post
          ? <PostItem post={{ ...post, user }} /> : null}
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id.toString()} />
        ))}
      </Body>
    </Screen>
  );
};

export default withGreeting(Post);
