const nthElement = (arr, index = 0) => index < 0 ? arr[0] : arr[index];

console.log(nthElement(['a', 'b', 'c'], 1)); // 'b'
console.log(nthElement(['a', 'b', 'b'], -3)); // 'a'