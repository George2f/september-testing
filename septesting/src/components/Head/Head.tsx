import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { GreetingContext, greet } from '../../services/greeting';

type HeadProps = {
  componentName?:string,
  title?: string
};

const defaultProps = {
  componentName: 'Head',
  title: 'Septesting',
};

const Head : React.FC<HeadProps> = ({ componentName, title }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  return (
    <Helmet title={title} />
  );
};

Head.defaultProps = defaultProps;

export default Head;
