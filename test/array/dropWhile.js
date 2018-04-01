const dropWhile = (arr, fn) => {
    while(arr.length > 0 && !fn(arr[0])) arr = arr.slice(1)
    return arr;
};
module.exports = dropWhile;