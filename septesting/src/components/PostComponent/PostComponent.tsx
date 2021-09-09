import React, { useContext } from 'react';
import classNames from 'classnames';
import Link from '../Link';
import { GreetingContext, greet } from '../../services/greeting';
import { Post } from '../../types';
import styles from './Styles.module.scss';

type PostComponentProps = {
  componentName?: string,
  post: Post,
  link: string
}

const defaultProps = {
  componentName: 'Screen',
};

const PostComponent : React.FC<PostComponentProps> = ({ componentName, post, link }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <div className={classNames(styles.container, 'with-shadow')}>
      <div className={styles.titleContainer}>
        <p className={styles.username}>{post.user?.username}</p>
        <h2 className={styles.title}>
          <Link to={link}>
            {post.title}
          </Link>
        </h2>
      </div>
      <div className={styles.bodyContainer}>
        <p className={styles.body}>
          {post.body}
        </p>
      </div>
      <div className={styles.footerContainer}>
        <Link to={link} className={styles.detailsLink}>
          More details
        </Link>
      </div>
    </div>
  );
};

PostComponent.defaultProps = defaultProps;

export default PostComponent;
