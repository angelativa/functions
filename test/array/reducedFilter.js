const reducedFilter = (arr, keys, fn) =>
    arr.filter(fn).map(item => {
        return keys.reduce((acc, val, index) => {
            acc[val] = item[val];
            return acc;
        }, {});
    });

const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

let result = reducedFilter(data, ['id', 'name'], item => item.age > 24);
// [{ id: 2, name: 'mike'}]
console.log(result);