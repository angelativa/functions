(function () {

  'use strict';

  function drawDashedLine(ctx, startX, startY, endX, endY, dashLength) {

    dashLength = dashLength === undefined ? 2 : dashLength;

    var deltaX = endX - startX;
    var deltaY = endY - startY;
    var numDashes = Math.floor(
      Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength
    );

    for(var i = 0; i < numDashes; ++i) {
      ctx[ i % 2 === 0 ? 'moveTo' : 'lineTo' ](
        startX + (deltaX / numDashes) * i,
        startY + (deltaY / numDashes) * i,
      );
    }
    ctx.stroke();

  }

  function drawArc(ctx, startX, startY, radius) {
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  function rect(ctx, x, y, w, h, direction) {
    if (direction) {
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x + w, y);
    }
    else {
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
    }

    ctx.closePath();
  }

  function Cropper(options) {
    this.init(options);
  }

  Cropper.prototype = {

    constructor: Cropper,

    refresh: function (x, y, image) {
      var me = this;
      me.ctx.clearRect(0, 0, me.canvasWidth, me.canvasHeight);
      me.insertImage()
      .then(function () {
        if (image) {
          me.getCropperImage();
        }
        me.drawCropperRect(x, y);
      });
    },


    getCropperImage: function () {
      var me = this;
      var rect = me.boxRect;
      var outputSizes = me.outputSizes;

      for(var i = 0; i < outputSizes.length; i++) {
        var size = outputSizes[ i ];
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = size[ 'width' ];
        canvas.height = size[ 'height' ];

        ctx.drawImage(
          me.image,
          me.image.width / me.sourceImage.sw * rect.startX,
          me.image.height / me.sourceImage.sh * rect.startY,
          me.image.width / me.sourceImage.sw * rect.width,
          me.image.height / me.sourceImage.sh * rect.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        var imageElement = document.createElement('img');
        imageElement.src = canvas.toDataURL('image/jpg', 1);
        me.cantainer.append(imageElement);
        canvas.remove();
        me.refresh(0, 0, false);
      }
    },

    init: function (options) {

      var me = this;
      me.cantainer = document.querySelector(options.element);

      me.canvasWidth = options.width;
      me.canvasHeight = options.height;
      me.imageUrl = options.image;
      me.boxWidth = options.boxWidth;
      me.boxHeight = options.boxHeight;
      me.outputSizes = options.output.sizes;
      me.radio = 1;
      if (me.outputSizes[ 0 ]) {
        me.radio = me.outputSizes[ 0 ].width / me.outputSizes[ 0 ].height;
      }

      me.insertCanvas();
      me.insertImage()
      .then(function () {
        me.drawCropperRect();
      });
      me.bindEvent();

    },

    isPointInCropperBox(x, y) {
      var me = this;
      var rect = me.boxRect;
      var points = rect[ points ];

      if (rect.startX < x
        && x < (rect.startX + rect.width)
        && rect.startY < y
        && y < (rect.startY + rect.height)
      ) {
        return true;
      }
      return false;
    },

    bindEvent: function () {
      var me = this;
      me.canvas.onmousedown = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var points = me.boxRect[ 'points' ];
        if (Math.abs(points[ 7 ].x - x) < 10
          && Math.abs(points[ 7 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'se-resize';
          return;
        }
        else if (Math.abs(points[ 6 ].x - x) < 10
          && Math.abs(points[ 6 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 's-resize';
        }
        else if (Math.abs(points[ 5 ].x - x) < 10
          && Math.abs(points[ 5 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'sw-resize';
        }
        else if (Math.abs(points[ 4 ].x - x) < 10
          && Math.abs(points[ 4 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'e-resize';
        }
        else if (Math.abs(points[ 3 ].x - x) < 10
          && Math.abs(points[ 3 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'w-resize';
        }
        else if (Math.abs(points[ 2 ].x - x) < 10
          && Math.abs(points[ 2 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'ne-resize';
        }
        else if (Math.abs(points[ 1 ].x - x) < 10
          && Math.abs(points[ 1 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'n-resize';
        }
        else if (Math.abs(points[ 0 ].x - x) < 10
          && Math.abs(points[ 0 ].y - y) < 10
        ) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'nw-resize';
        }
        else if (me.isPointInCropperBox(x, y)) {
          me.startDragger = true;
          me.startDraggerPos = {
            x: x,
            y: y
          };
          me.canvas.style.cursor = 'move';
        }
        else {
          me.startDragger = false;
        }
      };
      me.canvas.onmousemove = function (event) {
        var x = event.offsetX;
        var y = event.offsetY;

        if (me.startDragger) {
          var deltaX = x - me.startDraggerPos.x;
          var deltaY = y - me.startDraggerPos.y;
          var offset = deltaX > deltaY ? deltaX : deltaY;

          if (me.canvas.style.cursor == 'move') {
            me.refresh(deltaX, deltaY);
          }
          else {
            me.boxWidth += offset;
            me.boxHeight = me.boxWidth * me.radio;
            me.refresh(0, 0);
            me.startDraggerPos = {
              x: x,
              y: y
            };
          }
        }
      };

      me.canvas.onmouseup = function (event) {
        me.canvas.style.cursor = '';
        me.startDragger = false;
      };
    },

    drawCropperRect: function (x, y) {

      var me = this;
      var ctx = me.ctx;
      var CropperColor = 'blue';

      var radio = me.radio;
      var boxWidth = me.boxWidth;
      var boxHeight = me.boxWidth * radio;
      var sourceImage = me.sourceImage;

      if (boxWidth > sourceImage.sw) {
        boxWidth = sourceImage.sw;
        boxHeight = boxWidth / radio;
      }
      if (boxHeight > sourceImage.sh) {
        boxHeight = sourceImage.sh;
        boxWidth = boxWidth * radio;
      }

      x = x ? x : 0;
      y = y ? y : 0;

      ctx.lineWidth = 1;
      ctx.strokeStyle = CropperColor;
      ctx.fillStyle = 'transparent';

      var startX = sourceImage.sx + (sourceImage.sw - boxWidth) / 2 + x;
      var startY = sourceImage.sy + (sourceImage.sh - boxHeight) / 2 + y;

      startX = startX > 0 ? startX : 0;
      startY = startY > 0 ? startY : 0;

      startX = (startX + boxWidth) > sourceImage.sw ? sourceImage.sx + sourceImage.sw - boxWidth : startX;
      startY = (startY + boxHeight) > sourceImage.sh ? sourceImage.sy + sourceImage.sh - boxHeight : startY;

      ctx.save();
      // 绘制阴影
      ctx.beginPath();
      rect(ctx, sourceImage.sx, sourceImage.sy, sourceImage.sw, sourceImage.sh);
      rect(ctx, startX, startY, boxWidth, boxHeight, true);
      ctx.fillStyle = 'rgba(0,0,0,.4)';
      ctx.fill();

      me.boxRect = {
        startX: startX,
        startY: startY,
        width: boxWidth,
        height: boxHeight,
        points: [
          {
            x: startX,
            y: startY
          },
          {
            x: (startX + boxWidth / 2),
            y: startY
          },
          {
            x: (startX + boxWidth),
            y: startY
          },
          {
            x: startX,
            y: (startY + boxHeight / 2)
          },
          {
            x: (startX + boxWidth),
            y: (startY + boxHeight / 2)
          },
          {
            x: startX,
            y: (startY + boxHeight)
          },
          {
            x: (startX + boxWidth / 2),
            y: (startY + boxHeight)
          },
          {
            x: (startX + boxWidth),
            y: (startY + boxHeight)
          }
        ]
      };

      var points = me.boxRect.points;
      // 绘制九个点
      ctx.fillStyle = CropperColor;
      for(var i = 0; i < points.length; i++) {
        drawArc(ctx, points[ i ].x, points[ i ].y, 3);
      }

      // 绘制九宫格
      ctx.strokeStyle = '#fff';
      drawDashedLine(ctx, startX, (startY + boxHeight / 3), (startX + boxWidth), (startY + boxHeight / 3));
      drawDashedLine(ctx, startX, (startY + boxHeight / 3 * 2), (startX + boxWidth), (startY + boxHeight / 3 * 2));
      drawDashedLine(ctx, (startX + boxWidth / 3), startY, (startX + boxWidth / 3), (startY + boxHeight));
      drawDashedLine(ctx, (startX + boxWidth / 3 * 2), startY, (startX + boxWidth / 3 * 2), (startY + boxHeight));
    },

    drawSourceImage: function () {
      var me = this;
      var sourceWidth = me.image.width;
      var sourceHeight = me.image.height;

      if (sourceWidth < me.canvasWidth
        && sourceHeight < me.canvasHeight
      ) {
        throw new Error('image is smaller than ' + me.canvasWidth + '*' + me.canvasHeight);
      }

      var radio = sourceWidth / sourceHeight;
      if (sourceWidth > me.canvasWidth) {
        sourceWidth = me.canvasWidth;
        sourceHeight = sourceWidth / radio;
      }
      if (sourceHeight > me.canvasHeight) {
        sourceHeight = me.canvasHeight;
        sourceWidth = sourceWidth * radio;
      }

      var startX = (me.canvasWidth - sourceWidth) / 2;
      var startY = (me.canvasHeight - sourceHeight) / 2;
      me.ctx.drawImage(
        me.imageUrl,
        0,
        0,
        me.image.width,
        me.image.height,
        startX,
        startY,
        sourceWidth,
        sourceHeight
      );

      me.sourceImage = {
        sx: startX,
        sy: startY,
        sw: sourceWidth,
        sh: sourceHeight
      };
    },

    insertImage: function (x, y) {
      var me = this;
      return new Promise(function (resolve) {
        if (me.image) {
          me.drawSourceImage();
          resolve();
          return;
        }
        if (typeof(me.imageUrl) == 'string') {
          me.image = new Image();
          me.image.src = me.imageUrl;
          me.image.onload = function () {
            me.drawSourceImage();
            resolve();
          };
        }
        else {
          me.image = me.imageUrl;
          me.drawSourceImage();
          resolve();
        }
      });
    },

    insertCanvas: function () {

      var me = this;
      var canvasElement = document.createElement('canvas');

      canvasElement.width = me.canvasWidth;
      canvasElement.height = me.canvasHeight;
      canvasElement.style.backgroundColor = 'transparent';
      canvasElement.style.border = '2px solid #000';
      me.cantainer.append(canvasElement);

      me.canvas = canvasElement;
      me.ctx = me.canvas.getContext('2d');

    }

  };

  window.Cropper = Cropper;

  return Cropper;
})();