"use strict";
exports.__esModule = true;
exports.AudioManager = void 0;
var howler_1 = require("howler");
var AudioManager = /** @class */ (function () {
    function AudioManager(volume) {
        this.volume = volume;
    }
    AudioManager.prototype.init = function () {
        howler_1.Howler.volume(this.volume);
    };
    AudioManager.prototype.playSound = function (src) {
        var sound = new howler_1.Howl({
            src: src
        });
        sound.play();
    };
    return AudioManager;
}());
exports.AudioManager = AudioManager;
