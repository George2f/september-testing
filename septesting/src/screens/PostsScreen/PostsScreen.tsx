import React, { useContext } from 'react';
import { Screen } from '../../components';
import { greet, GreetingContext } from '../../services/greeting';

type PostsScreenProps = {
  componentName?: string
};

const defaultProps = {
  componentName: 'Posts Screen',
};

const PostsScreen : React.FC<PostsScreenProps> = ({ componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName); return (
    <Screen>
      Posts screen
    </Screen>
  );
};

PostsScreen.defaultProps = defaultProps;

export default PostsScreen;
