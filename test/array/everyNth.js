const everyNth = (arr, n) => arr.filter((item, index) => index % n == n - 1);
module.exports = everyNth;