const reduceWhich = (arr, fn = (a, b) => a - b) => {
    return arr.reduce((acc, val, index) => {
        return fn(acc, val) > 0 ? val : acc;
    });
};
let result1 = reduceWhich([1, 3, 2]); // 1
let result2 = reduceWhich([1, 3, 2], (a, b) => b - a); // 3
let result3 = reduceWhich(
    [
        { name: 'Tom', age: 12 },
        { name: 'Jack', age: 18 },
        { name: 'Lucy', age: 9 }
    ],
    (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}

console.log(result1)
console.log(result2)
console.log(result3)