import React, { useContext } from 'react';
import classNames from 'classnames';
import {
  GreetingContext,
  greet,
} from '../../services/greeting';
import { Comment } from '../../types';
import styles from './Styles.module.scss';

type CommentComponentProps = {
  componentName?: string,
  comment: Comment,
}

const defaultProps = {
  componentName: 'CommentComponent',
};

const CommentComponent : React.FC<CommentComponentProps> = ({ componentName, comment }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, `${componentName}: ${comment.id}`);

  return (
    <div className={classNames(styles.container, 'with-shadow')}>
      <div className={styles.titleContainer}>
        <h3 className={styles.username}>
          {`${comment?.name} - ${comment?.email}`}
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

CommentComponent.defaultProps = defaultProps;

export default CommentComponent;
