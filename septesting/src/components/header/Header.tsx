import classNames from 'classnames';
import { FC } from 'react';
import styles from './Styles.module.scss';
import Logo from '../logo';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import greet from '../../services/greet';

interface IHeaderProps extends IGreetingProps {
  componentName?: string,
  children?: React.ReactNode
}

const Header : FC<IHeaderProps> = ({
  componentName = 'Header',
  greeting,
  children,
}) => {
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

export default withGreeting(Header);
