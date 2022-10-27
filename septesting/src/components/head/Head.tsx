import { FC } from 'react';
import { Helmet } from 'react-helmet';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';

interface IHeadProps extends IGreetingProps {
  title?: string
}

const Head : FC<IHeadProps> = ({
  componentName = 'Head',
  title = 'Septesting',
  greet,
}) => {
  greet?.(componentName);
  return (
    <Helmet title={title} />
  );
};

export default withGreeting(Head);
