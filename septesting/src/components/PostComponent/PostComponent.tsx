import React from 'react';
import classNames from 'classnames';
import Link from '../Link';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import { Post } from '../../types';
import styles from './Styles.module.scss';
import { withGreeting } from '../../hoc';

interface PostComponentProps extends GreetingProps {
  componentName?: string,
  post: Post,
  link?: string
}

const defaultProps = {
  componentName: 'PostComponent',
  link: undefined,
};

const PostComponent : React.FC<PostComponentProps> = ({
  componentName,
  post,
  greeting,
  link,
}) => {
  greet(greeting, componentName);

  const LinkComponent = link ? Link : 'span';

  return (
    <div className={classNames(styles.container, 'with-shadow')}>
      <div className={styles.titleContainer}>
        <h3 className={styles.username}>
          {`${post.user?.username} - ${post.user?.email}`}
        </h3>
        <h2 className={styles.title}>
          <LinkComponent to={link || ''}>
            {post.title}
          </LinkComponent>
        </h2>
      </div>
      <div className={styles.bodyContainer}>
        <p className={styles.body}>
          {post.body}
        </p>
      </div>
      { link ? (
        <div className={styles.footerContainer}>
          <LinkComponent to={link} className={styles.detailsLink}>
            More details
          </LinkComponent>
        </div>
      ) : null}
    </div>
  );
};

PostComponent.defaultProps = defaultProps;

export default withGreeting(PostComponent);
