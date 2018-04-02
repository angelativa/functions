const similarity = (arr1, arr2) =>
    arr1.filter(item => arr2.includes(item));

// [1,2]
console.log(similarity([1, 2, 3], [1, 2, 4]))