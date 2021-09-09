import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header, Screen } from '../../components';
import { withGreeting } from '../../hoc';
import { greet, GreetingProps } from '../../services/greeting';

interface HomeScreenProps extends GreetingProps {
  componentName?: string
}

const defaultProps = {
  componentName: 'HomeScreen',
};

const HomeScreen : React.FC<HomeScreenProps> = ({ componentName, greeting }) => {
  greet(greeting, componentName);

  const history = useHistory();
  history.push('/posts');
  return (
    <Screen title="Septesting">
      <Header />
      <Body title="Welcome home" />
    </Screen>
  );
};

HomeScreen.defaultProps = defaultProps;

export default withGreeting(HomeScreen);
