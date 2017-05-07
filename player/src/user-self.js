(function () {

})();

for (var i = 0; i < 10; i++) {
    console.log(i)
}

for (var i = 0; i < 10; i++) {
    function test() {
        console.log(i)
    }
    test();
}

for (var i = 0; i < 10; i++) {
    (function () {
        console.log(i)
    })(i)
}

function foo(i) {
    console.log(i);
    if (i > 0) {
        i--;
        foo(i);
    }
}

var foo = function(i) {
    console.log(i);
    if (i > 0) {
        i--;
        arguments.callee(i);
    }
};

var foo = function(i) {
    console.log(i);
    if (i > 0) {
        i--;
        foo(i);
    }
};

(function(){ console.log(21) })()
(function(){ console.log(21) }())

!function(){ console.log(21) }();
~function(){ console.log(21) }();
-function(){ console.log(21) }();
+function(){ console.log(21) }();