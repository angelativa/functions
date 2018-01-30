const test = require('tape');
const is = require('./is.js');

test('Testing is', (test) => {
    test.true(is(Array, []));
    test.true(is(Object, []));
    test.end();
});
