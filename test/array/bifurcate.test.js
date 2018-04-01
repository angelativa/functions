const test = require('tape');
const bifurcate = require('./bifurcate.js');

test('Testing bifurcate', (t) => {
  t.true(typeof bifurcate === 'function', 'bifurcate is a Function');
  t.deepEqual(
    bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]),
    [ ['beep', 'boop', 'bar'], ['foo'] ],
    " [ ['beep', 'boop', 'bar'], ['foo'] ]"
  );
  t.end();
});