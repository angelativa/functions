const reduceSuccessive = (arr, fn, acc) => {
    return arr.reduce((a, v, i) => {
        a[i] = fn(a[i - 1] || 0, v);
        return a;
    }, []);
};

let result = reduceSuccessive(
    [1, 2, 3, 4, 5, 6],
    (acc, val) => acc + val,
    0
);
// [1, 3, 6, 10, 15, 21]
console.log(result);