const isObject = obj => !!obj && typeof obj === 'object' && obj.constructor == Object;
module.exports = isObject;