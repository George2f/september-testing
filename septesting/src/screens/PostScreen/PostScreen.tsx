import React, {
  useEffect,
  useContext,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  Body,
  CommentComponent,
  Header,
  Link,
  PostComponent,
  Screen,
} from '../../components';
import hooks from '../../hooks';
import {
  GreetingContext,
  greet,
} from '../../services/greeting';
import styles from './Styles.module.scss';

type PostScreenProps = {
  componentName?: string,
};

const defaultProps = {
  componentName: 'PostScreen',
};

const PostScreen : React.FC<PostScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  const { id } = useParams<{id:string}>();

  const [post, getPost] = hooks.posts.usePost();
  const [comments, getComments] = hooks.comments.useComments();
  const [user, getUser] = hooks.users.useUser();

  useEffect(() => {
    getPost(parseInt(id, 10));
    getComments(parseInt(id, 10));
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

export default PostScreen;
