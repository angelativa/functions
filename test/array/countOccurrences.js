const countOccurrences = (arr, val) => arr.reduce((acc, currentVal) => val == currentVal ? acc + 1 : acc, 0);
module.exports = countOccurrences;