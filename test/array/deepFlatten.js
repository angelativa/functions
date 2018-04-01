const deepFlatten = arr => [].concat(...arr.map(item => Array.isArray(item) ? deepFlatten(item) : item));
module.exports = deepFlatten;