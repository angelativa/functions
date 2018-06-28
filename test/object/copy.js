function copy(obj, deep) {
    var result;
    if (isObject(obj)) {
        result = {};
        for (var key in obj) {
            var item = obj[key];
            result[key] = deep ? copy(item) : item;
        }
    }
    else {
        if (deep) {
            result = [];
            for (var i = obj.length - 1; i >= 0; i--) {
                var item = obj[i];
                result[i] = deep ? copy(item) : item;
            }
        }
        else {
            result = obj.slice();
        }
    }
    return result;
}

function isObject(obj) {
    return Object.prototype.toString.call({}).slice(8, -1).toLowerCase() == 'object';
}
function isArray(obj) {
    return Object.prototype.toString.call({}).slice(8, -1).toLowerCase() == 'array';
}

var a = {
    name: 'wangtianhua',
    age: '24',
    skill: {
        skill1: 'js',
        skill2: 'html',
        skill3: 'css',
    }
};
var c = copy(a);
c.name = 'zhujialu';
console.log(c.name, a.name);

var f = copy(a, false);
f.name = 'zhujialu';
f.skill.skill3 = 'shabi';
console.log(a.skill.skill3)

// var b = a;
// b.name = 'zhujialu';
// console.log(b.name, a.name);


var d = Object.assign(a);
d.name = 'zhujialu';
console.log(d.name, a.name);

// 数组
// var e = a.slice();
// e.name = 'zhujialu';
// console.log(e.name, b.name);

function extend() {
    var original = arguments[0];
    for (var i = 1, len = arguments.length; i < len; i++) {
        var obj = arguments[i];
        for(var key in obj) {
            original[key] = obj[key];
        }
    }
    return original;
}



Function.prototype.call = function (context) {
    context = context || window;
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }
    result = eval('context.fn(' + args.toString() + ')');
    delete context.fn;
    return result;
};
Math.max.call(null, 3,3,2,1,2,3,42,1);

Function.prototype.apply = function (context) {
    context = context || window;
    context.fn = this;
    if (!arguments) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 1, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        result = eval('context.fn(' + args.toString() + ')');
    }
    delete context.fn;
    return result;
};
Math.max.apply(null, [3,3,2,1,2,3,42,1]);


Function.prototype.bind = function (context) {
    var me = this;

    if (typeof me !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }


    var args = [].slice.call(arguments, 1);
    var Class = new Function();
    var fnc = function () {
        var args2 = [].slice.call(arguments);
        me.apply(me instanceof me ? me : context, args.concat(args2));
    }

    Class.prototype = me.prototype;
    fnc.prototype = new Class();

    return fnc;
};


var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);


new Animal('name', 'age');

function objectFactory() {

    var object = new Object();

    Constructor = [].shift.call(arguments, 1);

    object.__proto__ = Constructor.prototype;

    var result = Constructor.apply(object, arguments);

    return typeof result === 'object' ? result : object;

};



function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin


for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}

console.log(new Date, i);

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function() {
            console.log(new Date, i);
        }, 1000);
    })(i);
}

console.log(new Date, i);

function output(i) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
for (var i = 0; i < 5; i++) {
    output(i);
}

console.log(new Date, i);

for (var i = 0; i < 5; i++) {
    setTimeout(function(j) {
        console.log(new Date, j);
    }, 1000, i);
}

console.log(new Date, i);

var tasks = [];
for (var i = 0; i < 5; i++) {
    ((j) => {
        tasks.push(new Promise(function(resolve) {
            setTimeout(function (){
                console.log(new Date, j);
                resolve();
            }, 1000);
        }));
    })(i);
}
Promise.all(tasks)
.then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);
});


