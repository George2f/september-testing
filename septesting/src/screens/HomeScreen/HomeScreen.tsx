import React from 'react';
import { Screen } from '../../components';
import logging from '../../services/logging';

type HomeScreenProps = {
  greeting : string,
  componentName?: string
};

const defaultProps = {
  componentName: 'Home Screen',
};

const HomeScreen : React.FC<HomeScreenProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);
  return (<Screen greeting={greeting}>Home screen</Screen>);
};

HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
