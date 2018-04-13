;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 400;

    function drawButton() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.9)';
        ctx.shadowColor = '#0f0';
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 20;
        ctx.fillRect(100, 100, 100, 100);
        ctx.restore();
    }

    drawButton();
})();