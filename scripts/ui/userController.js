"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var controlSettings_json_1 = require("./controlSettings.json");
var UserController = /** @class */ (function () {
    function UserController() {
        if (UserController._instance)
            throw new Error('Error: Instantiation failed: Use UserController.getInstance() instead of new.');
        UserController._instance = this;
        UserController._instance.init();
    }
    UserController.getInstance = function () {
        return UserController._instance;
    };
    UserController.prototype.init = function () {
        this.controlSettings = controlSettings_json_1["default"];
    };
    UserController._instance = new UserController();
    return UserController;
}());
exports.UserController = UserController;
