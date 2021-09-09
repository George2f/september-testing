import React from 'react';
import { Head } from '..';
import { withGreeting } from '../../hoc';
import { greet, GreetingProps } from '../../services/greeting';
import styles from './Styles.module.scss';

interface ScreenProps extends GreetingProps {
  componentName?: string,
  children?: React.ReactNode,
  title?:string,
}

const defaultProps = {
  componentName: 'Screen',
  children: undefined,
  title: undefined,
};

const Screen : React.FC<ScreenProps> = ({
  componentName,
  greeting,
  title,
  children,
}) => {
  greet(greeting, componentName);

  return (
    <div className={styles.container}>
      <Head title={title} />
      {children}
    </div>
  );
};

Screen.defaultProps = defaultProps;

export default withGreeting(Screen);
