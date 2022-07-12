import { AudioManager, SoundType } from './audioManager';
import { LevelManager } from './levelManager';

import { Scene } from '../scene';
import { Container } from 'pixi.js';

interface GameManager {
	audioManager: AudioManager;
	levelManager: LevelManager;
	currentScene: Scene;
	resolution: number;
	onObjectCreate: Function;
	onObjectDestroy: Function;
}

class GameManager {
	private static _instance: GameManager = new GameManager();

	constructor() {
		if (GameManager._instance) throw new Error('Error: Instantiation failed: Use GameManager.getInstance() instead of new.');
		GameManager._instance = this;
		this.audioManager = new AudioManager(0.5, SoundType.Default);
		this.levelManager = new LevelManager();
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
	}

	get stage(): Container {
		return this.currentScene.container;
	}
}

export { GameManager };

// Использование gameManager = GameManager.getInstance();
