const isEmpty = (val) => {
    return val == null || !(Object.keys(val) || val).length;
};
module.exports = isEmpty;