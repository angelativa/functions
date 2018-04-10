;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var button = document.getElementById('button');
    var glassPanel = document.getElementById('glass-panel');
    var glassPanel2 = document.getElementById('glass-panel2');
    var glassPanel3 = document.getElementById('glass-panel3');
    var ctx = canvas.getContext('2d');
    var canDrawing = false;
    var paused = true;

    canvas.width = 400;
    canvas.height = 400;

    var drawingImageData;
    function saveDrawing() {
        drawingImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

    function restoreDrawing() {
        ctx.putImageData(drawingImageData, 0, 0);
    }

    function drawing(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.arc(x, y, 4, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    function getRandrom() {
        return ~~(Math.random() * 10);
    }

    function getDistance(elementDur, containerDur, distance, preDistance) {
        elementDur = +elementDur;
        containerDur = +containerDur;
        distance = +distance;

        var val = preDistance ? preDistance : getRandrom();

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

    function move(element, index) {
        var distances = distance[index] || [];

        var distanceX = getDistance(
            element.offsetWidth,
            canvas.width,
            element.offsetLeft,
            distances['distanceX']
        );
        var distanceY = getDistance(
            element.offsetHeight,
            canvas.height,
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
            move(element, index);
        });
    }

    function stop(index) {
        console.log('>> ', index, animation)
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

        // e.preventDefault();
        // canDrawing = true;
        // saveDrawing();
    };
    glassPanel.onmousemove = function (e) {
        if (canDrawing) {
            move();
            // drawing(e.clientX, e.clientY);
        }
    };
    glassPanel.onmouseup = function (e) {
        canDrawing = false;
        // restoreDrawing();
    };

})();