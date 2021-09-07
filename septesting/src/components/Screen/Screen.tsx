import React, { useContext } from 'react';
import { GreetingContext, greet } from '../../services/greeting';

type ScreenProps = {
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Screen',
  children: 'undefined',
};

const Screen : React.FC<ScreenProps> = ({ componentName, children }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <div>
      {children}
    </div>
  );
};

Screen.defaultProps = defaultProps;

export default Screen;
