export interface GreetingProps {
  greeting?: string
}

const greet = (message = 'No greeting,', component = 'No name') : void => {
  console.log(`${message} ${component}`);
};

export default {
  greet,
};

export {
  greet,
};
