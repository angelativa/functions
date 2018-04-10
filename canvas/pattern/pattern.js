;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 400;

    var repeatElement = document.getElementById('repeat');
    var repeatXElement = document.getElementById('repeat-x');
    var repeatYElement = document.getElementById('repeat-y');
    var repeatNoElement = document.getElementById('no-repeat');

    repeatElement.onclick = function () {
        dealPattern('repeat')
    };
    repeatXElement.onclick = function () {
        dealPattern('repeat-x')
    };
    repeatYElement.onclick = function () {
        dealPattern('repeat-y')
    };
    repeatNoElement.onclick = function () {
        dealPattern('no-repeat')
    };


    function dealPattern(str) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var pattern = ctx.createPattern(image, str);
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    }

    var image = new Image();
    image.src = 'logo.png';
    image.onload = function () {
        dealPattern('repeat');
    }

})();