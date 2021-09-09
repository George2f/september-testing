import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { withGreeting } from './hoc';
import {
  Error404Screen,
  HomeScreen,
  PostScreen,
  PostsScreen,
} from './screens';
import logging, { GreetingProps } from './services/greeting';

interface AppProps extends GreetingProps {
  componentName?: string
}

const defaultProps = {
  componentName: 'App',
};

const App : React.FC<AppProps> = ({ componentName, greeting }) => {
  logging.greet(greeting, componentName);
  return (
    <div id="main-container">
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
    </div>
  );
};

App.defaultProps = defaultProps;

export default withGreeting(App);
