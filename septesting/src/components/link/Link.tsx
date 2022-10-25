import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './Styles.module.scss';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import greet from '../../services/greet';

interface ILinkProps extends IGreetingProps {
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
