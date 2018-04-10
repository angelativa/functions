;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var style = {
        radius: 100,
        strokeStyle: '#fff',
        canvasWidth: 600,
        canvasHeight: 400,
        lineWidth: 4,
        fillStyle: '#fff'
    };

    canvas.width = style.canvasWidth;
    canvas.height = style.canvasHeight;
    ctx.fillStyle = style.fillStyle;
    ctx.strokeStyle = style.strokeStyle;
    ctx.fontSize = 18;

    function drawCircle() {
        ctx.beginPath();
        ctx.lineWidth = style.lineWidth;
        ctx.arc(
            style.canvasWidth / 2,
            style.canvasHeight / 2,
            style.radius,
            0,
            Math.PI * 2,
            true
        );
        ctx.stroke();
    }

    function drawNumerals() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var angle = 0;
        var numberWidth = 0;

        for(var i in numbers) {
            angle = Math.PI / 6 * (i - 2);
            numberWidth = ctx.measureText(numbers[i]).width;
            ctx.fillText(
                numbers[i],
                style.canvasWidth / 2 + Math.cos(angle) * (style.radius - 10) - numberWidth / 2,
                style.canvasHeight / 2 + Math.sin(angle) * (style.radius - 10) + 4
            );
        }
    }

    function drawCenter() {
        ctx.beginPath();
        ctx.arc(
            style.canvasWidth / 2,
            style.canvasHeight / 2,
            2,
            0,
            Math.PI * 2,
            true
        );
        ctx.stroke();
    }

    function drawHeader(loc, isHour) {
        var angle = isHour ? Math.PI * (loc - 3) / 6  : Math.PI * (loc - 15) / 30;
        var numberWidth = ctx.measureText(loc).width;
        var radius = isHour ? style.radius - 50 : style.radius - 30;
        ctx.lineWidth = style.lineWidth / 2;

        ctx.moveTo(
            style.canvasWidth / 2,
            style.canvasHeight / 2
        );

        ctx.lineTo(
            style.canvasWidth / 2 + Math.cos(angle) * radius - numberWidth / 2,
            style.canvasHeight / 2 + Math.sin(angle) * radius + 4
        );
        ctx.stroke();
    }

    function drawHeaders() {
        var date = new Date();
        var hour = date.getHours() % 12;
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        drawHeader(hour, true);
        drawHeader(minute, false);
        drawHeader(seconds, false);
    }

    function drawClick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle();
        drawNumerals();
        drawCenter();
        drawHeaders();
    }

    setInterval(drawClick, 1000);

})();