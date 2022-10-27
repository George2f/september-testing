import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

interface IBodyProps extends IGreetingProps {
  title?: string,
  className?:string,
}

const Body : FC<PropsWithChildren<IBodyProps>> = ({
  className = 'Body',
  componentName,
  children,
  title,
  greet,
}) => {
  greet?.(componentName);

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
