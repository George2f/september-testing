import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
} from 'react';

interface IGreetingContext {
  greet: (name: string) => void;
}

const GreetContext = createContext<IGreetingContext | null>(null);

interface IGreetProviderProps {
  greeting: string;
  children: ReactNode;
  callback: (greeting: string, name: string) => void;
}

const GreetProvider: FC<PropsWithChildren<IGreetProviderProps>> = ({
  children,
  greeting,
  callback,
}) => {
  const value = useMemo(
    () => ({ greet: (name: string) => callback(greeting, name) }),
    [greeting, callback],
  );

  return (
    <GreetContext.Provider value={value}>
      {children}
    </GreetContext.Provider>
  );
};

const useGreeting = () => {
  const { greet } = useContext(GreetContext) || {};
  return greet;
};

export {
  GreetProvider,
  useGreeting,
};

export default GreetContext;
