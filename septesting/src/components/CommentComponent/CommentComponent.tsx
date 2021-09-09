import React from 'react';
import classNames from 'classnames';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import { Comment } from '../../types';
import styles from './Styles.module.scss';
import { withGreeting } from '../../hoc';

interface CommentComponentProps extends GreetingProps {
  componentName?: string,
  comment: Comment,
}

const defaultProps = {
  componentName: 'CommentComponent',
};

const CommentComponent
: React.FC<CommentComponentProps> = ({ componentName, greeting, comment }) => {
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

CommentComponent.defaultProps = defaultProps;

export default withGreeting(CommentComponent);
