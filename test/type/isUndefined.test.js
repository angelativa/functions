const test = require('tape');
const isUndefined = require('./isUndefined.js');

test('Testing isUndefined', (test) => {
    test.false(isUndefined({x:21}), "{x:21} is not undefined");
    test.false(isUndefined([1, 2]), "[1, 2] is not undefined");
    test.false(isUndefined({}), "{} is not undefined");
    test.false(isUndefined(0), "0 is not undefined");
    test.false(isUndefined([]), "[] is not undefined");
    test.false(isUndefined(null), "null is not undefined");
    test.false(isUndefined(123), "123 is not undefined");
    test.false(isUndefined(false), "false is not undefined");
    test.false(isUndefined(new Map()), "new Map() is not undefined");
    test.false(isUndefined('text'), "text is not undefined");
    test.false(isUndefined(''), " is undefined");

    test.true(isUndefined(undefined), "undefined is not undefined");

    test.end();
});