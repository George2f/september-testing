import React from 'react';
import classNames from 'classnames';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';
import Logo from '../Logo';
import { withGreeting } from '../../hoc';

interface HeaderProps extends GreetingProps {
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Header',
  children: undefined,
};

const Header : React.FC<HeaderProps> = ({ componentName, greeting, children }) => {
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

export default withGreeting(Header);
