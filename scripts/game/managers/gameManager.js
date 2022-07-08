"use strict";
exports.__esModule = true;
exports.GameManager = void 0;
var audioManager_1 = require("./audioManager");
var levelManager_1 = require("./levelManager");
var GameManager = /** @class */ (function () {
    function GameManager() {
        if (GameManager._instance)
            throw new Error('Error: Instantiation failed: Use GameManager.getInstance() instead of new.');
        GameManager._instance = this;
        GameManager._instance.init();
        this.audioManager = new audioManager_1.AudioManager(100);
        this.levelManager = new levelManager_1.LevelManager();
    }
    GameManager.getInstance = function () {
        return GameManager._instance;
    };
    GameManager.prototype.init = function () {
        this.level = 0;
        this.currentScene = this.levelManager.loadScene(this.level);
        // audioManager.playSound('');
    };
    GameManager._instance = new GameManager();
    return GameManager;
}());
exports.GameManager = GameManager;
// Использование gameManager = GameManager.getInstance();
