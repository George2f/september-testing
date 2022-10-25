import { FC } from 'react';
import { Helmet } from 'react-helmet';
import withGreeting from '../../hoc/withGreeting';
import greet from '../../services/greet';
import IGreetingProps from '../../types/IGreetingProps';

interface IHeadProps extends IGreetingProps {
  componentName?:string,
  title?: string
}

const Head : FC<IHeadProps> = ({
  componentName = 'Head',
  title = 'Septesting',
  greeting,
}) => {
  greet(greeting, componentName);
  return (
    <Helmet title={title} />
  );
};

export default withGreeting(Head);
