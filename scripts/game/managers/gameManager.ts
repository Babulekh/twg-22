import { AudioManager } from './audioManager';
import { LevelManager } from './levelManager';

interface GameManager {
	_instance: any; //todo
	onObjectCreate: Function;
	onObjectDestroy: Function;
}

class GameManager {
	level = 0;

	constructor() {
		// синглтон
		// if (GameManager._instance) {
		// 	return GameManager._instance;
		// }
		// GameManager._instance = this;
		// todo
		this.init();
	}

	init() {
		const audioManager = new AudioManager(100);
		const levelManager = new LevelManager();

		levelManager.loadScene(0); // TODO возможность включать другие сцены

		audioManager.playSound('');
	}
}

export { GameManager };
