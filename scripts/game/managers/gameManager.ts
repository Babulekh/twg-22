import { AudioManager } from './audioManager';
import { LevelManager } from './levelManager';

import { Scene } from '../scene';
import { Container } from 'pixi.js';

interface GameManager {
	audioManager: AudioManager;
	levelManager: LevelManager;
	currentScene: Scene;
	level: number;
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
		this.init();
	}

	public static getInstance(): GameManager {
		return GameManager._instance;
	}

	init() {
		this.level = 0;
		this.currentScene = this.levelManager.loadScene(this.level);
		// audioManager.playSound('');
	}
}

export { GameManager };

// Использование gameManager = GameManager.getInstance();
