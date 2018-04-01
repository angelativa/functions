const filterNonUnique = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
module.exports = filterNonUnique;
