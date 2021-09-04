const greeting = (message : string, component = 'No name') : void => {
  console.log(`${message} ${component}`);
};

export default {
  greeting,
};
