const test = require('tape');
const isNil = require('./isNil.js');

test('Testing isNil', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isNil('21121'), 'donnot work for string');
    test.false(isNil([12,34,2]), 'donnot work for array');
    test.false(isNil({a: 21}), 'donnot work for object');
    test.false(isNil(false), 'donnot work for boolean');
    test.false(isNil(1211), 'donnot work for number');

    test.true(isNil(null), 'work for null');
    test.true(isNil(undefined), 'work for undefined');
    test.end();

});