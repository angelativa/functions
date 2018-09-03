;(function () {

    "use strict";

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var rubberElement = document.getElementById('rubber');
    var imageListImages = document.getElementById('image-wrapper');
    var image = new Image();

    var mousedown = {},
        dragging = false,
        rubberRect = {};

    canvas.width = 400;
    canvas.height = 400;

    function moveRubberBand(left, top) {
        rubberElement.style.left = left + 'px';
        rubberElement.style.top = top + 'px';
    }

    function resizeRubberRect() {

        rubberElement.style.top = rubberRect.top + 'px';
        rubberElement.style.left = rubberRect.left + 'px';

        rubberElement.style.width = rubberRect.width + 'px';
        rubberElement.style.height = rubberRect.height + 'px';
    }

    function showRubberBand() {
        rubberElement.style.display = 'inline';
    }
    function hideRubberBand() {
        rubberElement.style.display = 'none';
    }

    function rubberBandStart(x, y) {
        mousedown = { x, y };
        rubberRect = {
            top: y,
            left: x
        };
        moveRubberBand(x, y);
        showRubberBand();
        dragging = true;
    }

    function rubberBandMove(x, y) {

        if (x > canvas.width
            || y > canvas.height
        ) {
            return;
        }
        rubberRect.left = x < mousedown.x ? x : mousedown.x;
        rubberRect.top = y < mousedown.y ? y : mousedown.y;

        rubberRect.width = Math.abs(x - mousedown.x);
        rubberRect.height = Math.abs(y - mousedown.y);

        resizeRubberRect();
    }

    function resetRubberRect() {

        rubberRect = {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };

    }
    function rubberBandEnd() {

        ctx.drawImage(
            canvas,
            rubberRect.top,
            rubberRect.left,
            rubberRect.width,
            rubberRect.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        var imageElement = document.createElement('img');
        imageElement.src = canvas.toDataURL('image/jpg', 1);
        imageListImages.append(imageElement);

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resetRubberRect();

        hideRubberBand();
        dragging = false;
    }

    canvas.onmousedown = function (e) {
        e.preventDefault();
        rubberBandStart(e.clientX, e.clientY);
    };

    window.onmousemove = function (e) {
        e.preventDefault();
        rubberBandMove(e.clientX, e.clientY);
    };

    window.onmouseup = function (e) {
        e.preventDefault();
        rubberBandEnd();
    };

    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    image.src = 'ex.jpg';

    function Cropper(options) {
        console.log(options)
    }

    window.Cropper = Cropper;

})();