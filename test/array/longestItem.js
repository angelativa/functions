const longestItem = (...vals) => vals.sort((a, b) => b.length - a.length)[0];

// longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
// longestItem(...['a', 'ab', 'abc']); // 'abc'
// longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
// longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
// longestItem([1, 2, 3], 'foobar'); // 'foobar'

console.log(longestItem(...['a', 'ab', 'abc'], '1221'));
console.log(longestItem('this', 'is', 'a', 'testcase')); // 'testcase'
console.log(longestItem(...['a', 'ab', 'abc'])); // 'abc'
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd')); // 'abcd'
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(longestItem([1, 2, 3], 'foobar')); // 'foobar'