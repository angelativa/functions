const test = require('tape');
const bifurcateBy = require('./bifurcateBy.js');

test('Testing bifurcateBy', (t) => {
  t.true(typeof bifurcateBy === 'function', 'bifurcateBy is a Function');
  t.deepEqual(
    bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'),
    [ ['beep', 'boop', 'bar'], ['foo'] ],
    " [ ['beep', 'boop', 'bar'], ['foo'] ]"
  );
  t.end();
});