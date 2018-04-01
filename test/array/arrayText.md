
all
<!--  Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
Use Array.every() to test if all elements in the collection return true based o -->n fn. Omit the second argument, fn, to use Boolean as a default.

any
<!-- Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.

Use Array.some() to test if any elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.
 -->
bifurcate
<!-- Splits values into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

Use Array.reduce() and Array.push() to add elements to groups, based on filter. -->
<!-- reduce 的第二个参数是默认的 accumulator 的值 -->

bifurcateBy
Splits values into two groups a<!-- ccording to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

Use Array.reduce() and Array.push() to add elements to groups, based on the value returned by fn for each element.
 -->
chunk
// chunks an array into smaller arrays of a specified size
// Array.from

compact
// Remove falsey values from an array
// Array.filter

countBy
// Groups the elements of an array based on the given function
// and returns the count of elements in each group.
// Array.map
// Array.reduce

countOccurrences
// counts the occurrences of a value in an array
// Array.reduce

deepFlatten
// deep flattrns an attay
// deepFlatten([1, [2], [[3], 4]]);
// Array.concat
// Array.concat

difference
// retruns the difference between two arrays
// Array.filter

differenceBy
// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]

differenceWith
// differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
// Array.filter Array.findIndex

drop
// return a new array with n element removed from the left
// Array.slice()

dropRight
// return a new array with n elements removed from the right
// Array.slice()

dropRightWhile
dropWhile

everyNth
// return every nth element in an array
// Array.filter

filterNonUnique
// filter non-unique values in an array
// Array.filter

findLast
// return the last element for which the provided function return a truthy value
// Array.filter

findLastIndex
// return the index of the last element for which the provided function returns a truthy value
// Array.map Array.slice


flatten
// 将一个数组压缩到指定深度
// Array.concat() Array.reduce()
// flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
// flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]


forEachRight

groupBy

head

indexOfAll

initial

initialize2DArray

initializeArrayWithRange

initializeArrayWithRangeRight

initializeArrayWithValues

intersection

intersectionBy

intersectionWith

isSorted

join

last

longestItem

mapObject

maxN

minN

none

nthElement

partition

permutations

pull

pullAtIndex

pullAtValue

pullBy

reducedFilter

reduceSuccessive

reduceWhich

remove

sample

sampleSize

shuffle

similarity

sortedIndex

sortedIndexBy

sortedLastIndex

sortedLastIndexBy

stableSort

symmetricDifference

symmetricDifferenceBy

symmetricDifferenceWith

tail

take

takeRight

takeRightWhile

takeWhile

union

unionBy

unionWith

uniqueElements

unzip

unzipWith

without

xProd

zip

zipObject

zipWith

::selection

@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.donut {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}



.gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

Mouse cursor gradient tracking