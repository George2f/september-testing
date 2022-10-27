import { render } from '@testing-library/react';
import { GreetProvider, useGreeting } from './GreetContext';

const TestComponent = () => {
  const greet = useGreeting();
  greet?.('Test');
  return <div>test</div>;
};

describe('GreetContext', () => {
  it('should render', () => {
    const mock = jest.fn();
    render(
      <GreetProvider greeting="Test greeting" callback={mock}>
        <TestComponent />
      </GreetProvider>,
    );
    expect(mock).toHaveBeenCalledWith('Test greeting', 'Test');
  });
});
