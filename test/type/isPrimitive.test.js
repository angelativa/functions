const test = require('tape');
const isPrimitive = require('./isPrimitive.js');

test('Testing isPrimitive', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isPrimitive([12,34,2]), 'donnot work for array');
    test.false(isPrimitive({a: 21}), 'donnot work for object');

    test.true(isPrimitive(false), 'work for boolean');
    test.true(isPrimitive('21121'), 'work for string');
    test.true(isPrimitive(null), 'work for null');
    test.true(isPrimitive(1211), 'work for number');
    test.true(isPrimitive(undefined), 'work for undefined');
    test.end();

});