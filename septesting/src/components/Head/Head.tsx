import React from 'react';
import { Helmet } from 'react-helmet';
import logging from '../../services/logging';

type HeadProps = {
greeting:string,
componentName?:string
};

const defaultProps = {
  componentName: 'Head',
};

const Head : React.FC<HeadProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);
  return (
    <Helmet />
  );
};

Head.defaultProps = defaultProps;

export default Head;
