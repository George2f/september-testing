import { FC } from 'react';
import Body from '../../components/body';
import Header from '../../components/header';
import Link from '../../components/link';
import Screen from '../../components/screen';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';

const Error404 : FC<IGreetingProps> = ({
  componentName = 'Error404',
  greet,
}) => {
  greet?.(componentName);
  return (
    <Screen title="Page not found | Septesting">
      <Header />
      <Body title="Error 404">
        <Link to="/posts">
          {'< Back to posts'}
        </Link>
      </Body>
    </Screen>
  );
};

export default withGreeting(Error404);
