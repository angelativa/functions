const initializeArrayWithValues = (len, val = 0) => Array.from({ length: len }).fill(val);

console.log(initializeArrayWithValues(5, 2)); // [2,2,2,2,2]