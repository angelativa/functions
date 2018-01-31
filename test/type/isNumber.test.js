const test = require('tape');
const isNumber = require('./isNumber.js');

test('Testing isNumber', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isNumber('21121'), 'donnot work for string');
    test.false(isNumber([12,34,2]), 'donnot work for array');
    test.false(isNumber({a: 21}), 'donnot work for object');
    test.false(isNumber(false), 'donnot work for boolean');
    test.false(isNumber(undefined), 'donnot work for undefined');
    test.false(isNumber(null), 'donnot work for null');


    test.true(isNumber(1211), 'work for number');
    test.end();

});