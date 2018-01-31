const test = require('tape');
const isObject = require('./isObject.js');

test('Testing isObject', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isObject('21121'), 'donnot work for string');
    test.false(isObject(false), 'donnot work for boolean');
    test.false(isObject(undefined), 'donnot work for undefined');
    test.false(isObject(1211), 'donnot work for number');
    test.false(isObject(null), 'donnot work for null');

    test.true(isObject([12, 34, 2]), 'work for array');
    test.true(isObject({a: 21}), 'work for object');
    test.true(isObject({}), '{} work for object');
    test.end();

});