const initializeArrayWithRange = (end, start = 0, step = 1) => Array.from({ length: Math.ceil((end + 1 - start) / step )})
    .map((v, i) => i * step + start);

console.log(initializeArrayWithRange(5)); // [0,1,2,3,4,5]
console.log(initializeArrayWithRange(7, 3)); // [3,4,5,6,7]
console.log(initializeArrayWithRange(9, 0, 2)); // [0,2,4,6,8]