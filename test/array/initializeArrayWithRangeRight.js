const initializeArrayWithRangeRight = (end, start = 0, step = 1) => Array.from({ length: Math.ceil((end + 1 - start) / step )})
    .map((v, i, arr) => (arr.length - i - 1) * step + start);

console.log(initializeArrayWithRangeRight(5));
// [5,4,3,2,1,0]
console.log(initializeArrayWithRangeRight(7, 3));
// [7,6,5,4,3]
console.log(initializeArrayWithRangeRight(9, 0, 2));
// [8,6,4,2,0]