import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import { greet, GreetingProps } from '../../services/greeting';
import Head from '../Head';
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

const Screen : FC<ScreenProps> = ({
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
