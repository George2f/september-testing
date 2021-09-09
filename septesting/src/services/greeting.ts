export interface GreetingProps {
  greeting: string
}

const greet = (message: string, component = 'No name') : void => {
  console.log(`${message} ${component}`);
};

export default {
  greet,
};

export {
  greet,
};
