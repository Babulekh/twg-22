import { Application } from 'pixi.js';
import { GameManager } from './scripts';

const app = new Application({
	width: 600,
	height: 600,
	backgroundAlpha: 0,
	antialias: true,
});

app.ticker.add((delta) => {
	// gManager.currentScene.render();
});

function movePlayer(event: KeyboardEvent) {
	switch (event.key) {
		case 'ArrowUp':
			gManager.currentScene.player.sprite.y -= 32;
			break;
		case 'ArrowDown':
			gManager.currentScene.player.sprite.y += 32;
			break;
		case 'ArrowLeft':
			gManager.currentScene.player.sprite.x -= 32;
			break;
		case 'ArrowRight':
			gManager.currentScene.player.sprite.x += 32;
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