import React from 'react';
import logging from '../../services/logging';

type ScreenProps = {
  greeting: string,
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Screen',
  children: 'undefined',
};

const Screen : React.FC<ScreenProps> = ({ greeting, componentName, children }) => {
  logging.greeting(greeting, componentName);
  return (
    <div>
      {children}
    </div>
  );
};

Screen.defaultProps = defaultProps;

export default Screen;
