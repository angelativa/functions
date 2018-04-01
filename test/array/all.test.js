const test = require('tape');
const all = require('./all.js');

test('Testing all', (t) => {
  t.true(typeof all === 'function', 'all is a Function');
  t.true(all([4, 2, 3], x => x > 1), "all([4, 2, 3], x => x > 1);");
  t.true(all([1, 2, 3]), "all([1, 2, 3])");
  t.end();
});