const test = require('tape');
const isFunction = require('./isFunction.js');

test('Testing isFunction', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined
    test.true(isFunction(isFunction), "isFunction passed is function");

    test.false(isFunction(true), "true passed is function");
    test.false(isFunction(false), "false passed is function");
    test.false(isFunction('true'), "true passed is not function");
    test.false(isFunction(21), "number passed is not function");
    test.false(isFunction([]), "[] passed is not function");
    test.false(isFunction({}), "{} passed is not function");
    test.false(isFunction(null), "null passed is not function");
    test.false(isFunction(undefined), "undefined passed is not function");
    test.end();
});