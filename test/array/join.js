const join = (arr, separator = ',', end = separator) => {
    return arr.reduce((acc, val, i) => {
        if (i === arr.length - 1)
            acc = acc + val;
        else if (i === arr.length - 2)
            acc = acc + val + end;
        else
            acc = acc + val + separator;

        return acc;
    }, '');
}

console.log(join(['pen', 'pineapple', 'apple', 'pen'], ',', '&')); // "pen,pineapple,apple&pen"
console.log(join(['pen', 'pineapple', 'apple', 'pen'], ',')); // "pen,pineapple,apple,pen"
console.log(join(['pen', 'pineapple', 'apple', 'pen'])); // "pen,pineapple,apple,pen"