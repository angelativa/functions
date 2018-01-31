const test = require('tape');
const isLikePromise = require('./isLikePromise.js');

test('Testing isLikePromise', (test) => {
    // 字符串、数字、布尔、数组、对象、Null、Undefined, function
    test.false(isLikePromise([12,34,2]), 'donnot work for array');
    test.false(isLikePromise({a: 21}), 'donnot work for object');
    test.false(isLikePromise({}), 'donnot work for {}');
    test.false(isLikePromise(null), 'donnot work for null');
    test.false(isLikePromise(false), 'donnot work for boolean');
    test.false(isLikePromise('21121'), 'donnot work for string');
    test.false(isLikePromise(1211), 'donnot work for number');
    test.false(isLikePromise(undefined), 'donnot work for undefined');

    test.true(isLikePromise({
      then: function() {
        return '';
      }
    }), 'work for promise');
    test.end();
});