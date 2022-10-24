import { FC } from 'react';
import { GreetingProps } from '../../services/greeting';
import { greeting as greetingConsts } from '../../consts';

function withGreeting<P extends GreetingProps>(Component: React.ComponentType<P>)
: FC<P> {
  const ComponentWithGreeting = (props: P) => (
    <Component
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props as P}
      greeting={greetingConsts.GREETING}
    />
  );

  return ComponentWithGreeting;
}

export default withGreeting;
