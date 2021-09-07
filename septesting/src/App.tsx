import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Head } from './components';
import {
  Error404Screen,
  HomeScreen,
  PostScreen,
  PostsScreen,
} from './screens';
import logging, { GreetingContext } from './services/greeting';

type AppProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'App',
};

const App : React.FC<AppProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  logging.greet(greeting, componentName);
  return (
    <>
      <Head />
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/posts">
            <PostsScreen />
          </Route>
          <Route path="/post/:id">
            <PostScreen />
          </Route>
          <Route path="/">
            <Error404Screen />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

App.defaultProps = defaultProps;

export default App;
