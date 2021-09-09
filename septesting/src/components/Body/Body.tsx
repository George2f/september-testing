import React, { useContext } from 'react';
import classNames from 'classnames';
import { GreetingContext, greet } from '../../services/greeting';
import styles from './Styles.module.scss';

type BodyProps = {
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Body',
  children: undefined,
};

const Body : React.FC<BodyProps> = ({ componentName, children }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <div className={classNames('centered-section', styles.container)}>
      {children}
    </div>
  );
};

Body.defaultProps = defaultProps;

export default Body;
