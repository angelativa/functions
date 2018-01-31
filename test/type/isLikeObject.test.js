const test = require('tape');
const isLikeObject = require('./isLikeObject.js');

test('Testing isLikeObject', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isLikeObject('21121'), 'donnot work for string');
    test.false(isLikeObject(false), 'donnot work for boolean');
    test.false(isLikeObject(undefined), 'donnot work for undefined');
    test.false(isLikeObject(null), 'donnot work for null');
    test.false(isLikeObject(1211), 'donnot work for number');

    test.true(isLikeObject({a: 21}), 'work for object');
    test.true(isLikeObject({}), '{} work for object');
    test.true(isLikeObject([12,34,2]), 'work for array');
    test.end();

});