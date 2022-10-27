import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './Styles.module.scss';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';

interface ILinkProps extends IGreetingProps {
  className?: string|undefined,
  to: string,
}

const Link : FC<PropsWithChildren<ILinkProps>> = ({
  className,
  to,
  children,
  componentName = 'Link',
  greet,
}) => {
  greet?.(componentName);

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
