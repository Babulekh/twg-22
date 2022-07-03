import { AudioManager } from './audioManager';
import { LevelManager } from './levelManager';

class GameManager {
	level = 0;

	constructor() {
		// синглтон
		if (GameManager._instance) {
			return GameManager._instance;
		}
		GameManager._instance = this;

		this.init();
	}

	init() {
		const audioManager = new AudioManager();
		const levelManager = new LevelManager();

		levelManager.loadScene(0); // TODO возможность включать другие сцены

		audioManager.playSound('');
	}
}
