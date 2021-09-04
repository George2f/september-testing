import logging from './logging';

test('renders learn react link', () => {
  console.log = jest.fn();
  logging.greeting('message', 'component');
  expect(console.log).toBeCalled();
});
