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
exports.Character = void 0;
var object_1 = require("../../game/object");
var healthStats_1 = require("../../objectComponents/healthStats");
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        var _this = _super.call(this) || this;
        _this.healthStats = new healthStats_1.HealthStats(_this, 100, 100, false);
        return _this;
    }
    return Character;
}(object_1.GameObject));
exports.Character = Character;
