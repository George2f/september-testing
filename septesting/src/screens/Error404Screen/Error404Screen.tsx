import React from 'react';
import {
  Body,
  Header,
  Link,
  Screen,
} from '../../components';
import { withGreeting } from '../../hoc';
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

const Error404Screen :React.FC<Error404ScreenProps> = ({ componentName, greeting }) => {
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
