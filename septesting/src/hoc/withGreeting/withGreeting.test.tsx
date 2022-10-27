import React from 'react';
import { render } from '@testing-library/react';
import withGreeting from './withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import { GreetProvider } from '../../contexts/greetContext';

test('Checks if component logs rendering', () => {
  const MockedComponent : React.FC<IGreetingProps> = ({ componentName, greet }) => {
    greet?.(componentName);
    return (
      <div>
        {componentName}
      </div>
    );
  };
  const mock = jest.fn();
  const WithGreeting = withGreeting(MockedComponent);
  const { getByText } = render(
    <GreetProvider greeting="Test greeting" callback={mock}>
      <WithGreeting componentName="Test name" />
    </GreetProvider>,
  );

  expect(getByText('Test name')).toBeTruthy();
  expect(mock).toBeCalledWith('Test greeting', 'Test name');
});
