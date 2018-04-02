const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let temp = arr.filter(item => !argState.includes(item));
    arr.length = 0;
    temp.forEach(val => arr.push(val));
    return ;
};

let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c')
console.log(myArray); // myArray = [ 'b', 'b' ]