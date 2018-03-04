Array 对象属性
    constructor 返回对创建此对象的数组函数的引用
    length 设置或返回数组中元素的数目
    prototype 是您有能力向对象添加属性和方法

Array 对象方法

    Array.from()
    从一个类似数组或可迭代对象中创建一个新的数组实例

    Array.isArray()
    用于确定传递的值是否是一个数组; return false or true

    Array.of()
    用于创建一个具有可变数量参数的新数组实例, 不考虑参数的数量和类型。返回新的 Array 实例

    Array.prototype.concat()
    用于合并两个或者多个数组，此方法不会更改现有的数组，而是返回一个新的数组。

    Array.prototype.join()
    把数组所有的元素放入一个字符串。元素通过指定分隔符进行分隔。

    Array.prototype.pop()
    删除数组的最后一个值，并返回这个值。

    Array.prototype.push()
    向数组的末尾添加一个或更多元素，并返回新的长度。

    Array.prototype.reverse()
    颠倒数组中元素的顺序

    Array.prototype.shift()
    删除并返回数组的第一个元素

    Array.prototype.unshift()
    向数组的开头添加一个或更多元素，并返回新的长度。

    Array.prototype.slice(beigin, end)
    从某个已有的数组返回选定的元素, 不改变原来数组

    Array.prototype.sort(compareFunction)
    对元素进行排序

    Array.prototype.splice(start, deleteCount, item1, item2, ...)
    删除元素，并向数组添加新的元素, 返回被删除的元素数组

    Array.prototype.toString()
    把数组转化为字符串，并返回结果

    Array.prototype.toLocaleString()
    把数组转化为本地数组，并返回结果

    Array.prototype.keys()
    返回数组的键

    Array.prototype.values()
    返回数组的值


    Array.prototype.copyWithin()

    Array.prototype.entries()

    Array.prototype.every(callback)
    // 每个元素是不是满足条件

    Array.prototype.fill(value, start, end)

    Array.prototype.filter(callback)
    通过callback筛选的之后返回的数组

    Array.prototype.find(callback)
    返回第一个通过筛选元素的值

    Array.prototype.findIndex(callback)
    返回第一个通过筛选的元素的键

    Array.prototype.forEach(callback)
    用于循环

    Array.prototype.includes(searchElement, start)
    确定一个值是不是在某个数组中, 第二个参数是开始搜索的位置

    Array.prototype.indexOf(searchElement, start)
    确定一个值在数组中的什么位置, 如果没有返回 -1

    Array.prototype.lastIndexOf(searchElement, start)
    确定一个值在数组中最后一次出现的位置

    Array.prototype.map()
    用于循环 创建一个新的数组，其结果是调用数组中的每个元素的函数。

    Array.prototype.reduce(callback)
    // 从左到右的累计计算
    var reducer = (max, value) => Math.max(max, value);
    [].reduce(reducer)

    Array.prototype.reduceRight(callback)
    // 从右到左的累计计算

    Array.prototype.some(callback)
    // 数组中包含一个某元素返回 true

    Array.prototype.toSource()
    返回该对象的源代码
