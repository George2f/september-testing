import React from 'react';
import { render } from '@testing-library/react';
import withGreeting from './withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import { GreetProvider } from '../../contexts/greetContext';

interface MockProps extends IGreetingProps {
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
  const { getByText } = render(
    <GreetProvider greeting="Test greeting">
      <WithGreeting />
    </GreetProvider>,
  );

  expect(getByText('Test greeting')).toBeTruthy();
});
