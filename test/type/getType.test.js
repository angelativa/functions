const test = require('tape');
const getType = require('./getType.js');

test('Testing is', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined
    test.true(getType([]) === 'array', '[] is array');
    test.true(getType({}) === 'object', '{} is object');
    test.true(getType(undefined) === 'undefined', 'undefined is undefined');
    test.true(getType(null) === 'null', 'null is null');
    test.true(getType(getType) === 'function', 'getType is a Function');
    test.true(getType('string') === 'string', 'string is a string');
    test.true(getType(1221) === 'number', '1221 is a number');
    test.true(getType(true) === 'boolean', 'true is a boolean');
    test.true(getType(false) === 'boolean', 'false is a boolean');
    // 继承对象
    test.true(getType(new Set([1, 2, 3]) === 'set'), 'set is a set');
    // function A () {}
    // test.true(getType(new A([1, 2, 3])) === 'a', 'A is a A');
    test.end();
});
