import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './Styles.module.scss';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import withGreeting from '../../hoc/withGreeting';

interface ILinkProps extends GreetingProps{
  className?: string|undefined,
  to: string,
  children?: React.ReactNode,
  componentName?: string
}

const Link : FC<ILinkProps> = ({
  className,
  to,
  children,
  componentName = 'Link',
  greeting,
}) => {
  greet(greeting, componentName);

  return (
    <RouterLink
      className={classNames(styles.link, className)}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default withGreeting(Link);
