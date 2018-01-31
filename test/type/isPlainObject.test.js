const test = require('tape');
const isPlainObject = require('./isPlainObject.js');

test('Testing isPlainObject', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isPlainObject('21121'), 'donnot work for string');
    test.false(isPlainObject([12,34,2]), 'donnot work for array');
    test.false(isPlainObject(false), 'donnot work for boolean');
    test.false(isPlainObject(undefined), 'donnot work for undefined');
    test.false(isPlainObject(null), 'donnot work for null');
    test.false(isPlainObject(1211), 'donnot work for number');

    test.true(isPlainObject({a: 21}), 'work for object');
    test.true(isPlainObject({}), '{} work for object');
    test.end();

});