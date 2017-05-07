(function () {

    var INTOX5 = 'x5videoenterfullscreen';
    var EXITX5 = 'x5videoexitfullscreen';
    var deviceHeight = document.body.clientHeight;

    var VIDEO_STATUS_FIRSTPLAY = 'firstplay';
    var VIDEO_STATUS_PLAYING = 'playing';
    var VIDEO_STATUS_PAUSED = 'paused';
    var VIDEO_STATUS_END = 'end';

    function supportX5VideoPlayer() {
        var userAgent = navigator.userAgent.toLowerCase();
        if (/Android/i.test(userAgent)) {
            // 微信
            var match = userAgent.match(/tbs\/(\d+)/i);
            if (match && match[1] > '036849') {
                return true;
            }
            // QQ 浏览器
            match = userAgent.match(/mqqbrowser\/([\d.]+)/i);

            if (match && match[1] >= 7.1) {
                return true;
            }
        }
        return false;
    }

    function VideoPlayer(options) {
        $.extend(this, VideoPlayer.defaultOptions, options)
        this.init();
    }

    VideoPlayer.prototype = {

        constructor: VideoPlayer,

        init: function () {
            var me = this;
            me.getVideoHtml();
            me.bindEvent();
        },

        getVideoHtml: function () {
            var me = this;
            var container = $('#' + me.container);

            var videoHtml = '';
            if (supportX5VideoPlayer()) {
                videoHtml   =   ''
                            +   '<video'
                            +   ' id="myVideo" src="'
                            +   me.src
                            +   '" poster="'
                            +   me.poster
                            +   '"'
                            +   ' x5-video-player-type="h5" x5-video-orientation="portrait" controls="true" webkit-playsinline="true" playsinline="true" '
                            +   'style="background-color: #000; width: 100%; height: 100%; position: absolute"'
                            +   '></video>';
            }
            else {
                videoHtml   =   ''
                            +   '<video'
                            +   ' id="myVideo" src="'
                            +   me.src
                            +   '" poster="'
                            +   me.poster
                            +   '"'
                            +   ' controls="true" webkit-playsinline="true" playsinline="true" '
                            +   'style="background-color: #000; width: 100%; height: 100%;"'
                            +   '></video>';
            }
            me.element = $(videoHtml);
            container.append(
                $(videoHtml)
            );
        },

        refreshX5Video: function (status) {
            var me = this;
            var video = me.element[0];
            var style;

            if (status === INTOX5) {
                style = {
                    'background-color': '#000',
                    'height': deviceHeight,
                    'width': '100%',
                    'object-position': '0px 0px',
                    'position': 'absolute'
                };
                myVideo.style["object-position"]= "0px 0px";
                var container = $('#' + me.container);
                container.css('height', deviceHeight);
                $(video).css(style);
            }
            else {
                style = {
                    'height': '100%',
                    'width': '100%',
                    'background-color': '#000'
                };
                var container = $('#' + me.container);
                container.height(me.containerHeight);
            }
            $(video).css(style);
        },

        bindEvent: function () {
            var me = this;

            if (supportX5VideoPlayer()) {
                myVideo.addEventListener('x5videoenterfullscreen', function () {
                    me.status = VIDEO_STATUS_PLAYING;
                    me.refreshX5Video(INTOX5);
                });

                myVideo.addEventListener('x5videoexitfullscreen', function () {
                    me.status = VIDEO_STATUS_PAUSED;
                    me.refreshX5Video(EXITX5);
                });
            }

            myVideo.addEventListener('durationchange', function () {
                if ($.isFunction(me.onDurationChange)) {
                    me.onDurationChange(myVideo.currentTime, arguments);
                }
            });

            myVideo.addEventListener('canplay', function () {
                if ($.isFunction(me.onCanPlay)) {
                    me.onCanPlay(myVideo.currentTime, arguments);
                }
            });

            myVideo.addEventListener('pause', function () {
                me.status = VIDEO_STATUS_PAUSED;
                if ($.isFunction(me.onPause)) {
                    me.onPause(myVideo.currentTime, arguments);
                }
            });

            myVideo.addEventListener('timeupdate', function () {
                if (me.status !== VIDEO_STATUS_PLAYING) {
                    me.status = VIDEO_STATUS_PLAYING;
                }
                if ($.isFunction(me.onTimeUpdate)) {
                    me.onTimeUpdate(myVideo.currentTime, arguments);
                }
            });

            myVideo.addEventListener('ended', function () {
                me.status = VIDEO_STATUS_END;
                if ($.isFunction(me.onEnd)) {
                    me.onEnd(myVideo.currentTime, arguments);
                }
            });

            myVideo.addEventListener('error', function () {
                if ($.isFunction(me.onError)) {
                    me.onError(myVideo.currentTime, arguments);
                }
            });

        },

        play: function (time) {
            var me = this;

            if (time && me.status !== VIDEO_STATUS_FIRSTPLAY) {
                myVideo.currentTime = time;
                myVideo.play();
            }

            myVideo.play();
        },

        pause: function () {
            myVideo.pause();
        }
    }

    VideoPlayer.defaultOptions = {
        container: 'main',
        containerHeight: '100px',
        src: '',
        poster: '',
        status: VIDEO_STATUS_FIRSTPLAY,
    };

    VideoPlayer.version = '0.0.1';

    window.VideoPlayer = VideoPlayer;

    return VideoPlayer;

})();