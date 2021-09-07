import { greet } from './greeting';

test('renders learn react link', () => {
  console.log = jest.fn();
  greet('message', 'component');
  expect(console.log).toBeCalled();
});
