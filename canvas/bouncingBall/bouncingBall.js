;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var button = document.getElementById('button');
    var glassPanel = document.getElementById('glass-panel');
    var glassPanel2 = document.getElementById('glass-panel2');
    var glassPanel3 = document.getElementById('glass-panel3');
    var ctx = canvas.getContext('2d');
    var paused = true;

    canvas.width = 400;
    canvas.height = 400;

    function getRandrom() {
        return ~~(Math.random() * 10);
    }

    function getDistance(containerDur, elementDur, distance, preDistance) {
        elementDur = +elementDur;
        containerDur = +containerDur;
        distance = +distance;

        var val = preDistance || getRandrom();

        if (distance <= 0) {
            val = getRandrom();
        }
        if (elementDur + distance >= containerDur) {
            val = -getRandrom();
        }

        return val;
    }

    var distance = [];
    var animation = [];

    function move(element, index, otherElement) {
        var distances = distance[index] || [];

        var distanceX = getDistance(
            canvas.width,
            element.offsetWidth,
            element.offsetLeft,
            distances['distanceX']
        );
        var distanceY = getDistance(
            canvas.height,
            element.offsetHeight,
            element.offsetTop,
            distances['distanceY']
        );

        distance[index] = {
            distanceX: distanceX,
            distanceY: distanceY
        };

        element.style.left = element.offsetLeft + distanceX + 'px';
        element.style.top = element.offsetTop + distanceY + 'px';

        animation[index] = requestAnimationFrame(function () {
            move(element, index, otherElement);
        });
    }

    function stop(index) {
        cancelAnimationFrame(animation[index]);
    }

    button.onmousedown = function (e) {

        paused = !paused
        button.innerText = !paused ? '结束' : '开始';

        if (!paused) {
            move(glassPanel, 1);
            move(glassPanel2, 2);
            move(glassPanel3, 3);
        }
        else {
            stop(1);
            stop(2);
            stop(3);
        }
    };

})();