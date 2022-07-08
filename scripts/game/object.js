"use strict";
exports.__esModule = true;
exports.GameObject = void 0;
var gameManager_1 = require("./managers/gameManager");
var audioManager_1 = require("./managers/audioManager");
var pixi_js_1 = require("pixi.js");
var GameObject = /** @class */ (function () {
    function GameObject(name, id, assetSrc, coords, rotate, scale, active) {
        if (name === void 0) { name = ''; }
        if (id === void 0) { id = ''; }
        if (assetSrc === void 0) { assetSrc = '/resources/sprites/base.png'; }
        if (coords === void 0) { coords = [0, 0]; }
        if (rotate === void 0) { rotate = [0, 0]; }
        if (scale === void 0) { scale = [1, 1]; }
        if (active === void 0) { active = true; }
        this.name = name;
        this.id = id;
        this.assetSrc = assetSrc;
        this.coords = coords;
        this.rotate = rotate;
        this.scale = scale;
        this.active = active;
        this.coordX = coords[0], this.coordY = coords[1];
        this.gameManager = gameManager_1.GameManager.getInstance();
        this.audioManager = new audioManager_1.AudioManager(100);
        this.init();
    }
    GameObject.prototype.init = function () {
        this.object = pixi_js_1.Sprite.from(this.assetSrc);
        this.object.x = this.coordX;
        this.object.y = this.coordY;
        this.gameManager.onObjectCreate(this);
    };
    GameObject.prototype.move = function (deltaX, deltaY) {
        this.object.x += deltaX;
        this.object.y += deltaY;
    };
    GameObject.prototype.playSound = function (src, volume) {
        this.audioManager.playSound(src);
    };
    GameObject.prototype.destroy = function () {
        this.gameManager.onObjectDestroy(this);
        // this = null; todo реализовать удаление экземпляра класса
    };
    return GameObject;
}());
exports.GameObject = GameObject;
