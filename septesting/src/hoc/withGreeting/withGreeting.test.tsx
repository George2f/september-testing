import React from 'react';
import { render } from '@testing-library/react';
import withGreeting from '.';
import { GreetingProps } from '../../services/greeting';
import { greeting as greetingConsts } from '../../consts';

interface MockProps extends GreetingProps {
  mock?: string,
}

const defaultProps = {
  mock: undefined,
};

test('Checks if component logs rendering', () => {
  const MockedComponent : React.FC<MockProps> = ({ mock, greeting }) => (
    <div>
      {mock || ''}
      {greeting}
    </div>
  );
  MockedComponent.defaultProps = defaultProps;
  const WithGreeting = withGreeting(MockedComponent);
  const { queryByText } = render(<WithGreeting />);

  expect(queryByText(greetingConsts.GREETING)).toBeTruthy();
});
