import React, { useContext } from 'react';
import { Screen } from '../../components';
import { GreetingContext, greet } from '../../services/greeting';

type PostScreenProps = {
  componentName?: string,
};

const defaultProps = {
  componentName: 'Post Screen',
};

const PostScreen : React.FC<PostScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);
  return (
    <Screen>Post screen</Screen>
  );
};

PostScreen.defaultProps = defaultProps;

export default PostScreen;
