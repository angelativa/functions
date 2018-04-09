;(function () {

    "use strict";

    var element,
        ctx,
        WIDTH,
        HEIGHT,
        stars = [],
        points = [];

    var mouseMoving, mouseX, mouseY, mouseMoveTimer;

    function Star(data, useCache) {
        this.id = data.data;
        this.x = data.x;
        this.y = data.y;

        var config = data.config;
        this.fillStyle = config.fillStyle;
        this.shadowBlur = config.shadowBlur;
        this.radius = config.radius;
        this.moveDistance = config.moveDistance;
        this.shadowColor = config.shadowColor;
        this.strokeStyle = config.strokeStyle;
        this.draw();

        this.r = Math.ceil(Math.random() * this.radius);
        this.cacheCanvas = document.createElement("canvas");
        this.cacheCtx = this.cacheCanvas.getContext('2d');

        this.cacheCtx.width = this.r * 4;
        this.cacheCtx.height = this.r * 4;

        this.useCache = useCache;
        if(useCache){
            this.cache();
        }
    }

    Star.prototype = {
        draw: function () {
            if (this.useCache)  {
                ctx.drawImage(
                    this.cacheCanvas,
                    this.x - this.r,
                    this.y - this.r
                );
                return;
            }
            ctx.save();
            ctx.fillStyle = this.fillStyle;
            ctx.shadowBlur = this.shadowBlur;

            ctx.beginPath();
            ctx.arc(
                this.x,
                this.y,
                this.r,
                0,
                2 * Math.PI,
                false
            );
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },

        cache: function () {
            this.cacheCtx.save();

            this.cacheCtx.fillStyle = 'rgba(255,255,255,'+ Math.random() +')';
            this.cacheCtx.shadowBlur = this.shadowBlur;

            this.cacheCtx.beginPath();
            this.cacheCtx.arc(
                this.r,
                this.r,
                this.r,
                0,
                2 * Math.PI,
                false
            );
            this.cacheCtx.closePath();
            this.cacheCtx.fill();
            this.cacheCtx.restore();
        },

        move: function () {
            this.y -= this.moveDistance;
            if (this.y <= -10) {
                this.y += HEIGHT + 10;
            }
            // 重绘
            this.draw();
        },

        dispose: function () {
            star[this.id] = null;
            delete stars[this.id]
        }
    };

    function Point(x, y, r, useCache) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.draw();
    }

    Point.prototype = {
        draw: function () {
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.shadowColor = 'white';
            ctx.shadowBlur = this.radius * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },
        drawLine: function (index) {
            ctx.save();
            ctx.strokeStyle = 'white';
            ctx.beginPath();
            ctx.moveTo(
                points[index - 1].x,
                points[index - 1].y
            );
            ctx.lineTo(
                points[index].x,
                points[index].y
            );
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        },
        move: function (index) {
            this.draw();
            if (index != 0) {
                this.drawLine(index);
            }
        },
        dispose: function (index) {
            points[index] = null;
            delete points[index]
        }
    };

    function StarCurtain(options) {
        this.init(options);
    }

    StarCurtain.prototype = {

        init: function (data) {
            if (!data.el) {
                console.error('请输入 el');
            }
            element = document.querySelector(data.el);
            ctx = element.getContext('2d');
            HEIGHT = data.height;
            WIDTH = data.width;

            element.width = WIDTH;
            element.height = HEIGHT;
            for (var i = 0; i < data.starCount; i++) {
                stars[i] = new Star({
                    id: i,
                    x: Math.floor(Math.random() * WIDTH),
                    y: Math.floor(Math.random() * HEIGHT),
                    config: data.starConfig
                }, true);
            }
            animate();
        }


    };

    function animate() {
        // 清除画布
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i in stars) {
            stars[i].move();
        }
        for (var i in points) {
            points[i].move(i);
        }
        drawIfMouseMoving();
        requestAnimationFrame(animate);

    }

    function drawIfMouseMoving() {
        if (!mouseMoving) {
            return;
        }

        points.push(new Point(
            mouseX,
            mouseY,
            4,
            true
        ));

        if (points.length > 20) {
            points.shift();
        }
    }

    window.onmousemove = function (e) {

        clearInterval(mouseMoveTimer);
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseMoving = true;

        mouseMoveTimer = setInterval(function () {
            mouseMoving = false
        }, 1000);

    };

    window.StarCurtain = StarCurtain;

})();