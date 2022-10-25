import { FC } from 'react';
import Body from '../../components/body';
import Header from '../../components/header';
import Link from '../../components/link';
import Screen from '../../components/screen';
import withGreeting from '../../hoc/withGreeting';
import greet from '../../services/greet';
import IGreetingProps from '../../types/IGreetingProps';

interface IError404Props extends IGreetingProps {
  componentName?: string
}

const Error404 : FC<IError404Props> = ({
  componentName = 'Error404',
  greeting,
}) => {
  greet(greeting, componentName);
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
