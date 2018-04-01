const intersection = (arr1, arr2) => {
    const temp = new Set(arr2);
    return arr1.filter(val => temp.has(val));
};
// 不知道和differece有什么区别
console.log(intersection([1, 2, 3], [4, 3, 2]));