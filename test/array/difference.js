const difference = (arr1, arr2) => {
    const temp = new Set(arr2);
    return arr1.filter(item => !temp.has(item));
};
module.exports = difference;