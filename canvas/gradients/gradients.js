;(function () {

    "use strict";

    function drawLinear() {
        var canvas2 = document.getElementById('canvas2');
        var ctx2 = canvas2.getContext('2d');

        canvas2.width = 400;
        canvas2.height = 400;

        var grandients2 = ctx2.createLinearGradient(
            0,
            0,
            canvas1.width,
            canvas1.height
        );

        grandients2.addColorStop(0, 'white');
        grandients2.addColorStop(0.5, 'pink');
        grandients2.addColorStop(1, 'white');

        ctx2.fillStyle = grandients2;
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
        ctx2.fill();

    }

    function drawRadial() {
        var canvas1 = document.getElementById('canvas1');
        var ctx1 = canvas1.getContext('2d');

        canvas1.width = 400;
        canvas1.height = 400;

        var grandients1 = ctx1.createRadialGradient(
            0,
            0,
            100,
            canvas1.width,
            canvas1.height,
            10
        );

        grandients1.addColorStop(0, 'white');
        grandients1.addColorStop(0.5, 'pink');
        grandients1.addColorStop(1, 'white');

        ctx1.fillStyle = grandients1;
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        ctx1.fill();
    }


    drawLinear();
    drawRadial();

})();