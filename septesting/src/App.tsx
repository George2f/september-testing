import { FC, ReactNode } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import withGreeting from './hoc/withGreeting';
import Error404 from './screens/error404';
import Post from './screens/post';
import Posts from './screens/posts';
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
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

App.defaultProps = defaultProps;

export default withGreeting(App);
