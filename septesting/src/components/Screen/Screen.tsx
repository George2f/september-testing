import React, { useContext } from 'react';
import { Head } from '..';
import { GreetingContext, greet } from '../../services/greeting';
import styles from './Styles.module.scss';

type ScreenProps = {
  componentName?: string,
  children?: React.ReactNode,
  title?:string,
}

const defaultProps = {
  componentName: 'Screen',
  children: undefined,
  title: undefined,
};

const Screen : React.FC<ScreenProps> = ({ componentName, title, children }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <div className={styles.container}>
      <Head title={title} />
      {children}
    </div>
  );
};

Screen.defaultProps = defaultProps;

export default Screen;
