import { FC } from 'react';
import classNames from 'classnames';
import Link from '../link';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';
import withGreeting from '../../hoc/withGreeting';
import IPost from '../../types/IPost';

interface IPostItemProps extends GreetingProps {
  componentName?: string,
  post: IPost,
  link?: string
}

const PostComponent : FC<IPostItemProps> = ({
  componentName = 'PostItem',
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

export default withGreeting(PostComponent);
