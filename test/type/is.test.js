const test = require('tape');
const is = require('./is.js');

test('Testing is', (t) => {
    t.assert(is(Array, []))

  t.end();
});
