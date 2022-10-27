import { FC, PropsWithChildren } from 'react';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import Head from '../head';
import styles from './Styles.module.scss';

interface IScreenProps extends IGreetingProps {
  title?:string,
}

const Screen : FC<PropsWithChildren<IScreenProps>> = ({
  componentName = 'Screen',
  greet,
  title,
  children,
}) => {
  greet?.(componentName);

  return (
    <div className={styles.container}>
      <Head title={title} />
      {children}
    </div>
  );
};

export default withGreeting(Screen);
