import { AudioManager } from "./audioManager";
import { LevelManager } from "./levelManager";

class GameManager {
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

        audioManager.playSound('');
	}
}