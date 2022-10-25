import classNames from 'classnames';
import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';

interface IBodyProps extends GreetingProps {
  componentName?: string,
  children?: React.ReactNode,
  title?: string,
  className?:string,
}

const Body : FC<IBodyProps> = ({
  className = 'Body',
  componentName = undefined,
  children = undefined,
  title = undefined,
  greeting = undefined,
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

export default withGreeting(Body);
