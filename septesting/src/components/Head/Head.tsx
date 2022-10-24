import { FC } from 'react';
import { Helmet } from 'react-helmet';
import withGreeting from '../../hoc/withGreeting';
import { greet, GreetingProps } from '../../services/greeting';

interface HeadProps extends GreetingProps {
  componentName?:string,
  title?: string
}

const defaultProps = {
  componentName: 'Head',
  title: 'Septesting',
};

const Head : FC<HeadProps> = ({ componentName, title, greeting }) => {
  greet(greeting, componentName);
  return (
    <Helmet title={title} />
  );
};

Head.defaultProps = defaultProps;

export default withGreeting(Head);
