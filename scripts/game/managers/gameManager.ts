import { AudioManager } from './audioManager';
import { LevelManager } from './levelManager';

import { Scene } from '../scene';
import { Renderer } from '../../renderer';

interface GameManager {
	audioManager: AudioManager;
	levelManager: LevelManager;
	currentScene: Scene;
	renderer: Renderer;
	resolution: number;
	onObjectCreate: Function;
	onObjectDestroy: Function;
}

class GameManager {
	private static _instance: GameManager = new GameManager();

	constructor() {
		if (GameManager._instance) throw new Error('Error: Instantiation failed: Use GameManager.getInstance() instead of new.');
		GameManager._instance = this;
		this.audioManager = new AudioManager(100);
		this.levelManager = new LevelManager();
		this.renderer = Renderer.Instance;
		this.resolution = 64;
	}

	public static get Instance(): GameManager {
		return GameManager._instance;
	}

	get level() {
		return this.levelManager.level;
	}

	set level(level: number) {
		this.levelManager.level = level;
		this.currentScene = this.levelManager.scene;
		this.currentScene.render();
		this.renderer.changeScene();
	}

	get view() {
		return this.renderer.app.view;
	}
}

export { GameManager };

// Использование gameManager = GameManager.getInstance();
