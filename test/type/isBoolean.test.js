const test = require('tape');
const isBoolean = require('./isBoolean.js');

test('Testing isBoolean', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined
    test.true(isBoolean(true), "true passed value is a boolean");
    test.true(isBoolean(false), "false passed value is a boolean");

    test.false(isBoolean('true'), "true passed value is not a boolean");
    test.false(isBoolean(21), "number passed value is not a boolean");
    test.false(isBoolean([]), "[] passed value is not a boolean");
    test.false(isBoolean({}), "{} passed value is not a boolean");
    test.false(isBoolean(null), "null passed value is not a boolean");
    test.false(isBoolean(undefined), "undefined passed value is not a boolean");
    test.end();
});