import { FC } from 'react';
import classNames from 'classnames';
import Link from '../link';
import styles from './Styles.module.scss';
import withGreeting from '../../hoc/withGreeting';
import IPost from '../../types/IPost';
import IGreetingProps from '../../types/IGreetingProps';

interface IPostItemProps extends IGreetingProps {
  post: IPost,
  link?: string
}

const PostComponent : FC<IPostItemProps> = ({
  componentName = 'PostItem',
  post,
  greet,
  link,
}) => {
  greet?.(componentName);

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
