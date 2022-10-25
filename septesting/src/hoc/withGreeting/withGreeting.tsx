import { FC } from 'react';
import greeting from '../../consts/greeting';
import IGreetingProps from '../../types/IGreetingProps';

function withGreeting<P extends IGreetingProps>(Component: React.ComponentType<P>)
: FC<P> {
  const ComponentWithGreeting = (props: P) => (
    <Component
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props as P}
      greeting={greeting.GREETING}
    />
  );

  return ComponentWithGreeting;
}

export default withGreeting;
