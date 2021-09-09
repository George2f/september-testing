import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Screen } from '../../components';
import { GreetingContext, greet } from '../../services/greeting';

type HomeScreenProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'HomeScreen',
};

const HomeScreen : React.FC<HomeScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  const history = useHistory();
  history.push('/posts');
  return (<Screen>Home screen</Screen>);
};

HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
