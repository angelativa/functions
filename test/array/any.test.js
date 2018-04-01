const test = require('tape');
const any = require('./any.js');

test('Testing any', (t) => {
  t.true(typeof any === 'function', 'any is a Function');
  t.true(any([0, 1, 2, 0], x => x >= 2), "any([0, 1, 2, 0], x => x >= 2);");
  t.true(any([0, 0, 1, 0]), "any([0, 0, 1, 0])");
  t.end();
});