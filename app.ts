import { Application } from 'pixi.js';
import { GameManager } from './scripts';

const app = new Application({
	width: 1200,
	height: 1200,
	backgroundAlpha: 0,
	antialias: true,
});

app.ticker.add((delta) => {
	gManager.currentScene.enemies.forEach((enemy) => {
		if (Math.random() < 0.99) return;

		const axis = Math.random() > 0.5 ? 'X' : 'Y';

		if (Math.random() > 0.5) enemy[axis] += 1;
		else enemy[axis] -= 1;
	});
});

function movePlayer({ key }: KeyboardEvent) {
	switch (key) {
		case 'w':
			gManager.currentScene.player.Y -= 1;
			break;
		case 's':
			gManager.currentScene.player.Y += 1;
			break;
		case 'a':
			gManager.currentScene.player.X -= 1;
			break;
		case 'd':
			gManager.currentScene.player.X += 1;
			break;
		default:
			break;
	}
}

const gManager = GameManager.getInstance();

// app.renderer.resize(window.innerWidth, window.innerHeight);
gManager.currentScene.render();

document.body.appendChild(app.view);
app.stage.addChild(gManager.currentScene.container);

window.addEventListener('keydown', movePlayer);
