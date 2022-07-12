import { Application } from 'pixi.js';
import { GameManager } from './scripts';

const app = new Application({
	width: 1200,
	height: 900,
	backgroundAlpha: 0,
	antialias: false,
});

app.ticker.add((delta) => {
	gManager.currentScene.enemies.forEach((enemy) => {
		if (Math.random() < 0.99) return;

		const axis = Math.random() > 0.5 ? 'x' : 'y';

		enemy.move({[axis]: Math.random() > 0.5 ? 1 : -1})
	});
});

const gManager = GameManager.Instance;

gManager.level = 1;
document.body.appendChild(app.view);
app.stage.addChild(gManager.stage);
