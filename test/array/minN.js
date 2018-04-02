const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]

console.log(minN([1, 2, 3]))
console.log(minN([1, 2, 3], 2))