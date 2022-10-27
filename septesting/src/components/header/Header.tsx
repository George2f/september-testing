import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Styles.module.scss';
import Logo from '../logo';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';

const Header : FC<PropsWithChildren<IGreetingProps>> = ({
  componentName = 'Header',
  greet,
  children,
}) => {
  greet?.(componentName);

  return (
    <div className={classNames(styles.container, 'with-shadow')}>
      <div className={classNames(styles.content, 'centered-section')}>
        <Logo />
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default withGreeting(Header);
