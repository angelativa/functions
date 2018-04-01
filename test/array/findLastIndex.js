const findLastIndex = (arr, fn) => {
    return arr.map((item, index) => [index, item])
    .filter(val => fn(val[1], val[0], arr))
    .slice(-1)[0][0];
};
module.exports = findLastIndex;