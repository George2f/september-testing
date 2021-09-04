import React from 'react';
import { Screen } from '../../components';
import logging from '../../services/logging';

type PostScreenProps = {
  greeting: string,
  componentName?: string,
};

const defaultProps = {
  componentName: 'Post Screen',
};

const PostScreen : React.FC<PostScreenProps> = ({ greeting, componentName }) => {
  logging.greeting(greeting, componentName);
  return (
    <Screen greeting={greeting}>Post screen</Screen>
  );
};

PostScreen.defaultProps = defaultProps;

export default PostScreen;
