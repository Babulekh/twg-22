"use strict";
exports.__esModule = true;
var pixi_js_1 = require("pixi.js");
var scripts_1 = require("./scripts");
var app = new pixi_js_1.Application({
    width: 500,
    height: 500,
    backgroundAlpha: 120,
    antialias: true
});
// app.renderer.backgroundColor = 0x23395d;
app.renderer.resize(window.innerWidth, window.innerHeight);
// app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);
var gManager = scripts_1.GameManager.getInstance();
app.stage.addChild(gManager.currentScene);
