"use strict";
exports.__esModule = true;
exports.LevelManager = void 0;
var scene_1 = require("../scene");
var LevelManager = /** @class */ (function () {
    function LevelManager(level) {
        if (level === void 0) { level = 0; }
        this.level = level;
    }
    LevelManager.prototype.loadScene = function (index) {
        var rawLevel = require("../../../assets/levels/".concat(index, ".json")); // Устанавливатть номер уровня
        var level = JSON.parse(rawLevel);
        // let data: Array<any> = [];  TODO собираем инфу из json файла отдельного уровня (возьмем по индексу)
        var scene = new scene_1.Scene(level);
        return scene;
    };
    LevelManager.prototype.reloadScene = function () {
        this.loadScene(this.level);
    };
    return LevelManager;
}());
exports.LevelManager = LevelManager;
