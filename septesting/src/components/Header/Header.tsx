import React, { useContext } from 'react';
import classNames from 'classnames';
import { GreetingContext, greet } from '../../services/greeting';
import styles from './Styles.module.scss';
import Logo from '../Logo';

type HeaderProps = {
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Header',
  children: undefined,
};

const Header : React.FC<HeaderProps> = ({ componentName, children }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

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

Header.defaultProps = defaultProps;

export default Header;
