import { render } from '@testing-library/react';
import { GreetProvider, useGreeting } from './GreetContext';

const TestComponent = () => {
  const greeting = useGreeting();
  return <div>{greeting}</div>;
};

describe('GreetContext', () => {
  it('should render', () => {
    const { getByText } = render(
      <GreetProvider greeting="Test greeting">
        <TestComponent />
      </GreetProvider>,
    );
    expect(getByText('Test greeting')).toBeTruthy();
  });
});
