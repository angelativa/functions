
const bifurcate = (arr, filter) => {
    return arr.reduce(
        (acc, val, i) =>
            (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
};
module.exports = bifurcate;