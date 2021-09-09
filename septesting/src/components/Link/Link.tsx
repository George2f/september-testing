import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Styles.module.scss';
import { greet, GreetingContext } from '../../services/greeting';

type StyledLinkProps = {
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

const Link : React.FC<StyledLinkProps> = ({
  className,
  to,
  children,
  componentName,
}) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <RouterLink className={classNames(styles.link, className)} to={to}>
      {children}
    </RouterLink>
  );
};

Link.defaultProps = defaultProps;

export default Link;
