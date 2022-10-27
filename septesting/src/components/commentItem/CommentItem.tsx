import classNames from 'classnames';
import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import IComment from '../../types/IComment';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

interface ICommentItemProps extends IGreetingProps {
  comment: IComment,
}

const CommentItem: FC<ICommentItemProps> = ({
  componentName = 'CommentItem',
  greet,
  comment,
}) => {
  greet?.(`${componentName}: ${comment.id}`);

  return (
    <div className={classNames(styles.container, 'with-shadow')}>
      <div className={styles.titleContainer}>
        <h3 className={styles.username}>
          {`${comment?.email}: ${comment?.name} `}
        </h3>
      </div>
      <div className={styles.bodyContainer}>
        <p className={styles.body}>
          {comment?.body}
        </p>
      </div>
    </div>
  );
};

export default withGreeting(CommentItem);
