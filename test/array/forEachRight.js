const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

// forEachRight([1, 2, 3, 4], val => console.log(val));