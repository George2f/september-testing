import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { GreetingContext, greet } from '../../services/greeting';

type HeadProps = {
  componentName?:string
};

const defaultProps = {
  componentName: 'Head',
};

const Head : React.FC<HeadProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  return (
    <Helmet />
  );
};

Head.defaultProps = defaultProps;

export default Head;
