
const sampleSize = (arr, size = 1) => {
    let length = arr.length;
    let result = [];
    while(length) {
        result.push(arr[Math.floor(Math.random() * arr.length)]);
        length--;
    }
    return result.slice(0, size);
}
console.log(sampleSize([1, 2, 3], 2)); // [3,1]
console.log(sampleSize([1, 2, 3], 4)); // [2,3,1]