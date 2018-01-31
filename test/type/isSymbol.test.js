const test = require('tape');
const isSymbol = require('./isSymbol.js');

test('Testing isSymbol', (test) => {
    test.false(isSymbol({x:21}), "{x:21} is not string");
    test.false(isSymbol([1, 2]), "[1, 2] is not string");
    test.false(isSymbol({}), "{} is not string");
    test.false(isSymbol(0), "0 is not string");
    test.false(isSymbol([]), "[] is not string");
    test.false(isSymbol(null), "null is not string");
    test.false(isSymbol(undefined), "undefined is not string");
    test.false(isSymbol(123), "123 is not string");
    test.false(isSymbol(false), "false is not string");
    test.false(isSymbol(new Map()), "new Map() is not string");
    test.false(isSymbol('text'), "text is not string");

    test.true(isSymbol(Symbol('x')), "Symbol is not string");

    test.end();
});