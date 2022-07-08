import { Application } from 'pixi.js';
import { GameManager } from './scripts';

const app = new Application({
	width: 500,
	height: 500,
	backgroundAlpha: 120,
	antialias: true,
});

app.renderer.backgroundColor = 0x23395d;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const gManager = GameManager.getInstance();