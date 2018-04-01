const indexOfAll = (arr, val) => {
    let indices = [];
    arr.forEach((item, index) => val === item && indices.push(index));
    return indices;
}

// [0, 3]
console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
// []
console.log(indexOfAll([1, 2, 3], 4));