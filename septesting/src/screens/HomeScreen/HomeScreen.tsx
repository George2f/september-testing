import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from '../../components/Body';
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import withGreeting from '../../hoc/withGreeting';
import { greet, GreetingProps } from '../../services/greeting';

interface HomeScreenProps extends GreetingProps {
  componentName?: string
}

const defaultProps = {
  componentName: 'HomeScreen',
};

const HomeScreen : FC<HomeScreenProps> = ({ componentName, greeting }) => {
  greet(greeting, componentName);

  const navigate = useNavigate();
  navigate('/posts');
  return (
    <Screen title="Septesting">
      <Header />
      <Body title="Welcome home" />
    </Screen>
  );
};

HomeScreen.defaultProps = defaultProps;

export default withGreeting(HomeScreen);
