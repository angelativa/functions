const test = require('tape');
const is = require('./is.js');

test('Testing is', (test) => {
    test.true(typeof is === 'function', 'is is a Function');
    test.true(is(Array, [1]), `Works for arrays with data`);
    test.true(is(Array, []), `Works for empty arrays`);
    test.false(is(Array, {}), `Works for arrays, not objects`);

    test.true(is(Object, {}), `Works for objects`);
    test.true(is(Map, new Map()), `Works for maps`);
    test.true(is(RegExp, /./g), `Works for regular expressions`);
    test.true(is(Set, new Set()), `Works for sets`);
    test.true(is(WeakMap, new WeakMap()), `Works for weak maps`);
    test.true(is(WeakSet, new WeakSet()), `Works for weak sets`);

    test.false(is(String, ''), `Works for strings - returns false for primitive`);
    test.true(is(String, new String('')), `Works for strings - returns true when using constructor`);

    test.false(is(Number, 1), `Works for numbers - returns false for primitive`);
    test.true(is(Number, new Number('10')), `Works for numbers - returns true when using constructor`);

    test.false(is(Boolean, false), `Works for booleans - returns false for primitive`);

    test.true(is(Boolean, new Boolean(false)), `Works for booleans - returns true when using constructor`);
    test.true(is(Function, () => null), `Works for functions`);
    test.end();
});
