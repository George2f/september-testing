import React from 'react';
import classNames from 'classnames';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';
import { withGreeting } from '../../hoc';

interface BodyProps extends GreetingProps {
  componentName?: string,
  children?: React.ReactNode,
  title?: string,
  className?:string,
}

const defaultProps = {
  componentName: 'Body',
  children: undefined,
  title: undefined,
  className: undefined,
};

const Body : React.FC<BodyProps> = ({
  className,
  componentName,
  children,
  title,
  greeting,
}) => {
  greet(greeting, componentName);

  return (
    <div className={classNames(styles.container, className)}>
      <div className={classNames('centered-section', styles.content)}>
        {title ? (
          <h1 className={styles.title}>
            {title}
          </h1>
        ) : null}
        {children}
      </div>
    </div>
  );
};

Body.defaultProps = defaultProps;

export default withGreeting(Body);
