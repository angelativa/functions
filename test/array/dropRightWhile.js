const dropRightWhile = (arr, fn) => {
    while(arr.length > 0 && !fn(arr[arr.length - 1])) arr = arr.slice(0, -1)
    return arr;
};
module.exports = dropRightWhile;