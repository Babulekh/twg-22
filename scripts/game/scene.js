"use strict";
exports.__esModule = true;
exports.Scene = void 0;
var pixi_js_1 = require("pixi.js");
var TileType;
(function (TileType) {
    TileType[TileType["Empty"] = 0] = "Empty";
    TileType[TileType["Wall"] = 1] = "Wall";
    TileType[TileType["Player"] = 2] = "Player";
    TileType[TileType["Enemy"] = 3] = "Enemy";
    // etc...
})(TileType || (TileType = {}));
var Scene = /** @class */ (function () {
    function Scene(level) {
        this.level = level;
        this.init();
    }
    Scene.prototype.init = function () {
        var resolution = 32; // длина одного спрайта в пикселях
        var board = this.level.board;
        var Empty = require('../../assets/sprites/Empty.png');
        var Wall = require('../../assets/sprites/Wall.png');
        // Load resources
        var loader = new pixi_js_1.Loader();
        loader.add(Empty).load();
        loader.add(Wall).load();
        this.container = new pixi_js_1.Container();
        // 1. Рендер поля
        for (var i = 0; i < board.length; i++) {
            var row = board[i];
            for (var j = 0; j < row.length; j++) {
                var tile = board[i][j];
                var sprite = void 0;
                switch (tile) {
                    case TileType.Empty:
                        sprite = new pixi_js_1.Sprite(loader.resources[Empty].texture);
                        break;
                    case TileType.Wall:
                        sprite = new pixi_js_1.Sprite(loader.resources[Wall].texture);
                    // etc...
                    default:
                        sprite.x = j * resolution;
                        sprite.y = i * resolution;
                        break;
                }
                this.container.addChild(sprite);
            }
        }
        // 2. Размещение игрока
        // 3. Размещение врагов
        return this.container;
    };
    return Scene;
}());
exports.Scene = Scene;
