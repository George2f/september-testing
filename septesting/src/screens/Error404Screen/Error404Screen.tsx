import React from 'react';
import { Screen } from '../../components';
import logging from '../../services/logging';

type Error404ScreenProps = {
  greeting: string,
  componentName?: string
};

const defaultProps = {
  componentName: 'Error 404 Screen',
};

const Error404Screen :React.FC<Error404ScreenProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);

  return (
    <Screen greeting={greeting}>
      Error 404
    </Screen>
  );
};

Error404Screen.defaultProps = defaultProps;

export default Error404Screen;
