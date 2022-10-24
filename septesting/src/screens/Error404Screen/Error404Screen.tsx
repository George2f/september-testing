import { FC } from 'react';
import Body from '../../components/Body';
import Header from '../../components/Header';
import Link from '../../components/Link';
import Screen from '../../components/Screen';
import withGreeting from '../../hoc/withGreeting';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';

interface Error404ScreenProps extends GreetingProps {
  componentName?: string
}

const defaultProps = {
  componentName: 'Error404Screen',
};

const Error404Screen : FC<Error404ScreenProps> = ({ componentName, greeting }) => {
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

Error404Screen.defaultProps = defaultProps;

export default withGreeting(Error404Screen);
