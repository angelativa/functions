const test = require('tape');
const isEmpty = require('./isEmpty.js');

test('Testing isEmpty', (test) => {
    test.false(isEmpty({x:21}), "{x:21} is not empty");
    test.false(isEmpty([1, 2]), "[1, 2] is not empty");
    test.false(isEmpty('text'), "text is not empty");

    test.true(isEmpty({}), "{} is empty");
    test.true(isEmpty(''), " is empty");
    test.true(isEmpty(0), "0 is empty");
    test.true(isEmpty([]), "[] is empty");
    test.true(isEmpty(null), "null empty");
    test.true(isEmpty(undefined), "undefined empty");
    test.true(isEmpty(123), "123 empty");
    test.true(isEmpty(true), "true empty");
    test.true(isEmpty(new Map()), "new Map() empty");

    test.end();
});