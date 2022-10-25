import classNames from 'classnames';
import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import IComment from '../../types/IComment';
import styles from './Styles.module.scss';

interface ICommentItemProps extends GreetingProps {
  componentName?: string,
  comment: IComment,
}

const CommentItem: FC<ICommentItemProps> = ({
  componentName = 'CommentItem',
  greeting,
  comment,
}) => {
  greet(greeting, `${componentName}: ${comment.id}`);

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
