import React, { useContext } from 'react';
import { Screen } from '../../components';
import { GreetingContext, greet } from '../../services/greeting';

type Error404ScreenProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'Error 404 Screen',
};

const Error404Screen :React.FC<Error404ScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  return (
    <Screen>
      Error 404
    </Screen>
  );
};

Error404Screen.defaultProps = defaultProps;

export default Error404Screen;
