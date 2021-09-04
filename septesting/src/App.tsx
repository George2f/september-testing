import React from 'react';
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
import logging from './services/logging';

type AppProps = {
greeting: string,
componentName?: string
};

const defaultProps = {
  componentName: 'App',
};

const App : React.FC<AppProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);
  return (
    <>
      <Head greeting={greeting} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeScreen greeting={greeting} />
          </Route>
          <Route path="/posts">
            <PostsScreen greeting={greeting} />
          </Route>
          <Route path="/post/:id">
            <PostScreen greeting={greeting} />
          </Route>
          <Route path="/">
            <Error404Screen greeting={greeting} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

App.defaultProps = defaultProps;

export default App;
