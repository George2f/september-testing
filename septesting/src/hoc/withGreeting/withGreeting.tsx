import { FC } from 'react';
import { useGreeting } from '../../contexts/greetContext';
import IGreetingProps from '../../types/IGreetingProps';

function withGreeting<P extends IGreetingProps>(Component: React.ComponentType<P>)
: FC<P> {
  const ComponentWithGreeting = (props: P) => {
    const greet = useGreeting();
    return (
      <Component
        greet={greet}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props as P}
      />
    );
  };

  return ComponentWithGreeting;
}

export default withGreeting;
