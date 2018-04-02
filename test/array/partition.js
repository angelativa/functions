const partition = (arr, fn) => arr.reduce(
    (acc, val, i) => {
        fn(val) ? acc[0].push(val) : acc[1].push(val)
        return acc;
    }, [[], []])

const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
console.log(partition(users, o => o.active));
// [[{ 'user': 'fred', 'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]