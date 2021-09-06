import React from 'react';
import { Screen } from '../../components';
import logging from '../../services/logging';

type PostsScreenProps = {
greeting: string,
componentName?: string
};

const defaultProps = {
  componentName: 'Posts Screen',
};

const PostsScreen : React.FC<PostsScreenProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);
  return (
    <Screen greeting={greeting}>
      Posts screen
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default PostsScreen;
