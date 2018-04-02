const remove = (arr, fn) => arr.filter(fn);

let myArr = [1, 2, 3, 4];
let result = remove(myArr, n => n % 2 === 0);
// [2, 4]
console.log(result, myArr);