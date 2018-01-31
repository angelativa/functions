const test = require('tape');
const isNull = require('./isNull.js');

test('Testing isNull', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isNull('21121'), 'donnot work for string');
    test.false(isNull([12,34,2]), 'donnot work for array');
    test.false(isNull({a: 21}), 'donnot work for object');
    test.false(isNull(false), 'donnot work for boolean');
    test.false(isNull(1211), 'donnot work for number');
    test.false(isNull(undefined), 'donnot work for undefined');

    test.true(isNull(null), 'work for null');
    test.end();

});