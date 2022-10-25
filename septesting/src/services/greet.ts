const greet = (message = 'No greeting,', component = 'No name') : void => {
  console.log(`${message} ${component}`);
};

export default greet;
