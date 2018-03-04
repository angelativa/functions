Object 对象属性
    __proto__
    constructor

Object 对象方法
    Object.assign(target, ...sources);
    return target; 把 target 和 source 里面的可以枚举的值全部拷贝到 target
    1 copy an object 和 Copying symbol-typed properties
    2 target object itself is changed
    无法复制原型连和不可枚举的值
    原语讲会被包成对象
    异常将会中断正在进行的程序

    Object.create(proto, propertiesObject)
    Object.defineProperties(obj, props)
        props.configurable
        props.enumerable
        props.value
        props.writable
        props.get
        props.set

    Object.defineProperty(obj, prop, descriptor)
        直接修改或者创建对象的某属性
        obj 需要定义属性的对象
        prop 要定义或者是修改的某属性的名称
        descriptor 定义或修改属性的描述符

    Object.entries()
    返回给定对象自己的可枚举的数组，其顺序与 a 所提供的顺序相同

    Object.freeze(obj)
    不可再修改

    Object.getOwnPropertyDescriptor(obj, prop)
    返回给定属性的属性描述符。如果他存在于对象上，则没有定义。

    Object.getOwnPropertyDescriptors(obj)
    返回一个给定对象的所有属性描述符

    Object.getOwnPropertyNames(obj)
    返回给定对象的所有属性，包括不是枚举的值

    Object.getOwnPropetySymbols(obj)
    返回给定对象的 symbols 属性

    Object.getPrototypeOf(obj)
    返回给定对象的 prototype

    Object.is(value1, value2)
    判断两个值是否相同

    Object.isExtensible(obj)
    确定对象是否可扩展

    Object.isFrozen(obj)
    确定对象是否被冻结

    Object.isSealed(obj)
    确定对象是否被密封

    Object.keys(obj)
    返回指定对象的可枚举的数据的键

    Object.preventExtensions(obj)
    阻止给定对象的拓展

    Object.prototype.hasOwnProperty(prop)
    给定对象是不是有某属性（不是继承的）

    Object.prototype.isPrototypeOf(object)
    某对象是不是在给定对象的原型链中

    Object.prototype.propertyIsEnumerable(prop)
    给定属性在对象里的枚举

    Object.prototype.toLocaleString()
    返回一个字符串

    Object.prototype.toString()
    返回表示某对象的字符串

    Object.prototype.valueOf()
    返回对象的原始值

    Object.seal(Object)
    密封给定对象

    Object.setPrototypeOf(obj, prototype)
    设置原型

    Object.values(obj)
    返回给定对象的所有值






















