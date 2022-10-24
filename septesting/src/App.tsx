import { FC, ReactNode } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import withGreeting from './hoc/withGreeting';
import {
  Error404Screen,
  PostScreen,
  PostsScreen,
} from './screens';
import logging, { GreetingProps } from './services/greeting';

interface AppProps extends GreetingProps {
  componentName?: string,
  router: ({ children }: {children: ReactNode}) => JSX.Element
}

const defaultProps = {
  componentName: 'App',
};

const App : FC<AppProps> = ({ componentName, greeting, router: Router }) => {
  logging.greet(greeting, componentName);
  return (
    <div id="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="posts" />} />
          <Route path="posts" element={<PostsScreen />} />
          <Route path="posts/:id" element={<PostScreen />} />
          <Route path="*" element={<Error404Screen />} />
        </Routes>
      </Router>
    </div>
  );
};

App.defaultProps = defaultProps;

export default withGreeting(App);
