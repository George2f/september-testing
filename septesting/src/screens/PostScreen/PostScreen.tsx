import {
  FC,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import Body from '../../components/Body';
import CommentComponent from '../../components/CommentComponent';
import Header from '../../components/Header';
import Link from '../../components/Link';
import PostComponent from '../../components/PostComponent';
import Screen from '../../components/Screen';
import withGreeting from '../../hoc/withGreeting';
import hooks from '../../hooks';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';

interface PostScreenProps extends GreetingProps {
  componentName?: string,
}

const defaultProps = {
  componentName: 'PostScreen',
};

const PostScreen : FC<PostScreenProps> = ({ componentName, greeting }) => {
  greet(greeting, componentName);
  const { id } = useParams<{id:string}>();

  const [post, getPost] = hooks.posts.usePost();
  const [comments, getComments] = hooks.comments.useComments();
  const [user, getUser] = hooks.users.useUser();

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
          ? <PostComponent post={{ ...post, user }} /> : null}
        {comments.map((comment) => (
          <CommentComponent comment={comment} key={comment.id.toString()} />
        ))}
      </Body>
    </Screen>
  );
};

PostScreen.defaultProps = defaultProps;

export default withGreeting(PostScreen);
