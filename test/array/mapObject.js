const mapObject = (arr, fn) => {
    return (a => {
        a = [arr, arr.map(fn)]
        return a[0].reduce(
            (acc, val, i) => {
                return ((acc[val] = a[1][i]), acc);
            },
            {}
        )
    })();
}

const squareIt = arr => mapObject(arr, a => a * a);
console.log(squareIt([1, 2, 3])); // { 1: 1, 2: 4, 3: 9 }