import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
} from 'react';

interface IGreetingContext {
  greeting: string;
}

const GreetContext = createContext<IGreetingContext | null>(null);

interface IGreetProviderProps {
  greeting: string;
  children: ReactNode;
}

const GreetProvider: FC<IGreetProviderProps> = ({ children, greeting }) => {
  const value = useMemo(
    () => ({ greeting }),
    [greeting],
  );

  return (
    <GreetContext.Provider value={value}>
      {children}
    </GreetContext.Provider>
  );
};

const useGreeting = () => {
  const { greeting } = useContext(GreetContext) || {};

  return greeting;
};

export {
  GreetProvider,
  useGreeting,
};

export default GreetContext;
