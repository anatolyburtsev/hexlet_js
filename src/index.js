/* eslint-disable no-console */
import _ from 'lodash';

console.log('blah');

console.log(_.intersection([1, 2], [2, 3]));

console.log(_.last(['one', 'two']));

function sayHi(name) {
  return `Result: ${name}`;
}

console.log(sayHi('pew'));
