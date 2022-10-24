import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './Styles.module.scss';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import withGreeting from '../../hoc/withGreeting';

interface StyledLinkProps extends GreetingProps{
  className?: string|undefined,
  to: string,
  children?: React.ReactNode,
  componentName?: string
}

const defaultProps = {
  className: undefined,
  children: undefined,
  componentName: 'Link',
};

const Link : FC<StyledLinkProps> = ({
  className,
  to,
  children,
  componentName,
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

Link.defaultProps = defaultProps;

export default withGreeting(Link);
