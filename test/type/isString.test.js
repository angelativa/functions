const test = require('tape');
const isString = require('./isString.js');

test('Testing isString', (test) => {
    test.false(isString({x:21}), "{x:21} is not string");
    test.false(isString([1, 2]), "[1, 2] is not string");
    test.false(isString({}), "{} is not string");
    test.false(isString(0), "0 is not string");
    test.false(isString([]), "[] is not string");
    test.false(isString(null), "null is not string");
    test.false(isString(undefined), "undefined is not string");
    test.false(isString(123), "123 is not string");
    test.false(isString(false), "false is not string");
    test.false(isString(new Map()), "new Map() is not string");

    test.true(isString('text'), "text is not string");
    test.true(isString(''), " is string");

    test.end();
});