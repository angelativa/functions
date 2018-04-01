const chunk = (arr, size) => {
    let result = [];

    result = Array.from({ length: Math.ceil(arr.length / size) }, (item, index) => {
        return arr.slice(index * size, index * size + size);
    });

    return result;
};
module.exports = chunk;