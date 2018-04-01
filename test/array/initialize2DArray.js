const initialize2DArray = (w, h, val) => {
    return Array.from({length: h}).map(() => Array.from({length: w}).fill(val));
}

//[ [ 0, 0 ], [ 0, 0 ] ]
console.log(initialize2DArray(2, 2, 0));
//[ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
console.log(initialize2DArray(3, 2, 0));