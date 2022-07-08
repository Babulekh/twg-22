"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Enemy = void 0;
var character_1 = require("./character");
var ActiveBehaviour;
(function (ActiveBehaviour) {
    ActiveBehaviour["Patrol"] = "patrol";
    ActiveBehaviour["Idle"] = "idle";
})(ActiveBehaviour || (ActiveBehaviour = {}));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super.call(this) || this;
        _this.activeBehaviour = ActiveBehaviour.Patrol;
        return _this;
    }
    return Enemy;
}(character_1.Character));
exports.Enemy = Enemy;
