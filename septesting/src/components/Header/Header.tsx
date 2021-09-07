import React, { useContext } from 'react';
import { GreetingContext, greet } from '../../services/greeting';

type HeaderProps = {
  componentName?: string,
  children?: React.ReactNode
}

const defaultProps = {
  componentName: 'Header',
  children: undefined,
};

const Header : React.FC<HeaderProps> = ({ componentName, children }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  return (
    <div>
      {children}
    </div>
  );
};

Header.defaultProps = defaultProps;

export default Header;
