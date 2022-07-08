import { AudioManager } from './audioManager';
import { LevelManager } from './levelManager';

interface GameManager {
	onObjectCreate: Function;
	onObjectDestroy: Function;
	level: number;
}

class GameManager {
	private static _instance: GameManager = new GameManager();

	constructor() {
		if (GameManager._instance) throw new Error('Error: Instantiation failed: Use GameManager.getInstance() instead of new.');
		GameManager._instance = this;
		GameManager._instance.init();
	}

	public static getInstance(): GameManager {
		return GameManager._instance;
	}

	init() {
		const audioManager = new AudioManager(100);
		const levelManager = new LevelManager();

		this.level = 0;
		levelManager.loadScene(this.level);
		// audioManager.playSound('');
	}
}

export { GameManager };

// Использование gameManager = GameManager.getInstance();
