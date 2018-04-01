const bifurcateBy = (arr, fn) => {
    return arr.reduce((acc, val, i) => {
        acc[fn(val) ? 0 : 1].push(val)
        return acc;
    }, [[],[]]);
};
module.exports = bifurcateBy;