import { FC } from 'react';
import { useGreeting } from '../../contexts/greetContext';
import IGreetingProps from '../../types/IGreetingProps';

function withGreeting<P extends IGreetingProps>(Component: React.ComponentType<P>)
: FC<P> {
  const ComponentWithGreeting = (props: P) => {
    const greeting = useGreeting();
    return (
      <Component
    // eslint-disable-next-line react/jsx-props-no-spreading
        {...props as P}
        greeting={greeting}
      />
    );
  };

  return ComponentWithGreeting;
}

export default withGreeting;
