/* eslint-disable no-console */
module.exports = () => {
  console.log('Hello from util.');
  console.log('es6+ syntax test:');
  const foo = { message: 'working' };
  console.log(foo?.message);
};
