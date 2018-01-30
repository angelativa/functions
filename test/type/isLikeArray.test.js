const test = require('tape');
const isLikeArray = require('./isLikeArray.js');

test('Testing isLikeArray', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.true(isLikeArray('21121'), 'work for string');
    test.true(isLikeArray([12,34,2]), 'work for array');
    test.false(isLikeArray({a: 21}), 'donnot work for object');
    test.false(isLikeArray(false), 'donnot work for boolean');
    test.false(isLikeArray(null), 'donnot work for null');
    test.false(isLikeArray(1211), 'donnot work for number');
    test.false(isLikeArray(undefined), 'donnot work for undefined');
    test.end();

});