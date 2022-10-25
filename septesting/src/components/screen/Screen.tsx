import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import { greet, GreetingProps } from '../../services/greeting';
import Head from '../head';
import styles from './Styles.module.scss';

interface IScreenProps extends GreetingProps {
  componentName?: string,
  children?: React.ReactNode,
  title?:string,
}

const Screen : FC<IScreenProps> = ({
  componentName = 'Screen',
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

export default withGreeting(Screen);
