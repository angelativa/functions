const getType = (x) => {
    // return Object.prototype.toString.call(x).toLowerCase().slice(8, -1);
    return x === undefined ? 'undefined' : x === null ? 'null' : x.constructor.name.toLowerCase();
};

module.exports = getType;