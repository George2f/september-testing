import React from 'react';
import { Helmet } from 'react-helmet';
import { withGreeting } from '../../hoc';
import { greet, GreetingProps } from '../../services/greeting';

interface HeadProps extends GreetingProps {
  componentName?:string,
  title?: string
}

const defaultProps = {
  componentName: 'Head',
  title: 'Septesting',
};

const Head : React.FC<HeadProps> = ({ componentName, title, greeting }) => {
  greet(greeting, componentName);
  return (
    <Helmet title={title} />
  );
};

Head.defaultProps = defaultProps;

export default withGreeting(Head);
