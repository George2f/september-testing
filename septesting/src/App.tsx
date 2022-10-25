import { FC, lazy, Suspense } from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import withGreeting from './hoc/withGreeting';
import logging, { GreetingProps } from './services/greeting';

const Error404 = lazy(() => import('./screens/error404'));
const Post = lazy(() => import('./screens/post'));
const Posts = lazy(() => import('./screens/posts'));
interface AppProps extends GreetingProps {
  componentName?: string,
}

const defaultProps = {
  componentName: 'App',
};

const App : FC<AppProps> = ({ componentName, greeting }) => {
  logging.greet(greeting, componentName);
  return (
    <div id="main-container">
      <Routes>
        <Route
          path="/"
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <Navigate to="posts" />
            </Suspense>
          )}
        />
        <Route
          path="posts"
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <Posts />
            </Suspense>
          )}
        />
        <Route
          path="posts/:id"
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <Post />
            </Suspense>
          )}
        />
        <Route
          path="*"
          element={(
            <Suspense fallback={<p>Loading...</p>}>
              <Error404 />
            </Suspense>
          )}
        />
      </Routes>
    </div>
  );
};

App.defaultProps = defaultProps;

export default withGreeting(App);
