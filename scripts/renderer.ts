import { Application } from 'pixi.js';
import { GameManager } from './game/managers/gameManager';

interface Renderer {
	app: Application;
}

class Renderer {
	private static _instance: Renderer = new Renderer();

	constructor() {
		if (Renderer._instance) throw new Error('Error: Instantiation failed: Use Renderer.getInstance() instead of new.');
		Renderer._instance = this;

		this.app = new Application({
			width: 1200,
			height: 900,
			backgroundAlpha: 0,
			antialias: false,
		});
	}

	public static get Instance(): Renderer {
		return Renderer._instance;
	}

	changeScene() {
		this.app.stage.removeChild();
		this.app.stage.addChild(GameManager.Instance.currentScene.container);
	}
}

export { Renderer };
