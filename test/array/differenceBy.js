const differenceBy = (arr1, arr2, fn) => {
    const temp = new Set(arr2.map(item => fn(item)));
    console.log(arr1.filter(val => !temp.has(fn(val))))
    return arr1.filter(val => !temp.has(fn(val)));
};
module.exports = differenceBy;