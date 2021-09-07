import React from 'react';

const greet = (message : string, component = 'No name') : void => {
  console.log(`${message} ${component}`);
};

const GreetingContext = React.createContext('No greeting from');

export default {
  greet,
  GreetingContext,
};

export {
  greet,
  GreetingContext,
};
