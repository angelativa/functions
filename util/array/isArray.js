const isArray = (arr) => {
  let type = Object.prototype.toString.call(arr).toLowerCase();
  type = type.substring(8, (type.length - 1));
  return type === 'array';
};

module.exports = isArray;
